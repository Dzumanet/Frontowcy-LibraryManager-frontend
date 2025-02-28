import { createFileRoute } from '@tanstack/react-router';
import { MyLoans } from "../../../pages/Client/MyLoans.tsx";
import { myLoansOptions } from "../../../queries/loans";

export const Route = createFileRoute('/dashboard/client/loans')({
    component: MyLoans,
    loader: async ({ context }) => {
        const { queryClient } = context;
        try {
            return await queryClient.ensureQueryData(myLoansOptions({}));
        } catch {
            throw new Error('Could not load loan data.');
        }

    }
});
