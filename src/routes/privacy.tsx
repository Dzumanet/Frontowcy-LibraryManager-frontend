import { createFileRoute } from '@tanstack/react-router';
import { PrivacyPolicy } from "../pages/legal/PrivacyPolicy.tsx";

export const Route = createFileRoute('/privacy')({
    component: PrivacyPolicy,
});
