import { CreateLogDto, LogActionEnum, StatusEnum } from "../types/log.ts";
import { useCreateLogMutation } from "../mutations/logs";

type LogEventParams = {
    action: typeof LogActionEnum[keyof typeof LogActionEnum];
    userId: string | null;
    bookId?: string;
    status: typeof StatusEnum[keyof typeof StatusEnum];
};

export const useLogEvent = () => {
    const createLogMutation = useCreateLogMutation();

    const logEvent = async ({
                                action,
                                userId,
                                bookId,
                                status,
                            }: LogEventParams) => {
        const createLogDto: CreateLogDto = {
            userId,
            action,
            bookId,
            status,
        };

        return await createLogMutation.mutateAsync(createLogDto);
    };

    return { logEvent };
};