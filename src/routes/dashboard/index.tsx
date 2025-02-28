import { createFileRoute, Navigate } from '@tanstack/react-router';
import { useAuthStore } from "../../store/useAuthStore.ts";

export const Route = createFileRoute('/dashboard/')({
    component: RouteComponent,
});

function RouteComponent() {
    const role = useAuthStore((state) => state.role);
    console.log('dashboard', role);

    if (role === 'admin') {
        return <Navigate to="/dashboard/admin" />;
    }
    if (role === 'client') {
        return <Navigate to="/dashboard/client" />;
    }

    return <Navigate to="/auth/login" />;
}
