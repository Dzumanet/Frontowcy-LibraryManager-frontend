import { useMutation } from "@tanstack/react-query";
import { useLogEvent } from "../../hook/useLogEvent.ts";
import { useAuthStore } from "../../store/useAuthStore.ts";
import { apiCall } from "../../api/apiCall.ts";
import { API_ENDPOINTS } from "../../api/endpoints.ts";
import { LogActionEnum, StatusEnum } from "../../types/log.ts";

export const useDeleteUserMutation = () => {
    const { logEvent } = useLogEvent();
    const userId = useAuthStore((state) => state.userId);

    return useMutation({
        mutationFn: async () => {
            return await apiCall<{ message: string }>(API_ENDPOINTS.DELETE_USER, {
                method: 'DELETE',
                credentials: 'include',
            });
        },
        onSuccess: async (data) => {
            await logEvent({
                action: LogActionEnum.DELETE_ACCOUNT,
                userId,
                status: StatusEnum.SUCCESS,
            });

            return data;
        },
        onError: async () => {
            await logEvent({
                action: LogActionEnum.DELETE_ACCOUNT,
                userId,
                status: StatusEnum.FAILED,
            });

        },
    });
};
