import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import { useAuthStore } from "../../store/useAuthStore.ts";
import { useNavigate } from "@tanstack/react-router";
import { useBookLoanMutation } from "../../mutations/loans";
import { Book } from "../../types/book.ts";

type LoanConfirmationDialogProps = {
    open: boolean;
    onClose: () => void;
    book: Book;
};

export const LoanConfirmationDialog = ({ open, onClose, book }: LoanConfirmationDialogProps) => {
    const userId = useAuthStore((state) => state.userId);
    const navigate = useNavigate();
    const { mutate: createLoan } = useBookLoanMutation();


    const confirmLoan = () => {
        if (!userId) {
            navigate({ to: '/auth/login' });
        }
        createLoan({ userId: userId as string, bookId: book.id });
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} sx={{
            padding: 5
        }}>
            {book.availableCopies < 1 ? (
                    <DialogContent>
                        <Typography>No more available books. <strong>{book?.title}</strong>?</Typography>
                    </DialogContent>)
                : (
                    <>
                        <DialogTitle>Book loan confirmation</DialogTitle>
                        <DialogContent>
                            <Typography align="center">Do you want to borrow book </Typography>
                            <Typography align="center"><strong>{book?.title}</strong>?</Typography>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={onClose}>Cancel</Button>
                            <Button onClick={confirmLoan} color="primary" variant="contained">Confirm</Button>
                        </DialogActions>
                    </>
                )
            }

        </Dialog>
    );
};
