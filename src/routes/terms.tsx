import { createFileRoute } from '@tanstack/react-router';
import { TermsAndConditions } from "../pages/legal/TermsAndConditions.tsx";

export const Route = createFileRoute('/terms')({
    component: TermsAndConditions,
});
