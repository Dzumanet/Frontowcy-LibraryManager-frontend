import { createFileRoute } from '@tanstack/react-router';
import { Logs } from "../../../pages/Admin/Logs.tsx";

export const Route = createFileRoute('/dashboard/admin/logs')({
    component: Logs,
});
