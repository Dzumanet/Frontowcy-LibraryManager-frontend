import { object, number, string } from "yup";
import { requiredString } from "./helper.ts";

export const bookSchema = (isEditMode: boolean, availableCopies?: number) =>
    object({
        title: requiredString("Title is required"),
        author: requiredString("Author is required"),
        description: string(),
        year: number()
            .typeError("Year must be a number")
            .integer("Year must be an integer")
            .min(1000, "Year must be at least 1000")
            .max(new Date().getFullYear(), `Year cannot be in the future`)
            .required("Year is required"),
        totalCopies: number()
            .typeError("Total Copies must be a number")
            .integer("Total Copies must be an integer")
            .min(
                isEditMode && availableCopies !== undefined ? availableCopies : 1,
                isEditMode && availableCopies !== undefined
                    ? `Total Copies cannot be less than the number of currently borrowed books (${availableCopies})`
                    : "Total Copies must be at least 1"
            ),
        category: requiredString("Category is required"),
    });
