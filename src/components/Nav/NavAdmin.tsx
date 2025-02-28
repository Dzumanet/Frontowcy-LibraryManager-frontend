import { Box, Button, Drawer, List, ListItem, Stack, Typography } from "@mui/material";
import { Link } from "@tanstack/react-router";
import { useAuthStore } from "../../store/useAuthStore.ts";
import { AccountCircle, Dashboard, LibraryBooks, Settings } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import HistoryIcon from "@mui/icons-material/History";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";


export const NavAdmin = () => {
    const userName = useAuthStore((store) => store.firstName);
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
                sx={{ display: { xs: "block", md: "none" } }}
                onClick={() => setMobileOpen(!mobileOpen)}
                color="inherit"
            >
                <MenuIcon />
            </IconButton>

            <Stack
                direction="row"
                spacing={2}
                sx={{
                    flexGrow: 1,
                    display: { xs: "none", md: "flex" },
                    alignItems: "center",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    padding: "10px 20px",
                    borderRadius: "12px",
                }}
            >
                <Button color="inherit" component={Link} to="/dashboard/admin" startIcon={<Dashboard />}>
                    Dashboard
                </Button>
                <Button color="inherit" component={Link} to="/dashboard/admin/books" startIcon={<LibraryBooks />}>
                    Manage Books
                </Button>
                <Button color="inherit" component={Link} to="/dashboard/admin/logs" startIcon={<HistoryIcon />}>
                    View Logs
                </Button>
                <Button color="inherit" component={Link} to="/dashboard/admin/loans" startIcon={<Settings />}>
                    Loans
                </Button>
            </Stack>

            <Drawer
                anchor="left"
                open={mobileOpen}
                onClose={() => setMobileOpen(false)}
                sx={{ display: { xs: "block", md: "none" } }}
            >
                <List>
                    <ListItem component={Link} to="/dashboard/admin" onClick={() => setMobileOpen(false)}>
                        <Dashboard sx={{ marginRight: 1 }} /> Dashboard
                    </ListItem>
                    <ListItem component={Link} to="/dashboard/admin/books" onClick={() => setMobileOpen(false)}>
                        <LibraryBooks sx={{ marginRight: 1 }} /> Manage Books
                    </ListItem>
                    <ListItem component={Link} to="/dashboard/admin/logs" onClick={() => setMobileOpen(false)}>
                        <HistoryIcon sx={{ marginRight: 1 }} /> View Logs
                    </ListItem>
                    <ListItem component={Link} to="/dashboard/admin/loans" onClick={() => setMobileOpen(false)}>
                        <Settings sx={{ marginRight: 1 }} /> Loans
                    </ListItem>
                </List>
            </Drawer>

            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", marginLeft: 3 }}>
                <Typography variant="h6" sx={{
                    fontWeight: 700,
                    fontSize: { xs: '1rem', md: '1.25rem', lg: '1.25' },
                    flexShrink: 0,
                    marginRight: 2
                }}>
                    Welcome
                </Typography>
                <Typography variant="h6" sx={{
                    fontWeight: 700,
                    fontSize: { xs: '1rem', md: '1.25rem', lg: '1.25' },
                    flexShrink: 0,
                    marginRight: 2

                }}>
                    {userName}
                </Typography>
            </Box>
            <IconButton component={Link} to="/dashboard/admin/profile" color="inherit">
                <AccountCircle fontSize="large" />
            </IconButton>
        </Box>
    );
};