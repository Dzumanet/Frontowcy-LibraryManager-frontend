import { create } from "zustand";
import { AuthLoginResponse, UserRole } from "../types/user.tsx";
import { apiCall } from "../api/apiCall.ts";
import { API_ENDPOINTS } from "../api/endpoints.ts";

type AuthState = {
    userId: string | null;
    firstName: string | null;
    role: UserRole | null;
    isAuthorized: boolean;
    verifySession: () => Promise<void>;
};

type AuthActions = {
    setAuthData: (userId: string, firstName:string, role: UserRole) => void;
    clearAuthData: () => void;
};

const initialState: Omit<AuthState, "verifySession"> = {
    userId: null,
    firstName: null,
    role: null,
    isAuthorized: false,
};

export const useAuthStore = create<AuthState & AuthActions>((set) => ({
    ...initialState,

    setAuthData: (userId, firstName, role ) =>
        set(() => ({
            userId,
            firstName,
            role,
            isAuthorized: true,
        })),

    clearAuthData: () =>
        set(() => ({
            ...initialState,
        })),

    verifySession: async () => {
        try {
            const { userId, firstName, role } = await apiCall<AuthLoginResponse>(API_ENDPOINTS.AUTH_STATUS, {
                method: "GET",
                credentials: "include",
            });

            set(() => ({
                userId,
                firstName,
                role,
                isAuthorized: true,
            }));
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            set(() => ({
                ...initialState,
            }));
        }
    },
}));
