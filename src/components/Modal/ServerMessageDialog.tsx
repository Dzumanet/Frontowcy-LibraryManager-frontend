import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";

type ServerMessageDialogProps = {
    open: boolean;
    onClose: () => void;
    serverMessage: string;
}

export const ServerMessageDialog = ({ open, onClose, serverMessage }: ServerMessageDialogProps) => {
    return (
        <Dialog open={open}
                onClose={onClose}
                aria-labelledby="server-message-dialog-title"
                aria-describedby="server-message-description"
        >
            <DialogTitle id="error-dialog-title">
                {serverMessage}
            </DialogTitle>
            {/*<DialogContent>*/}
            {/*    <DialogContentText id="delete-dialog-description">*/}
            {/*        {serverMessage}*/}
            {/*    </DialogContentText>*/}
            {/*</DialogContent>*/}
            <DialogActions>
                <Button onClick={onClose}>OK</Button>

            </DialogActions>
        </Dialog>
    );
};