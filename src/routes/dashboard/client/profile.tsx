import { createFileRoute } from '@tanstack/react-router';
import { UserProfile } from "../../../pages/Client/UserProfile.tsx";
import { categoryUserDetails } from "../../../queries/users";

export const Route = createFileRoute('/dashboard/client/profile')({
    component: UserProfile,
    loader: async ({ context }) => {
        const { queryClient } = context;
        try {
            return await queryClient.ensureQueryData(categoryUserDetails);
        } catch {
            throw new Error('Could not load user data.');
        }
    }
});