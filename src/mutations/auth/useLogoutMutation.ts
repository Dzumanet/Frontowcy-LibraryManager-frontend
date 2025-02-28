import { useMutation } from "@tanstack/react-query";
import { apiCall } from "../../api/apiCall.ts";
import { API_ENDPOINTS } from "../../api/endpoints.ts";
import { useLogEvent } from "../../hook/useLogEvent.ts";
import { LogActionEnum, StatusEnum } from "../../types/log.ts";
import { useNavigate } from "@tanstack/react-router";
import { useAuthStore } from "../../store/useAuthStore.ts";


export const useLogoutMutation = () => {
    const clearAuthData = useAuthStore((store) => store.clearAuthData);
    const userId = useAuthStore((store) => store.userId);
    const { logEvent } = useLogEvent()
    const navigate = useNavigate();

    return useMutation({
        mutationKey: ['logoutUser'],
        mutationFn: async () => apiCall(API_ENDPOINTS.LOGOUT, {
            method: 'GET',
            credentials: 'include',
        }),
        onSuccess: async () => {
            clearAuthData();
            await navigate({ to: '/', replace: true });
            await logEvent({
                action: LogActionEnum.LOGOUT,
                userId,
                status: StatusEnum.SUCCESS,
            })

        },
        onError: async  () => {
            await logEvent({
                action: LogActionEnum.LOGOUT,
                userId: userId,
                status: StatusEnum.FAILED,
            });
        },
    })
};