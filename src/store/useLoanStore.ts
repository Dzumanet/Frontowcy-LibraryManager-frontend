import { create } from "zustand";

type ViewMode = "all" | "status";

type LoanStoreState = {
    page: number;
    pageSize: number;
    totalPages: number;
    total: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
    customerId?: string;
    loanDateFrom?: string;
    loanDateTo?: string;
    loanStatus?: string;
    viewMode: ViewMode;
};

export type SetLoanFiltersAction = Partial<Omit<LoanStoreState, "totalPages" | "total" | "hasNextPage" | "hasPrevPage">>;

type LoanStoreActions = {
    setFilters: (filters: SetLoanFiltersAction) => void;
    resetFilters: () => void;
    toggleViewMode: (mode: ViewMode) => void;
    nextPage: () => void;
    prevPage: () => void;
    setPageSize: (size: number) => void;
    setPage: (page: number) => void;
    setPaginationMeta: (meta: {
        total: number,
        totalPages: number;
        hasNextPage: boolean;
        hasPrevPage: boolean
    }) => void;
};

const initialState: LoanStoreState = {
    page: 1,
    pageSize: 10,
    totalPages: 1,
    total: 1,
    hasNextPage: false,
    hasPrevPage: false,
    customerId: undefined,
    loanDateFrom: undefined,
    loanDateTo: undefined,
    loanStatus: undefined,
    viewMode: "all",
};

export const useLoanStore = create<LoanStoreState & LoanStoreActions>((set) => ({
    ...initialState,

    setFilters: (filters: SetLoanFiltersAction) =>
        set((state) => ({
            ...state,
            ...filters,
            page: 1,
        })),

    resetFilters: () => {
        set(() => ({
            ...initialState,
            page: 1,
            pageSize: 10,
        }));
    },

    toggleViewMode: (mode: ViewMode) => {
        set((state) => ({
            ...state,
            viewMode: state.viewMode === mode ? "all" : mode,
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
        set(() => ({ page }));
    },

    setPaginationMeta: (meta) => {
        set(() => ({
            total: meta.total,
            totalPages: meta.totalPages,
            hasNextPage: meta.hasNextPage,
            hasPrevPage: meta.hasPrevPage,
        }));
    },
}));