import { Box, Button, Stack, Typography } from "@mui/material";
import { Link, Outlet } from "@tanstack/react-router";
import { AddCircle, Edit } from "@mui/icons-material";

export const BooksManagement = () => {
    return (
        <Box sx={{ padding: 3 }}>
            <Typography
                variant="h5"
                sx={{ fontWeight: "bold", marginBottom: 3, textAlign: "center" }}
            >
                Manage Books
            </Typography>
            <Stack
                direction="row"
                spacing={3}
                justifyContent="center"
                marginBottom={3}
            >
                <Button
                    component={Link}
                    to="/dashboard/admin/books/add"
                    variant="contained"
                    color="primary"
                    startIcon={<AddCircle />}
                >
                    Add Book
                </Button>
                <Button
                    component={Link}
                    to="/dashboard/admin/books/update"
                    variant="contained"
                    color="secondary"
                    startIcon={<Edit />}
                >
                    Update Book
                </Button>
            </Stack>
            <Outlet />
        </Box>
    );
};