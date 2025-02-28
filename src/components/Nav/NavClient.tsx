import { Button, Typography, Stack, Box } from "@mui/material";
import { Home, LibraryBooks, AccountCircle } from "@mui/icons-material";
import { Link } from "@tanstack/react-router";
import IconButton from "@mui/material/IconButton";
import { useAuthStore } from "../../store/useAuthStore.ts";

export const NavClient = () => {
    const userName = useAuthStore((state) => state.firstName);

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                padding: "10px 20px",
                borderRadius: "12px",
            }}
        >

            <Stack direction="row" spacing={2} sx={{ flexGrow: 1 }}>
                <Button color="inherit" component={Link} to="/dashboard/client" startIcon={<Home />}>
                    Dashboard
                </Button>
                <Button color="inherit" component={Link} to="/dashboard/client/loans" startIcon={<LibraryBooks />}>
                    My Loans
                </Button>
            </Stack>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginLeft: 3
            }}>
                <Typography variant="h6" sx={{ fontWeight: 700, flexShrink: 0, marginRight: 2 }}>
                    Welcome
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 700, flexShrink: 0, marginRight: 2 }}>
                    {userName}
                </Typography>
            </Box>

            <IconButton component={Link} to="/dashboard/client/profile" color="inherit">
                <AccountCircle fontSize="large" />
            </IconButton>
        </Box>
    );
};
