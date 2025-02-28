import { Box, Button } from "@mui/material";
import { Link } from "@tanstack/react-router";

export const GuestView = () => {
    return (
        <Box sx={{ display: 'flex' ,gap: 2 }}>
            <Button component={Link} to="/auth/login" variant="contained" color="primary">Login</Button>
            <Button component={Link} to="/auth/register" variant="contained" color="primary">Register</Button>
        </Box>
    );
};