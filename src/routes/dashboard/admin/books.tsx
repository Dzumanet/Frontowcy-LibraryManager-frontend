import { createFileRoute } from '@tanstack/react-router';
import { BooksManagement } from "../../../pages/Admin/BooksManagement.tsx";

export const Route = createFileRoute('/dashboard/admin/books')({
    component: BooksManagement,
});

