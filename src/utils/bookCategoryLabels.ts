import { BookCategoryEnum } from "../types/book.ts";

export const bookCategoryLabels: Record<BookCategoryEnum, string> = {
    [BookCategoryEnum.FICTION]: 'Fiction',
    [BookCategoryEnum.NON_FICTION]: 'Non-fiction',
    [BookCategoryEnum.SCIENCE_FICTION]: 'Science Fiction',
    [BookCategoryEnum.FANTASY]: 'Fantasy',
    [BookCategoryEnum.MYSTERY]: 'Mystery',
    [BookCategoryEnum.HORROR]: 'Horror',
    [BookCategoryEnum.ROMANCE]: 'Romance',
    [BookCategoryEnum.HISTORY]: 'History',
    [BookCategoryEnum.BIOGRAPHY]: 'Biography',
    [BookCategoryEnum.SCIENCE]: 'Science',
    [BookCategoryEnum.PHILOSOPHY]: 'Philosophy',
    [BookCategoryEnum.PSYCHOLOGY]: 'Psychology',
    [BookCategoryEnum.BUSINESS]: 'Business',
    [BookCategoryEnum.SELF_HELP]: 'Self-Help',
    [BookCategoryEnum.EDUCATION]: 'Education',
    [BookCategoryEnum.RELIGION]: 'Religion',
    [BookCategoryEnum.ART]: 'Art',
    [BookCategoryEnum.MUSIC]: 'Music',
    [BookCategoryEnum.COOKING]: 'Cooking',
    [BookCategoryEnum.TRAVEL]: 'Travel',
    [BookCategoryEnum.OTHER]: 'Other',
};
