import { queryOptions } from "@tanstack/react-query";
import { apiCall } from "../../api/apiCall.ts";
import { API_ENDPOINTS } from "../../api/endpoints.ts";
import { Loan } from "../../types/loan.ts";
import { Meta } from "../../types/meta.ts";

export const myLoansOptions = (filters: Partial<{
    page: number;
    pageSize: number;
    loanStatus?: string;
    loanDateFrom?: string;
    loanDateTo?: string;
    year?: number;
    month?: number;
}>) =>
    queryOptions({
        queryKey: ["loans", filters],
        queryFn: async (): Promise<{
            data: Loan[];
            meta: Meta;
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

            const url = `${API_ENDPOINTS.GET_MY_LOANS}?${params.toString()}`;

            return apiCall<{
                data: Loan[];
                meta: Meta;
            }>(url, {
                method: "GET",
                credentials: "include",
            });
        },
        staleTime: 5 * 60 * 1000,
    });
