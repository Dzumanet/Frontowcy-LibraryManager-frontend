import { useMutation } from "@tanstack/react-query";
import { useLogEvent } from "../../hook/useLogEvent.ts";
import { useAuthStore } from "../../store/useAuthStore.ts";
import { apiCall } from "../../api/apiCall.ts";
import { API_ENDPOINTS } from "../../api/endpoints.ts";
import { LogActionEnum, StatusEnum } from "../../types/log.ts";
import { useNavigate } from "@tanstack/react-router";

export const useDeleteUserMutation = () => {
    const { logEvent } = useLogEvent();
    const userId = useAuthStore((state) => state.userId);
    const clearAuthData = useAuthStore((store) => store.clearAuthData);
    const navigate = useNavigate();

    return useMutation({
        mutationFn: async () => {
            return apiCall<{ message: string }>(API_ENDPOINTS.DELETE_USER, {
                method: 'DELETE',
                credentials: 'include',
            });
        },
        onSuccess: async () => {
            await logEvent({
                action: LogActionEnum.DELETE_ACCOUNT,
                userId,
                status: StatusEnum.SUCCESS,
            });
            clearAuthData();
            navigate({ to: "/" });
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
