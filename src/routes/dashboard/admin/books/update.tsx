import { createFileRoute } from '@tanstack/react-router';
import { UpdateBook } from "../../../../components/Book/UpdateBook.tsx";

export const Route = createFileRoute('/dashboard/admin/books/update')({
    component: UpdateBook,
});

