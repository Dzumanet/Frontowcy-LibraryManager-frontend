import { useMutation, useQueryClient } from "@tanstack/react-query";
import { RegisterBookDto, RegisterBookResponse } from "../../types/book.ts";
import { apiCall } from "../../api/apiCall.ts";
import { API_ENDPOINTS } from "../../api/endpoints.ts";
import { useLogEvent } from "../../hook/useLogEvent.ts";
import { LogActionEnum, StatusEnum } from "../../types/log.ts";
import { useAuthStore } from "../../store/useAuthStore.ts";

export const useAddBookMutation = () => {
    const queryClient = useQueryClient();
    const { logEvent } = useLogEvent();
    const userId = useAuthStore((state) => state.userId);

    return useMutation({
        mutationKey: ['add-book', 'book'],
        mutationFn: async (body: RegisterBookDto) => apiCall<RegisterBookResponse, RegisterBookDto>(API_ENDPOINTS.ADD_BOOK, {
            method: 'POST',
            body,
            credentials: 'include',
        }),

        onSuccess: async (data) => {
            await queryClient.invalidateQueries({ queryKey: ['book'] });
            await logEvent({
                action: LogActionEnum.ADD_BOOK,
                userId: userId,
                bookId: data.id,
                status: StatusEnum.SUCCESS,
            });
        },
        onError: async (error) => {
            console.log('useAddBookMutation error', error);
            await logEvent({
                action: LogActionEnum.ADD_BOOK,
                userId: userId,
                bookId: undefined,
                status: StatusEnum.FAILED,
            });
        },
    });
};


