export const BookCategoryEnum = {
    FICTION: 'fiction',
    NON_FICTION: 'non_fiction',
    SCIENCE_FICTION: 'science_fiction',
    FANTASY: 'fantasy',
    MYSTERY: 'mystery',
    HORROR: 'horror',
    ROMANCE: 'romance',
    HISTORY: 'history',
    BIOGRAPHY: 'biography',
    SCIENCE: 'science',
    PHILOSOPHY: 'philosophy',
    PSYCHOLOGY: 'psychology',
    BUSINESS: 'business',
    SELF_HELP: 'self_help',
    EDUCATION: 'education',
    RELIGION: 'religion',
    ART: 'art',
    MUSIC: 'music',
    COOKING: 'cooking',
    TRAVEL: 'travel',
    OTHER: 'other',
};


export type BookCategoryEnum = typeof BookCategoryEnum[keyof typeof BookCategoryEnum];


export type Book = {
    id: string;
    title: string;
    author: string;
    description: string;
    year: number;
    totalCopies: number;
    availableCopies: number;
    createdAt: Date;
    category: BookCategoryEnum;
    bookPictureUrl: string | null;
    isBorrowed: boolean;
}

export type BooksList = {
    id: string;
    title: string;
    author: string;
    year: number;
    totalCopies: number;
    availableCopies: number;
    category: BookCategoryEnum;
    bookPictureUrl: string | null;
}


export type DeleteBookResponse = {
    success: boolean;
    message: string;
}

export type RegisterBookDto = {
    title: string;
    author: string;
    description?: string;
    year: number;
    totalCopies: number;
    category: BookCategoryEnum;
    bookPictureUrl?: string | null;
}

export type BookFormData = Omit<RegisterBookDto, "bookPictureUrl"> & {totalCopies: number};

export type RegisterBookResponse = {
    id?: string;
    message: string;
    exists?: boolean;
    bookCreated?: boolean;
    errors?: string[];
}

export type UpdateBookDto = {
    id: string;
    title?: string;
    author?: string;
    description?: string;
    year?: number;
    totalCopies?: number;
    category?: BookCategoryEnum;
    bookPictureUrl?: string | null;

}



