import { createFileRoute } from '@tanstack/react-router';
import { Login } from "../../components/Auth/Login.tsx";
import { AuthLayout } from "../../Layout/AuthLayout.tsx";

export const Route = createFileRoute('/auth/login')({
    component: () => (
        <AuthLayout>
            <Login />
        </AuthLayout>
    ),
});
