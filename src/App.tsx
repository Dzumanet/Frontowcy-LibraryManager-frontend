import { routeTree } from "./routeTree.gen.ts";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";
import { theme } from "./theme/theme.ts";
import { useAuthStore } from "./store/useAuthStore.ts";
import { useEffect } from "react";

const queryClient = new QueryClient;

const router = createRouter({
    routeTree,
    defaultPreload: 'intent',
    context: {
        queryClient,
        isAuthorized: false,
    },
});

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}


export const App = () => {
    const { isAuthorized, verifySession } = useAuthStore();

    useEffect(() => {
        verifySession();
    }, [verifySession]);

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
            <CssBaseline />
            <RouterProvider router={router} context={{ queryClient, isAuthorized }} />
            </ThemeProvider>
        </QueryClientProvider>
    );
};