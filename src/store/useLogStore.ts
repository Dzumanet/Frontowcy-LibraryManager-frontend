import { create } from "zustand";

type ViewActionMode = "all" | "action";
type ViewStatusMode = "all" | "status";

type LogStoreState = {
    page: number;
    pageSize: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
    logAction?: string;
    logStatus?: string;
    viewActionMode: ViewActionMode;
    viewStatusMode: ViewStatusMode;
};

export type SetLogFiltersAction = Partial<Omit<LogStoreState, "totalPages" | "hasNextPage" | "hasPrevPage">>;

type LogStoreActions = {
    setFilters: (filters: SetLogFiltersAction) => void;
    resetFilters: () => void;
    toggleActionMode: (mode: ViewActionMode) => void;
    toggleStatusMode: (mode: ViewStatusMode) => void;
    nextPage: () => void;
    prevPage: () => void;
    setPageSize: (size: number) => void;
    setPage: (page: number) => void;
    setPaginationMeta: (meta: { totalPages: number; hasNextPage: boolean; hasPrevPage: boolean }) => void;
};

const initialState: LogStoreState = {
    page: 1,
    pageSize: 10,
    totalPages: 1,
    hasNextPage: false,
    hasPrevPage: false,
    logAction: undefined,
    logStatus: undefined,
    viewActionMode: "all",
    viewStatusMode: "all",
};

export const useLogStore = create<LogStoreState & LogStoreActions>((set) => ({
    ...initialState,

    setFilters: (filters: SetLogFiltersAction) => {
        set((state) => ({
            ...state,
            ...filters,
            page: 1,
        }));
    },

    resetFilters: () => {
        set(() => ({
            ...initialState,
            page: 1,
            pageSize: 10,
        }));
    },

    toggleActionMode: (mode: ViewActionMode) => {
        set((state) => ({
            ...state,
            viewActionMode: state.viewActionMode === mode ? "all" : mode,
        }));
    },

    toggleStatusMode: (mode: ViewStatusMode) => {
        set((state) => ({
            ...state,
            viewStatusMode: state.viewStatusMode === mode ? "all" : mode,
        }));
    },

    nextPage: () => {
        set((state) => ({
            ...state,
            page: state.hasNextPage ? state.page + 1 : state.page,
        }));
    },

    prevPage: () => {
        set((state) => ({
            ...state,
            page: state.hasPrevPage ? state.page - 1 : state.page,
        }));
    },

    setPageSize: (size: number) => {
        set((state) => ({
            ...state,
            pageSize: size,
            page: 1,
        }));
    },

    setPage: (page: number) => {
        set((state) => ({
            ...state,
            page,
        }));
    },

    setPaginationMeta: (meta) => {
        set((state) => ({
            ...state,
            totalPages: meta.totalPages ?? state.totalPages,
            hasNextPage: meta.hasNextPage ?? state.hasNextPage,
            hasPrevPage: meta.hasPrevPage ?? state.hasPrevPage,
        }));
    },
}));