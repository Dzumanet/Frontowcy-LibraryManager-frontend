import { queryOptions } from "@tanstack/react-query";
import { apiCall } from "../../api/apiCall.ts";
import { API_ENDPOINTS } from "../../api/endpoints.ts";
import { AdminLoanResponse } from "../../types/loan.ts";
import { Meta } from "../../types/meta.ts";


export const loansOptions = (filters: Partial<{
    page: number;
    pageSize: number;
    loanStatus?: string;
    customerId?: string;
    loanDateFrom?: string;
    loanDateTo?: string;
}>) =>
    queryOptions({
        queryKey: ["loans", filters],
        queryFn: async (): Promise<{
            data: AdminLoanResponse[];
            meta: {
                total: number;
                page: number;
                pageSize: number;
                totalPages: number;
                hasNextPage: boolean;
                hasPrevPage: boolean;
            };
        }> => {
            const params = new URLSearchParams();

            const defaultFilters = {
                page: 1,
                pageSize: 10,
                ...filters,
            };

            Object.entries(defaultFilters).forEach(([key, value]) => {
                if (value !== undefined && value !== null) {
                    params.append(key, value.toString());
                }
            });

            const url = `${API_ENDPOINTS.GET_LOANS}?${params.toString()}`;
            console.log("Wysyłanie zapytania:", url);

            return apiCall<{
                data: AdminLoanResponse[];
                meta: Meta;
            }>(url, {
                method: "GET",
                credentials: "include",
            });
        },
        staleTime: 0,
    });
