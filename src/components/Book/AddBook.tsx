import { RegisterBookDto } from "../../types/book.ts";
import { useAddBookMutation, useUploadBookImageMutation } from "../../mutations/books";
import { BookForm } from "./BookForm.tsx";
import { CircularProgress } from "../UI/CircularProgress.tsx";
import { Box } from "@mui/material";


export const AddBook = () => {
    const { mutateAsync: addBook, isPending: isAddingBook } = useAddBookMutation();
    const { mutate: uploadImage, isPending: isUploadingImage } = useUploadBookImageMutation();

    const handleAddBook = async (data: RegisterBookDto, file: File | null) => {
        const { ...bookData } = data;

        await addBook(
            {
                ...bookData,
                bookPictureUrl: null,
            },
            {
                onSuccess: (response) => {
                    if (file && response.id) {
                        uploadImage({ id: response.id, file });
                    }
                },
            }
        );
    };

    if (isAddingBook || isUploadingImage) return <CircularProgress />;

    return (
        <Box sx={{
            width: '80%',
            margin: '0 auto',
        }}>
            <BookForm onSubmit={handleAddBook} submitLabel="Add Book" />
        </Box>
    );
};