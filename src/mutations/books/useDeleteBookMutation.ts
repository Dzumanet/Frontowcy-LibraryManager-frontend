import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiCall } from "../../api/apiCall.ts";
import { Book } from "../../types/book.ts";
import { API_ENDPOINTS } from "../../api/endpoints.ts";
import { LogActionEnum, StatusEnum } from "../../types/log.ts";
import { useLogEvent } from "../../hook/useLogEvent.ts";
import { useAuthStore } from "../../store/useAuthStore.ts";

export const useDeleteBookMutation = () => {
    const queryClient = useQueryClient();
    const { logEvent } = useLogEvent();
    const userId = useAuthStore((state) => state.userId);

    return useMutation({
        mutationFn: async (id: string) => apiCall<Book>(API_ENDPOINTS.DELETE_BOOK(id), {
            method: 'DELETE',
            credentials: 'include',
        }),
        onSuccess: async (_, id) => {
            await queryClient.invalidateQueries({ queryKey: ['books'] });
            await queryClient.invalidateQueries({ queryKey: ['book', id] });
            await logEvent({
                action: LogActionEnum.DELETE_BOOK,
                userId: userId,
                bookId: id,
                status: StatusEnum.SUCCESS,
            });
        }
    });
};

