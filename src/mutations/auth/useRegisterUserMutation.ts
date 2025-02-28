import { useMutation } from "@tanstack/react-query";
import { RegisterUserDto, RegisterUserResponse } from "../../types/user.tsx";
import { apiCall } from "../../api/apiCall.ts";
import { API_ENDPOINTS } from "../../api/endpoints.ts";
import { useLogEvent } from "../../hook/useLogEvent.ts";
import { LogActionEnum, StatusEnum } from "../../types/log.ts";

export const useRegisterUserMutation = () => {
    const { logEvent } = useLogEvent();

    return  useMutation({
        mutationFn: async (body: RegisterUserDto) => apiCall<RegisterUserResponse, RegisterUserDto>(API_ENDPOINTS.REGISTER, {
            method: 'POST',
            body
        }),
        onSuccess: async (data: RegisterUserResponse) => {
            await logEvent({
                action: LogActionEnum.CREATE_PROFILE,
                userId: data.id,
                status: StatusEnum.SUCCESS
            })
        },
        onError: async () => {
                await logEvent({
                    action: LogActionEnum.CREATE_PROFILE,
                    userId: '00000000-0000-0000-0000-000000000000',
                    status: StatusEnum.FAILED,
                })
        }

    })
};