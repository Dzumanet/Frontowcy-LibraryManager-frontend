import { LoanStatusEnum } from "../types/loan.ts";

export const loanStatusEnum = Object.entries(LoanStatusEnum).map(([key, value]) => ({
    label: key.replace(/_/g, ' '),
    value,
}));