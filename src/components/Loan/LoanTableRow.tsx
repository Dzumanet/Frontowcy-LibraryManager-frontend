import { Button, TableCell, TableRow } from "@mui/material";
import dayjs from "dayjs";
import { Loan } from "../../types/loan.ts";
import { formatLoanStatus } from "../../utils/formatLoanStatus.tsx";

type LoanTableRowProps = {
    loan: Loan;
    handleReturn: (loan: Loan) => void;
};

export const LoanTableRow = ({ loan, handleReturn }: LoanTableRowProps) => {
    return (
        <TableRow
            sx={{
                backgroundColor:
                    loan.loanStatus === "overdue" ? "#FAE3E3" :
                        loan.loanStatus === "forced_returned" ? "#cd9797" :
                            loan.loanStatus === "returned_late" ? "#FFF3CD" :
                                loan.loanStatus === "borrowed" ? "#E8F0FE" :
                                    loan.loanStatus === "returned" ? "#E8F5E9" : "inherit",
                "&:hover": { backgroundColor: "#f5f5f5" },
            }}
        >
            <TableCell>{loan.book?.title ?? "No data available"}</TableCell>
            <TableCell align="right">{loan.book?.author ?? "Unknown author"}</TableCell>
            <TableCell
                align="right">{loan.loanDate ? dayjs(loan.loanDate).format("DD MMMM YYYY") : "No date available"}</TableCell>
            <TableCell
                align="right">{loan.dueDate ? dayjs(loan.dueDate).format("DD MMMM YYYY") : "No deadline available"}</TableCell>
            <TableCell
                align="right">{loan.returnedAt ? dayjs(loan.returnedAt).format("DD MMMM YYYY") : "Awaiting return"}</TableCell>
            <TableCell align="center">{formatLoanStatus(loan.loanStatus)}</TableCell>
            <TableCell align="center">
                {!loan.returnedAt && (
                    <Button variant="contained" color="primary" onClick={() => handleReturn(loan)}>
                        Return the book
                    </Button>
                )}
            </TableCell>
        </TableRow>
    );
};
