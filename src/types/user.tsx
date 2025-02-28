import { BooksList } from "./book.ts";

export type UserRole = 'client' | 'admin' | 'guest';

export type User = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    libraryCardNumber: string;
    role: UserRole;
    createdAt: Date;
    updatedAt: Date;
    lastLogin?: Date | null;
    profilePictureUrl?: string;
}

export type AuthLoginUser = {
    libraryCardNumber: string;
    pwd: string;
}

export type AuthLoginResponse = {
    userId: string,
    firstName: string,
    role: UserRole,
}


export type RegisterUserDto = {
    firstName: string;
    lastName: string;
    email: string;
    pwd: string;
}

export type RegisterUserResponse = {
    id: string;
    email: string;
    message: string;
    exists: boolean;
    libraryCardNumber: string;
    accountCreated: boolean;
}
export type UpdateUserDto = {
    firstName?: string;
    lastName?: string;
    email?: string;
    pwd?: string;
}

export type UserBorrowedBooksResponse = {
    libraryCardNumber: string;
    borrowedBooksCount: number;
    borrowedBooks: BooksList[];
}