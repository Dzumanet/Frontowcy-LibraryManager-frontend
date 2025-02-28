import { TablePagination } from "@mui/material";
import { Meta } from "../../types/meta.ts";

type LoanTablePaginationProps = {
    meta: Meta;
    page: number;
    setPage: (page: number) => void;
    rowsPerPage: number;
    setRowsPerPage: (rows: number) => void;
};

export const LoanTablePagination = ({ meta, page, setPage, rowsPerPage, setRowsPerPage }: LoanTablePaginationProps) => {
    return (
        <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            count={meta.total}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={(_, newPage) => setPage(newPage)}
            onRowsPerPageChange={(e) => setRowsPerPage(Number(e.target.value))}
        />
    );
};
