import { queryOptions } from "@tanstack/react-query";
import { AdminLoanStatistics } from "../../types/loan.ts";
import { API_ENDPOINTS } from "../../api/endpoints.ts";
import { apiCall } from "../../api/apiCall.ts";

export const adminLoanStatisticsOptions = () =>
    queryOptions({
        queryKey: ["adminLoanStatistics"],
        queryFn: async (): Promise<AdminLoanStatistics> => {
            const url = API_ENDPOINTS.LOANS_STATISTICS;

            return apiCall<AdminLoanStatistics>(url, {
                method: "GET",
                credentials: "include",
            });
        },
        staleTime: 0,
    });
