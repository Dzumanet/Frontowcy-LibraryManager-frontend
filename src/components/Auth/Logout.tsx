import { useLogoutMutation } from "../../mutations/auth";
import { Button } from "@mui/material";
import { Logout as LogoutIcon } from '@mui/icons-material';

export const Logout = () => {
    const { mutate: logoutUser } = useLogoutMutation();

    const handleLogout = () => {
        logoutUser(undefined, {
            onError: (error) => {
                console.error('Logout failed:', error.message);
            },
        });
    };

    return <Button
        onClick={handleLogout}
        variant="contained"
        color="error"
        startIcon={<LogoutIcon />}
        sx={{ marginTop: 3 }}
    >
        Logout
    </Button>;
};