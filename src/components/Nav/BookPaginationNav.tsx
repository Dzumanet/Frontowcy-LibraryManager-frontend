import { useBookStore } from "../../store/useBookStore.ts";
import { PaginationNav } from "../UI/PaginationNav.tsx";

export const BookPaginationNav = () => {
    const page = useBookStore((state) => state.page);
    const prevPage = useBookStore((state) => state.prevPage);
    const nextPage = useBookStore((state) => state.nextPage);
    const hasPrevPage = useBookStore((state) => state.hasPrevPage);
    const hasNextPage = useBookStore((state) => state.hasNextPage);

    return (
        <PaginationNav
            page={page}
            hasPrevPage={hasPrevPage}
            hasNextPage={hasNextPage}
            onPrevPage={prevPage}
            onNextPage={nextPage}
        />
    );
};