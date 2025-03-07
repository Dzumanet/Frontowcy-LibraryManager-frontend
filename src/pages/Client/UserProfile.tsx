import { Box, Stack, Typography, Card, Button, Divider } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { categoryUserDetails } from "../../queries/users";
import { useAuthStore } from "../../store/useAuthStore.ts";
import { useEffect, useState } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Logout } from "../../components/Auth/Logout.tsx";
import { DeleteUserAccountDialog } from "../../components/Modal/DeleteUserAccountDialog.tsx";
import { myLoansOptions } from "../../queries/loans";
import { UserPersonalInfo } from "../../components/UI/UserPersonalInfo.tsx";
import { ChangePasswordForm } from "../../components/UI/ChangePasswordForm.tsx";
import { EmailNotification } from "../../components/UI/EmailNotification.tsx";
import { useDeleteUserMutation } from "../../mutations/auth/useDeleteUserMutation.ts";
import { ServerMessageDialog } from "../../components/Modal/ServerMessageDialog.tsx";
import { useNavigate } from "@tanstack/react-router";

export const UserProfile = () => {
    const { data: userData } = useSuspenseQuery(categoryUserDetails);
    const { mutate: deleteAccount } = useDeleteUserMutation();
    const { data } = useSuspenseQuery(myLoansOptions({}));
    const clearAuthData = useAuthStore((store) => store.clearAuthData);
    const [canDelete, setCanDelete] = useState(false);
    const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
    const [openMessageDialog, setOpenMessageDialog] = useState(false);
    const [serverMessage, setServerMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        setCanDelete(data.meta.currentlyBorrowed === 0);
    }, [data]);

    const handleOpenConfirmDialog = () => {
        setOpenConfirmDialog(true);
    };

    const handleDelete = () => {
        deleteAccount(undefined, {
            onSuccess: (data) => {
                setServerMessage(data.message);
                setOpenConfirmDialog(false);
                setOpenMessageDialog(true);
            },
            onError: (error) => {
                setServerMessage((error as Error).message);
                setOpenConfirmDialog(false);
                setOpenMessageDialog(true);
            },
        });
    };

    const handleCloseMessageDialog = () => {
        setOpenMessageDialog(false);
        clearAuthData();
        navigate({ to: "/" });
    };

    return (
        <Box sx={{ padding: { xs: 2, md: 4 } }}>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 3 }}>
                <AccountCircle sx={{ fontSize: 40, color: "primary.main" }} />
                <Typography variant="h4">User Profile</Typography>
            </Stack>

            <UserPersonalInfo userData={userData} />

            <ChangePasswordForm />

            <EmailNotification />

            <Card sx={{ padding: 3, marginBottom: 3, borderRadius: 2, boxShadow: 2 }}>
                <Typography variant="h6" gutterBottom>Delete Account</Typography>
                <Divider sx={{ my: 2 }} />
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}
                       alignItems={{ xs: "flex-start", sm: "center" }}>
                    <Button
                        onClick={handleOpenConfirmDialog}
                        variant="contained"
                        color={"error"}
                        startIcon={<PersonRemoveIcon />}
                        sx={{ minWidth: 120 }}
                    >
                        Delete
                    </Button>
                </Stack>
            </Card>

            <DeleteUserAccountDialog open={openConfirmDialog} onClose={() => setOpenConfirmDialog(false)}
                                     onConfirm={handleDelete}
                                     canDelete={canDelete} />

            {!!serverMessage && <ServerMessageDialog open={openMessageDialog} onClose={handleCloseMessageDialog}
                                                     serverMessage={serverMessage} />}

            <Logout />
        </Box>
    );
};
