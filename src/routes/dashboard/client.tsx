import { createFileRoute, Navigate, Outlet } from '@tanstack/react-router';
import { useAuthStore } from "../../store/useAuthStore.ts";
import { Box } from "@mui/material";

export const Route = createFileRoute('/dashboard/client')({
    component: RouteComponent,
});

function RouteComponent() {
    const isAuthorized = useAuthStore((store) => store.isAuthorized);

    if (!isAuthorized) return <Navigate to="/" />;

    return <Box
        sx={{ padding: 3, minHeight: 'calc(100vh - 154px)', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Outlet />
    </Box>;
}
