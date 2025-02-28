import { createFileRoute } from '@tanstack/react-router';
import { BookDetailsModal } from "../../components/Modal/BookDetailsModal.tsx";

export const Route = createFileRoute('/books/$id')({
    component: BookDetailsModal,
});

