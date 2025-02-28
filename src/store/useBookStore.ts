import { create } from "zustand";

type ViewMode = "all" | "category";

type BookStoreState = {
    page: number;
    pageSize: number;
    totalPages: number;
    total: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
    title?: string;
    author?: string;
    category?: string;
    viewMode: ViewMode;
    sortBy: "title" | "author";
    sortOrder: "ASC" | "DESC";
};

export type SetBookFiltersAction = Partial<Omit<BookStoreState, "totalPages" | "total" | "hasNextPage" | "hasPrevPage">>;

type BookStoreActions = {
    setFilters: (filters: SetBookFiltersAction) => void;
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

const initialState: BookStoreState = {
    page: 1,
    pageSize: 10,
    totalPages: 1,
    total: 1,
    hasNextPage: false,
    hasPrevPage: false,
    title: undefined,
    author: undefined,
    category: undefined,
    viewMode: "all",
    sortBy: "title",
    sortOrder: "ASC",
};

export const useBookStore = create<BookStoreState & BookStoreActions>((set) => ({
    ...initialState,

    setFilters: (filters: SetBookFiltersAction) =>
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
        set((state) => {
            return {
                ...state,
                pageSize: size,
                page: 1,
            };
        });
    },

    setPage: (page: number) => {
        set((state) => ({
            ...state,
            page: page > 0 && page <= state.totalPages ? page : state.page,
        }));
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