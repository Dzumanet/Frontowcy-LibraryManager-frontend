import { BookCategoryEnum } from "../types/book.ts";

export const bookCategories = Object.entries(BookCategoryEnum).map(([key, value]) => ({
    label: key.replace(/_/g, ' '),
    value,
}));