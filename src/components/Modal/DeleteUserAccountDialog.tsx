import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { Link } from "@tanstack/react-router";

type DeleteUserAccountDialogProps = {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
    canDelete: boolean;
}

export const DeleteUserAccountDialog = ({
                                            open,
                                            onClose,
                                            onConfirm,
                                            canDelete,
                                        }: DeleteUserAccountDialogProps) => {


    return <Dialog open={open}
                   onClose={onClose}
                   aria-labelledby="delete-dialog-title"
                   aria-describedby="delete-dialog-description"
    >
        <DialogTitle id="delete-dialog-title">
            {canDelete ? "Are you sure you want to delete your account?" : "You cannot delete your account!"}
        </DialogTitle>
        <DialogContent>
            <DialogContentText id="delete-dialog-description">
                {canDelete ?
                    "This action cannot be undone. Once your account is deleted, all associated data will be permanently removed." : "First, return all borrowed books."
                }
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={onClose}>{canDelete ? "Cancel" : "OK"}</Button>
            {canDelete ? <Button onClick={onConfirm}>Confirm</Button> :
                <Button component={Link} to="/dashboard/client/loans">
                    Return Books
                </Button>
            }
        </DialogActions>
    </Dialog>;

};