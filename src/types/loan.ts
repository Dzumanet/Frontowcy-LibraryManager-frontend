import { Book, BooksList } from "./book.ts";
import { User } from "./user.tsx";


export const LoanStatusEnum =  {
    BORROWED: 'borrowed',
    RETURNED: 'returned',
    RETURNED_LATE: 'returned_late',
    OVERDUE: 'overdue',
    FORCED_RETURNED: 'forced_returned',
} as const;

export type LoanStatusEnum = typeof LoanStatusEnum[keyof typeof LoanStatusEnum];


export type Loan = {
    id: string;
    loanDate: Date;
    dueDate: Date;
    returnedAt?: Date;
    loanStatus: LoanStatusEnum;
    book: BooksList;
}

export type CreateLoanDto = {
    userId: string;
    bookId: string;
}

export type CreateLoansResponseDto = {
    id: string;
    loanDate: Date;
    dueDate: Date;
    loanStatus: 'borrowed';
}

export type AdminLoanResponse = {
    id: string;
    loanDate: Date;
    dueDate: Date;
    returnedAt: Date;
    loanStatus: string;
    book: Book;
    user: User;
}

export type AdminLoanStatistics = {
    totalUniqueBooks: number;
    totalCopies: number;
    totalLoans: number;
    borrowed: number;
    returned: number;
    returnedLate: number;
    overdue: number;
    forcedReturned: number;
}

export type UpdateLoanDto = {
    loanStatus?: LoanStatusEnum;
    returnedAt?: Date;
    forcedByAdmin?: string;
}