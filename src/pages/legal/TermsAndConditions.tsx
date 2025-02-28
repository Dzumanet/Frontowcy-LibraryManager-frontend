import { Link } from "@tanstack/react-router";
import { Container, Typography, Button } from "@mui/material";

export const TermsAndConditions = () => {
    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <Typography variant="h4" gutterBottom>Terms and Conditions</Typography>
            <Typography>
                By accessing and using our services, you agree to be bound by these terms.
            </Typography>

            <Typography variant="h6" gutterBottom>1. Use of Service</Typography>
            <Typography>
                You agree to use our services in compliance with all applicable laws and regulations.
            </Typography>

            <Typography variant="h6" gutterBottom>2. User Responsibilities</Typography>
            <Typography>
                You are responsible for maintaining the confidentiality of your account information.
            </Typography>

            <Typography variant="h6" gutterBottom>3. Limitation of Liability</Typography>
            <Typography>
                We are not liable for any damages arising from your use of our services.
            </Typography>

            <Typography>If you have any questions, please contact us.</Typography>
            <Button component={Link} to="/privacy" variant="contained" color="primary">Read our Privacy Policy</Button>
        </Container>
    );
};