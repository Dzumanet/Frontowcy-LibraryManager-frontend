import { createFileRoute } from '@tanstack/react-router';
import { Dashboard } from "../../../pages/Client/Dashboard.tsx";

export const Route = createFileRoute('/dashboard/client/')({
    component: Dashboard,
});
