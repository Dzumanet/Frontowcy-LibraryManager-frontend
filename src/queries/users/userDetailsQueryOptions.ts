import { queryOptions } from "@tanstack/react-query";
import { User } from "../../types/user.tsx";
import { apiCall } from "../../api/apiCall.ts";
import { API_ENDPOINTS } from "../../api/endpoints.ts";

export const categoryUserDetails = queryOptions({

    queryKey: ['userDetails'],
    queryFn: async () =>
        apiCall<User>(API_ENDPOINTS.USER_DETAILS, {
            method: 'GET',
            credentials: 'include',
        }),
    staleTime: 5 * 60 * 1000,
});