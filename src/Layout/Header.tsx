import { Box, CardMedia, Typography } from "@mui/material";
import libraryLogo from "../assets/library_logo.jpg";
import { Link } from "@tanstack/react-router";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { GuestView } from "./GuestView.tsx";
import { Nav } from "../components/Nav/Nav.tsx";
import { useAuthStore } from "../store/useAuthStore.ts";


export const Header = () => {
    const { isAuthorized } = useAuthStore();

    return (
        <AppBar
            position="relative"
            sx={{
                height: { xs: '70px', md: '90px' },
                maxWidth: "1800px",
                width: "100%",
                backgroundColor: "#1976D2",
                padding: { xs: "5px 10px", md: "10px 20px" },
            }}
        >
            <Toolbar sx={{ display: "flex", alignItems: "center", height: "100%" }}>
                <Box
                    component={Link}
                    to="/"
                    sx={{ display: "flex", alignItems: "center", flexShrink: 0, gap: 2 }}>
                    <CardMedia
                        component="img"
                        sx={{
                            height: { xs: 50, md: 70 },
                            width: { xs: 50, md: 70 },
                            objectFit: "contain",
                            marginRight: 1
                        }}
                        image={libraryLogo}
                        alt="Library Logo"
                    />
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: { xs: 'flex-start', md: 'center', },
                    }}>
                        <Typography
                            variant={"h6"}
                            sx={{
                                fontWeight: 700,
                                fontSize: { xs: '1rem', md: '1.25rem', lg: '1.25' },
                                letterSpacing: ".2rem",
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            Library
                        </Typography>
                        <Typography
                            variant={"h6"}
                            sx={{
                                fontWeight: 700,
                                fontSize: { xs: '1rem', md: '1.25rem' },
                                letterSpacing: ".2rem",
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            Frontowcy
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ flexGrow: 1 }} />
                {isAuthorized ? <Nav /> : <GuestView />}
            </Toolbar>
        </AppBar>
    );
};