import { BookModalWrapper } from "./BookModalWrapper.tsx";
import { useDeleteBookMutation } from "../../mutations/books";
import { Route } from "../../routes/dashboard/admin/books/update.delete.$id.tsx";


export const DeleteBookModal = () => {
    const { id } = Route.useParams();
    const { mutate: deleteBook } = useDeleteBookMutation();

    const handleDelete = () => {
        if (!id) return console.error("ID is undefined");
        deleteBook(id);
    };

    return <BookModalWrapper id={id} mode="delete" onConfirm={handleDelete} />;
};
