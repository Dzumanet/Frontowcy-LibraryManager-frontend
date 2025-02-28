import * as React from 'react';
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { QueryClient } from "@tanstack/react-query";
import { Box } from "@mui/material";
import { Header } from "../Layout/Header.tsx";
import { Suspense } from "react";
import { Footer } from "../Layout/Footer.tsx";
import { NotFound } from "../pages/Home/NotFound.tsx";

const TanStackRouterDevtools = import.meta.env.DEV ?
    React.lazy(() => import('@tanstack/router-devtools').then((res) => ({
        default: res.TanStackRouterDevtools
    })))
    : () => null;


const RootComponent = () => {

    return (
        <>
            <Box sx={{
                minHeight: 'calc(100vh - 67px)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
            }}>
                <Header />
                <Outlet />
            </Box>
            <Footer />
            <Suspense>
                <TanStackRouterDevtools />
            </Suspense>
        </>
    );
};

type RootContext = {
    queryClient: QueryClient,
    isAuthorized: boolean,
}

export const Route = createRootRouteWithContext<RootContext>()({
    component: RootComponent,
    notFoundComponent: NotFound,
});

