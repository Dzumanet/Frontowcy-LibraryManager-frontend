import { createFileRoute } from '@tanstack/react-router';
import { Dashboard } from "../../../pages/Admin/Dashboard.tsx";

export const Route = createFileRoute('/dashboard/admin/')({
    component: Dashboard,
});

