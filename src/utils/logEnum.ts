import { LogActionEnum, StatusEnum } from "../types/log.ts";

export const logActionEnum = Object.entries(LogActionEnum).map(([key, value]) => ({
    label: key.replace(/_/g, ' '),
    value,
}));

export const logStatusEnum = Object.entries(StatusEnum).map(([key, value]) => ({
    label: key.replace(/_/g, ' '),
    value,
}));