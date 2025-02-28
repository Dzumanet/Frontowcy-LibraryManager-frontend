import { useState, useEffect, ChangeEvent } from "react";
import { useForm, SubmitHandler, Resolver } from "react-hook-form";
import { Box, Button } from "@mui/material";
import { BookFormData, RegisterBookDto } from "../../types/book.ts";
import { BookFormFields } from "./BookFormFields.tsx";
import { BookImageUpload } from "./BookImageUpload.tsx";
import { yupResolver } from "@hookform/resolvers/yup";
import { bookSchema } from "../../schema/book.ts";
import { InferType } from "yup";

interface BookFormProps {
    defaultValues?: RegisterBookDto;
    onSubmit: (data: RegisterBookDto, file: File | null, removeImage: boolean) => void;
    submitLabel?: string;
    mode?: 'add' | 'edit';
    availableCopies?: number;
}

export const BookForm = ({
                             defaultValues,
                             onSubmit,
                             submitLabel = "Submit",
                             mode = "add",
                             availableCopies
                         }: BookFormProps) => {
    const schema = bookSchema(mode === 'edit', availableCopies);

    type FormData = InferType<typeof schema>;

    const form = useForm<BookFormData>({
        resolver: yupResolver(schema) as Resolver<BookFormData>,
        defaultValues: {
            ...defaultValues,
            totalCopies: defaultValues?.totalCopies ?? 1,
        }
    });

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(defaultValues?.bookPictureUrl || null);
    const [removeImage, setRemoveImage] = useState(false);

    useEffect(() => {
        if (selectedFile) {
            const objectUrl = URL.createObjectURL(selectedFile);
            setPreview(objectUrl);
            return () => URL.revokeObjectURL(objectUrl);
        } else if (defaultValues?.bookPictureUrl) {
            setPreview(defaultValues.bookPictureUrl);
        } else {
            setPreview(null);
        }
    }, [selectedFile, defaultValues?.bookPictureUrl]);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        console.log("Selected file:", file);
        setSelectedFile(file || null);
        setRemoveImage(false);
    };

    const handleRemoveImage = () => {
        setSelectedFile(null);
        setPreview(null);
        setRemoveImage(true);
    };

    const handleFormSubmit: SubmitHandler<FormData> = (data) => {
        const formattedData: RegisterBookDto = {
            ...data,
            totalCopies: data.totalCopies ?? 1,
        };

        onSubmit(formattedData, selectedFile, removeImage);
        form.reset();
        setSelectedFile(null);
        setPreview(null);
        setRemoveImage(false);
    };


    return (
        <Box>
            <Box component="form" onSubmit={form.handleSubmit(handleFormSubmit)}
                 sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>

                <BookFormFields form={form} mode={mode} availableCopies={availableCopies} />

                <BookImageUpload preview={preview} onFileChange={handleFileChange} onRemoveImage={handleRemoveImage} />

                <Box sx={{ margin: '0 auto' }}>
                    <Button variant="outlined" type="submit">
                        {submitLabel}
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};
