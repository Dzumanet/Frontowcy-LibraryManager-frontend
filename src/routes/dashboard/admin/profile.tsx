import { createFileRoute } from '@tanstack/react-router';
import { UserProfile } from "../../../pages/Client/UserProfile.tsx";

export const Route = createFileRoute('/dashboard/admin/profile')({
    component: UserProfile,
});
