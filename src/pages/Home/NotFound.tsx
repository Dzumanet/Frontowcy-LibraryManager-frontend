import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "@tanstack/react-router";

export const NotFound = () => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                textAlign: "center",
            }}
        >
            <Typography variant="h2" color="primary">404</Typography>
            <Typography variant="h5">Oops! Page not found.</Typography>
            <Button variant="contained" sx={{ mt: 2 }} onClick={() => navigate({ to: "/" })}>
                Go back to the homepage
            </Button>
        </Box>
    );
};
