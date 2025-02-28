import { useState } from "react";
import {
    Paper, Table, TableBody, TableContainer, TableFooter, TableHead, TableRow, TableCell
} from "@mui/material";
import { LoanTableRow } from "./LoanTableRow.tsx";
import { Meta } from "../../types/meta.ts";
import { Loan } from "../../types/loan.ts";
import { LoanTablePagination } from "./LoanTablePagination.tsx";
import { ReturnConfirmationDialog } from "./ReturnConfirmationDialog.tsx";

type LoanTableProps = {
    data: Loan[];
    meta: Meta;
    page: number;
    setPage: (page: number) => void;
    rowsPerPage: number;
    setRowsPerPage: (rows: number) => void;
};

export const LoanTable = ({ data, meta, page, setPage, rowsPerPage, setRowsPerPage }: LoanTableProps) => {
    const [openModal, setOpenModal] = useState(false);
    const [selectedLoan, setSelectedLoan] = useState<Loan | null>(null);

    const handleReturn = (loan: Loan) => {
        setSelectedLoan(loan);
        setOpenModal(true);
    };

    return (
        <>
            <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2 }}>
                <Table aria-label="loan table">
                    <TableHead>
                        <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                            <TableCell sx={{ fontWeight: "bold" }}>Title</TableCell>
                            <TableCell align="right" sx={{ fontWeight: "bold" }}>Author</TableCell>
                            <TableCell align="right" sx={{ fontWeight: "bold" }}>Borrowed Date</TableCell>
                            <TableCell align="right" sx={{ fontWeight: "bold" }}>Due Date</TableCell>
                            <TableCell align="right" sx={{ fontWeight: "bold" }}>Returned At</TableCell>
                            <TableCell align="center" sx={{ fontWeight: "bold" }}>Status</TableCell>
                            <TableCell align="center" sx={{ fontWeight: "bold" }}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((loan) => (
                            <LoanTableRow key={loan.id} loan={loan} handleReturn={handleReturn} />
                        ))}
                    </TableBody>
                    <TableFooter>
                        <LoanTablePagination
                            meta={meta}
                            page={page}
                            setPage={setPage}
                            rowsPerPage={rowsPerPage}
                            setRowsPerPage={setRowsPerPage}
                        />
                    </TableFooter>
                </Table>
            </TableContainer>

            <ReturnConfirmationDialog
                open={openModal}
                onClose={() => setOpenModal(false)}
                loan={selectedLoan}
            />
        </>
    );
};
