import { createFileRoute } from '@tanstack/react-router';
import { LoansList } from "../../../pages/Admin/LoanList.tsx";

export const Route = createFileRoute('/dashboard/admin/loans')({
    component: LoansList,
});

