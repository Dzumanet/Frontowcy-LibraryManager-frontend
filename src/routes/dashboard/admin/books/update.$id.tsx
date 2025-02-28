import { createFileRoute } from '@tanstack/react-router';
import { bookOptions } from "../../../../queries/books";
import { EditBookModal } from "../../../../components/Modal/EditBookModal.tsx";

export const Route = createFileRoute('/dashboard/admin/books/update/$id')({
    component: EditBookModal,
    loader: async ({ context, params }) => {
        const { queryClient } = context;
        const { id } = params;
        try {
            return await queryClient.ensureQueryData(bookOptions(id));
        } catch {
            throw new Error(`Failed to load book for idr "${id}"`);
        }
    }
});

