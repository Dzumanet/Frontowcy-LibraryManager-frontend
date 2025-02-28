import { createFileRoute } from '@tanstack/react-router';
import { DeleteBookModal } from "../../../../components/Modal/DeleteBookModal.tsx";

export const Route = createFileRoute(
    '/dashboard/admin/books/update/delete/$id',
)({
    component: DeleteBookModal,

});
