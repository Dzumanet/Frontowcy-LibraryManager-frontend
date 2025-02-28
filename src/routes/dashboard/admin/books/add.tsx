import { createFileRoute } from '@tanstack/react-router';
import { AddBook } from "../../../../components/Book/AddBook.tsx";


export const Route = createFileRoute('/dashboard/admin/books/add')({
    component: AddBook,
});


