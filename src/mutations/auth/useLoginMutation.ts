import { useMutation } from "@tanstack/react-query";
import { AuthLoginResponse, AuthLoginUser } from "../../types/user.tsx";
import { apiCall } from "../../api/apiCall.ts";
import { API_ENDPOINTS } from "../../api/endpoints.ts";
import { useLogEvent } from "../../hook/useLogEvent.ts";
import { LogActionEnum, StatusEnum } from "../../types/log.ts";
import { useAuthStore } from "../../store/useAuthStore.ts";

export const useLoginMutation = () => {
    const { setAuthData } = useAuthStore();
    const { logEvent } = useLogEvent();


    return useMutation({
        mutationFn: async (body: AuthLoginUser) => apiCall<AuthLoginResponse, AuthLoginUser>(
            API_ENDPOINTS.LOGIN, {
                method: 'POST',
                body,
                credentials: 'include',
            }),
        onSuccess: async (data: AuthLoginResponse) => {
            setAuthData(data.userId, data.firstName, data.role);
            await logEvent({
                action: LogActionEnum.LOGIN,
                userId: data.userId,
                status: StatusEnum.SUCCESS,
            });

        },
        onError: async () => {
            await logEvent({
                action: LogActionEnum.LOGIN,
                userId: null,
                status: StatusEnum.FAILED,
            });
        },
    });
};