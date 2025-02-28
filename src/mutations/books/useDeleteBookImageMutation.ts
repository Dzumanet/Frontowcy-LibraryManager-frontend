import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiCall } from "../../api/apiCall.ts";
import { Book } from "../../types/book.ts";
import { API_ENDPOINTS } from "../../api/endpoints.ts";
import { useLogEvent } from "../../hook/useLogEvent.ts";
import { useAuthStore } from "../../store/useAuthStore.ts";
import { LogActionEnum, StatusEnum } from "../../types/log.ts";

export const useDeleteBookImageMutation = () => {
    const queryClient = useQueryClient();
    const { logEvent } = useLogEvent();
    const userId = useAuthStore((state) => state.userId);

    return useMutation({
        mutationFn: async (id: string) => {
            return apiCall<Book>(API_ENDPOINTS.IMAGE_BOOK_REMOVE(id), {
                method: 'DELETE',
                credentials: 'include',
            });
        },
        onSuccess: async (_, id) => {
            await queryClient.invalidateQueries({ queryKey: ['book', id] });
            await queryClient.invalidateQueries({ queryKey: ['books'] });
            await logEvent({
                action: LogActionEnum.DELETE_BOOK_IMAGE,
                userId: userId,
                bookId: id,
                status: StatusEnum.SUCCESS,
            });

        },
        onError: (error) => {
            console.error('Error while deleting the books image.:', error);
        },
    });
};
