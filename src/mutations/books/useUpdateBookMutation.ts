import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiCall } from "../../api/apiCall.ts";
import { API_ENDPOINTS } from "../../api/endpoints.ts";
import { RegisterBookDto, RegisterBookResponse } from "../../types/book.ts";
import { useLogEvent } from "../../hook/useLogEvent.ts";
import { useAuthStore } from "../../store/useAuthStore.ts";
import { LogActionEnum, StatusEnum } from "../../types/log.ts";

export const useUpdateBookMutation = (id: string) => {
    const queryClient = useQueryClient();
    const { logEvent } = useLogEvent();
    const userId = useAuthStore((state) => state.userId);

    return useMutation({
        mutationKey: ['updateBook', id],
        mutationFn: async (body: RegisterBookDto) => {
            return apiCall<RegisterBookResponse, RegisterBookDto>(API_ENDPOINTS.UPDATE_BOOK(id), {
                method: 'PATCH',
                body,
                credentials: 'include',
            });
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ['book', id] });
            await queryClient.invalidateQueries({ queryKey: ['books'] });
            await logEvent({
                action: LogActionEnum.EDIT_BOOK,
                userId: userId,
                bookId: id,
                status: StatusEnum.SUCCESS,
            });
        }
    });
};
