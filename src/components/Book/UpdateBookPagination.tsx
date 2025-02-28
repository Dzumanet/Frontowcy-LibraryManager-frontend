import { TablePagination } from "@mui/material";
import { useBookStore } from "../../store/useBookStore.ts";

export const UpdateBookPagination = () => {
    const page = useBookStore((state) => state.page);
    const total = useBookStore((state) => state.total);
    const pageSize = useBookStore((state) => state.pageSize);
    const setPage = useBookStore((state) => state.setPage);
    const setPageSize = useBookStore((state) => state.setPageSize);

    return (
        <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            count={total}
            rowsPerPage={pageSize}
            page={page}
            onPageChange={(_, newPage) => setPage(newPage)}
            onRowsPerPageChange={(e) => setPageSize(Number(e.target.value))}
        />
    );
};
