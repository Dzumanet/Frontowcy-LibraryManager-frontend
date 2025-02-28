import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiCall } from "../../api/apiCall.ts";
import { API_ENDPOINTS } from "../../api/endpoints.ts";
import { CreateLoanDto, CreateLoansResponseDto } from "../../types/loan.ts";
import { LogActionEnum, StatusEnum } from "../../types/log.ts";
import { useLogEvent } from "../../hook/useLogEvent.ts";
import { useAuthStore } from "../../store/useAuthStore.ts";

export const useBookLoanMutation = () => {
    const queryClient = useQueryClient();
    const { logEvent } = useLogEvent();
    const userId = useAuthStore((state) => state.userId);

    return useMutation({
        mutationFn: async (body: CreateLoanDto) => apiCall<CreateLoansResponseDto, CreateLoanDto>(API_ENDPOINTS.CREATE_LOAN, {
            method: 'POST',
            body,
            credentials: 'include',
        }),
        onSuccess: async (data) => {
            await queryClient.invalidateQueries({ queryKey: ['book'] });
            await queryClient.invalidateQueries({ queryKey: ['loans'] });
            await logEvent({
                action: LogActionEnum.BORROWED,
                userId: userId,
                bookId: data.id,
                status: StatusEnum.SUCCESS,
            });
        }

    });
};
