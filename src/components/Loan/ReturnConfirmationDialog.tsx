import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import { Loan } from "../../types/loan.ts";
import { useReturnBookMutation } from "../../mutations/loans";

type ReturnConfirmationDialogProps = {
    open: boolean;
    onClose: () => void;
    loan: Loan | null;
};

export const ReturnConfirmationDialog = ({ open, onClose, loan }: ReturnConfirmationDialogProps) => {
    const returnBookMutation = useReturnBookMutation();

    const confirmReturn = () => {
        if (loan) {
            returnBookMutation.mutate({ loanId: loan.id, bookId: loan.book.id });
            onClose();
        }
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Return Confirmation</DialogTitle>
            <DialogContent>
                <Typography>Are you sure you want to return book: <strong>{loan?.book?.title}</strong>?</Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={confirmReturn} color="primary" variant="contained">Confirm</Button>
            </DialogActions>
        </Dialog>
    );
};
