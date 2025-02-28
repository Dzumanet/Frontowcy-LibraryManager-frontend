import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useLogEvent } from "../../hook/useLogEvent.ts";
import { useAuthStore } from "../../store/useAuthStore.ts";
import { apiCall } from "../../api/apiCall.ts";
import { API_ENDPOINTS } from "../../api/endpoints.ts";
import { LogActionEnum, StatusEnum } from "../../types/log.ts";

export const useForcedReturnBookMutation = () => {
    const queryClient = useQueryClient();
    const { logEvent } = useLogEvent();
    const userId = useAuthStore((state) => state.userId);

    return useMutation({
        mutationFn: async ({ loanId }: { loanId: string }) =>
            apiCall(API_ENDPOINTS.FORCED_RETURN(loanId), {
                method: "POST",
                credentials: "include",
            }),

        onSuccess: async (_, variables: { loanId: string; bookId: string }) => {
            await queryClient.invalidateQueries({ queryKey: ["loans"] });

            await logEvent({
                action: LogActionEnum.FORCED_RETURNED,
                userId: userId,
                bookId: variables.bookId,
                status: StatusEnum.SUCCESS,
            });
        },
        onError: async (error) => {
            console.error("Error while returning the book:", error);

        }
    });
};