export type Meta = {
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
    returnedOnTime?: number;
    returnedLate?: number;
    currentlyBorrowed?: number;
    overdueBooks?: number;
};