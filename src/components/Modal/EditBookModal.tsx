import { BookModalWrapper } from "./BookModalWrapper.tsx";
import { Route } from "../../routes/dashboard/admin/books/update.$id.tsx";
import { useSuspenseQuery } from "@tanstack/react-query";
import { bookOptions } from "../../queries/books";
import { useUpdateBookMutation } from "../../mutations/books";
import { RegisterBookDto } from "../../types/book.ts";
import { BookForm } from "../Book/BookForm.tsx";
import { useUploadBookImageMutation } from "../../mutations/books";
import { useDeleteBookImageMutation } from "../../mutations/books";
import { useNavigate } from "@tanstack/react-router";


export const EditBookModal = () => {
    const { id } = Route.useParams();
    const { data: book } = useSuspenseQuery(bookOptions(id));
    const { mutate: updateBook } = useUpdateBookMutation(book.id);
    const { mutate: uploadImage } = useUploadBookImageMutation();
    const { mutate: deleteImage } = useDeleteBookImageMutation();
    const navigate = useNavigate();

    const handleEditBook = async (data: RegisterBookDto, file: File | null, removeImage: boolean) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { bookPictureUrl, ...bookData } = data;


        const handleClose = () => navigate({ to: "/dashboard/admin/books/update" });
        try {
            if (removeImage && book.bookPictureUrl) {
                await deleteImage(book.id);
            }

            updateBook({ ...bookData }, {
                onSuccess: () => {
                    handleClose();
                    if (file) {
                        uploadImage({ id: book.id, file });
                    }
                },
            });
        } catch (error) {
            console.error("Error updating book:", error);
        }
    };

    return (
        <BookModalWrapper id={id} mode="edit" onConfirm={() => {}}>
            <BookForm
                onSubmit={handleEditBook}
                submitLabel="Update book"
                availableCopies={book.availableCopies}
                mode='edit'
                defaultValues={{
                    title: book.title,
                    author: book.author,
                    year: book.year,
                    description: book.description,
                    totalCopies: book.totalCopies,
                    category: book.category,
                    bookPictureUrl: book.bookPictureUrl,
                }}
            />
        </BookModalWrapper>
    );
};
