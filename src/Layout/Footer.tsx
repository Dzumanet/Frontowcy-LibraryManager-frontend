import { Box, Container, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, LinkedIn } from "@mui/icons-material";

export const Footer = () => {
    return (
        <Box sx={{ height: '64px', backgroundColor: '#1976D2', color: '#fff', display: 'flex', alignItems: 'center' }}>
            <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2">© 2025 Library Frontowcy</Typography>
                <Box>
                    <Link href="/privacy" color="inherit" underline="none" sx={{ marginRight: 2 }}>Privacy Policy</Link>
                    <Link href="/terms" color="inherit" underline="none">Terms and Conditions</Link>
                </Box>
                <Box>
                    <IconButton color="inherit" href="https://facebook.com">
                        <Facebook />
                    </IconButton>
                    <IconButton color="inherit" href="https://twitter.com">
                        <Twitter />
                    </IconButton>
                    <IconButton color="inherit" href="https://linkedin.com">
                        <LinkedIn />
                    </IconButton>
                </Box>
            </Container>
        </Box>
    );
};
