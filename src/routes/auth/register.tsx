import { createFileRoute } from '@tanstack/react-router';
import { Register } from "../../components/Auth/Register.tsx";
import { AuthLayout } from "../../Layout/AuthLayout.tsx";

export const Route = createFileRoute('/auth/register')({
    component: () => (
        <AuthLayout flexDirection="row-reverse">
            <Register />
        </AuthLayout>
    ),
});

