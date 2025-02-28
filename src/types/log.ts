export const LogActionEnum =  {
    BORROWED: 'borrowed',
    RETURNED: 'returned',
    FORCED_RETURNED: 'forced_returned',
    OVERDUE: 'overdue',
    LOGIN: 'login',
    LOGOUT: 'logout',
    UPDATE_PROFILE: 'updateProfile',
    CREATE_PROFILE: 'createProfile',
    DELETE_ACCOUNT: 'deleteAccount',
    ADD_BOOK: 'addBook',
    EDIT_BOOK: 'editBook',
    DELETE_BOOK: 'deleteBook',
    UPLOAD_BOOK_IMAGE: 'uploadImage',
    DELETE_BOOK_IMAGE: 'deleteImage',
} as const;

export type LogActionEnum = typeof LogActionEnum[keyof typeof LogActionEnum];

export const StatusEnum = {
    SUCCESS: 'success',
    FAILED: 'failed',
    PENDING: 'pending',
    CANCELLED: 'cancelled',
} as const;

export type StatusEnum = typeof StatusEnum[keyof typeof StatusEnum];

export type Log = {
    id: string;
    timestamp: Date;
    userId: string | null;
    action: LogActionEnum;
    bookId?: string;
    status?: StatusEnum;
}

export type CreateLogDto = {
    userId: string | null;
    action: LogActionEnum;
    bookId?: string;
    status: StatusEnum;
}

export type LogResponseDto = {
    id: string;
    timestamp: Date;
    userId: string;
    bookId?: string;
    action: LogActionEnum;
    status?: StatusEnum;
}

export type LogListResponse = {
    data: Log;
    meta: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
        hasNextPage: boolean;
        hasPrevPage: boolean;
    };

}