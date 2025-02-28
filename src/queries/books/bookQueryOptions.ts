import { queryOptions } from "@tanstack/react-query";
import { apiCall } from "../../api/apiCall.ts";
import { Book } from "../../types/book.ts";
import { API_ENDPOINTS } from "../../api/endpoints.ts";

export const bookOptions = (id: string) => queryOptions({
    queryKey: ['book', id],
    queryFn: async () => {
        return await apiCall<Book>(API_ENDPOINTS.GET_BOOK(id), {
            method: 'GET',
        });
    },
});