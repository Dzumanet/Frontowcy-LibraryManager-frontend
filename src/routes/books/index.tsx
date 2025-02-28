import { createFileRoute } from '@tanstack/react-router';
import { booksOptions } from "../../queries/books";
import { Home } from "../../pages/Home/Home.tsx";

export const Route = createFileRoute('/books/')({
    component: Home,
    loader: async ({ context }) => {
        const { queryClient } = context;
        try {
            return await queryClient.ensureQueryData(booksOptions({}));
        } catch {
            throw new Error('Could not load books.');
        }
    }
});
