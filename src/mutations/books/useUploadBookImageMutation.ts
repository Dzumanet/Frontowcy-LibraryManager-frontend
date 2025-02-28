import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiCall } from "../../api/apiCall.ts";
import { API_ENDPOINTS } from "../../api/endpoints.ts";
import { LogActionEnum, StatusEnum } from "../../types/log.ts";
import { useLogEvent } from "../../hook/useLogEvent.ts";
import { useAuthStore } from "../../store/useAuthStore.ts";


export const useUploadBookImageMutation = () => {
    const queryClient = useQueryClient();

    const { logEvent } = useLogEvent();
    const userId = useAuthStore((state) => state.userId);
    return useMutation({
        mutationKey: ['addBookImage', 'book'],
        mutationFn: async ({ id, file }: { id: string; file: File }) => {
            const formData = new FormData();
            formData.append('file', file);

            return await apiCall(API_ENDPOINTS.IMAGE_BOOK_UPLOAD(id), {
                method: 'POST',
                body: formData,
                credentials: 'include',
            });
        },
        onSuccess: async (_, variables) => {
            await queryClient.invalidateQueries({ queryKey: ['books'] });
            await logEvent({
                action: LogActionEnum.UPLOAD_BOOK_IMAGE,
                userId: userId,
                bookId: variables.id,
                status: StatusEnum.SUCCESS,
            });
        }
    });
};

