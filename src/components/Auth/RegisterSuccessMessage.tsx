import { Box, Typography, Button } from "@mui/material";
import { Link } from "@tanstack/react-router";

type RegisterSuccessMessageProps = {
    message: string;
    libraryCardNumber: string
};

export const RegisterSuccessMessage = ({ message, libraryCardNumber }: RegisterSuccessMessageProps) => {

    return (
        <Box position="absolute" sx={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(255,255,255,0.9)',
            padding: '30px',
        }}>
            <Typography variant="h6" sx={{ textAlign: 'center', mb: 2, color: 'green' }}>
                {message}
            </Typography>
            {libraryCardNumber && (
                <Typography sx={{ textAlign: 'center', mb: 2 }}>
                    Your login card code: <strong>{libraryCardNumber}</strong>
                </Typography>
            )}
            <Button component={Link}
                    to={'/auth/login'}
                    fullWidth
                    variant="contained"
            >
                Go to login
            </Button>
        </Box>
    );
};