import { createFileRoute, Outlet } from '@tanstack/react-router';
import { Box } from "@mui/material";

export const Route = createFileRoute('/dashboard')({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <Box sx={{ minHeight: 'calc(100vh - 154px)', display: 'flex', flexDirection: 'column', flex: 1 }}>
            <Outlet />
        </Box>
    );
}
