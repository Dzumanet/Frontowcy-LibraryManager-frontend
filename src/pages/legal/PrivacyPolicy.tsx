import { Link } from "@tanstack/react-router";
import { Container, Typography, Button } from "@mui/material";

export const PrivacyPolicy = () => {
    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <Typography variant="h4" gutterBottom>Privacy Policy</Typography>
            <Typography >
                This Privacy Policy describes how we collect, use, and protect your personal information.
            </Typography>

            <Typography variant="h6" gutterBottom>1. Information We Collect</Typography>
            <Typography>
                We collect information that you provide to us, such as your name, email address, and any other details you submit.
            </Typography>

            <Typography variant="h6" gutterBottom>2. How We Use Your Information</Typography>
            <Typography>
                We use your information to provide and improve our services, communicate with you, and comply with legal obligations.
            </Typography>

            <Typography variant="h6" gutterBottom>3. Security</Typography>
            <Typography>
                We take reasonable measures to protect your personal information, but no method of transmission over the Internet is 100% secure.
            </Typography>

            <Typography>For more details, please contact us.</Typography>
            <Button component={Link} to="/terms" variant="contained" color="primary">Read our Terms and Conditions</Button>
        </Container>
    );
};