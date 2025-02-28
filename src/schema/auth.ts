import { InferType, object } from "yup";
import { requiredString } from "./helper.ts";

export const loginSchema = object({
    libraryCardNumber: requiredString("This field is required")
        .matches(/^LIB-[A-Z0-9]{6}$/, "Library card number must start with 'LIB-' followed by 6 digits"),
    pwd: requiredString().min(6),
});

export const registerSchema = object({
    firstName: requiredString().min(2),
    lastName: requiredString().min(2),
    email: requiredString().email().min(6),
    pwd: requiredString("Password is required").min(6, "Password must be at least 6 characters"),
});

export type LoginData = InferType<typeof loginSchema>;
export type RegisterData = InferType<typeof registerSchema>;