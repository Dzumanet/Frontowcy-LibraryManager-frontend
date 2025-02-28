import { createFileRoute, Navigate, Outlet } from '@tanstack/react-router';
import { Box } from "@mui/material";
import { useAuthStore } from "../../store/useAuthStore.ts";

export const Route = createFileRoute('/dashboard/admin')({
    component: RouteComponent,
});

function RouteComponent() {
    const isAuthorized = useAuthStore((store) => store.isAuthorized);

    if (!isAuthorized) return <Navigate to="/" />;

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    maxWidth: '1800px',
                    width: '100%',
                    height: 'calc(100vh - 164px)',
                    mx: 'auto',
                }}
            >
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Outlet />
                </Box>
            </Box>
        </>
    );
}
