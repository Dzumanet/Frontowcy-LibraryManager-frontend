import { queryOptions } from "@tanstack/react-query";
import { apiCall } from "../../api/apiCall.ts";
import { Book } from "../../types/book.ts";
import { API_ENDPOINTS } from "../../api/endpoints.ts";
import { Meta } from "../../types/meta.ts";

export const booksOptions = (filters: Partial<{
    page: number;
    pageSize: number;
    title?: string;
    author?: string;
    category?: string;
    sortBy?: "title" | "author";
    sortOrder?: "ASC" | "DESC";
}>) =>
    queryOptions({
        queryKey: ["books", filters],
        queryFn: async (): Promise<{
            data: Book[];
            meta: Meta;
        }> => {
            const params = new URLSearchParams();

            const defaultFilters = {
                page: 1,
                pageSize: 10,
                sortBy: "title",
                sortOrder: "ASC",
                ...filters,
            };


            Object.entries(defaultFilters).forEach(([key, value]) => {
                if (value !== undefined && value !== null) {
                    params.append(key, value.toString());
                }
            });

            const url = `${API_ENDPOINTS.GET_BOOKS}?${params.toString()}`;

            return apiCall<{
                data: Book[];
                meta: {
                    total: number;
                    page: number;
                    pageSize: number;
                    totalPages: number;
                    hasNextPage: boolean;
                    hasPrevPage: boolean;
                };
            }>(url, {
                method: "GET",
                credentials: "include",
            });
        },
        staleTime: 0,
    });