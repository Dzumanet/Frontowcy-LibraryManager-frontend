import { Modal, CircularProgress, Box, styled, Button } from "@mui/material";
import { useNavigate } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { bookOptions } from "../../queries/books";
import { ReactNode, useState } from "react";

const ModalWrapper = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    backgroundColor: theme.palette.background.paper,
    border: `2px solid ${theme.palette.divider}`,
    borderRadius: "8px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    textAlign: "center",
}));

type BookModalProps = {
    id: string;
    mode: "edit" | "delete";
    onConfirm: () => void;
    children?: ReactNode;
};

export const BookModalWrapper = ({ id, mode, onConfirm, children }: BookModalProps) => {
    const { data: book, isLoading, error } = useSuspenseQuery(bookOptions(id));
    const navigate = useNavigate();

    const [confirmMessage, setConfirmMessage] = useState("");
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleClose = () => navigate({ to: "/dashboard/admin/books/update" });

    if (isLoading) return <CircularProgress />;
    if (error) return <p>Error loading book...</p>;

    return (
        <Modal open={true} onClose={handleClose}>
            <ModalWrapper>
                {mode === "delete" ? (
                    <>
                        <h2>Delete Book</h2>
                        {book?.isBorrowed ? (
                            <>
                                <p>This book is currently borrowed and cannot be deleted.</p>
                                <Button onClick={handleClose} variant="contained">OK</Button>
                            </>
                        ) : isConfirmed ? (
                            <>
                                {!confirmMessage ? (
                                    <>
                                        <p>Are you **really** sure you want to delete <strong>{book?.title}</strong>?
                                        </p>
                                        <Button onClick={handleClose} variant="outlined">Cancel</Button>
                                        <Button onClick={() => {
                                            onConfirm();
                                            setConfirmMessage("Book has been successfully deleted.");
                                            setTimeout(() => handleClose(), 1000);
                                        }} variant="contained" color="error">
                                            Delete
                                        </Button>
                                    </>
                                ) : (
                                    <p className="text-green-500">{confirmMessage}</p>
                                )}
                            </>
                        ) : (
                            <>
                                <p>Are you sure you want to delete <strong>{book?.title}</strong>?</p>
                                <Box>
                                    <Button onClick={handleClose} variant="outlined">Cancel</Button>
                                    <Button onClick={() => setIsConfirmed(true)} variant="contained"
                                            color="warning">OK</Button>
                                </Box>
                            </>
                        )}
                    </>
                ) : (
                    <>
                        <h2>Edit Book</h2>
                        {children}
                    </>
                )}
            </ModalWrapper>
        </Modal>
    );
};
