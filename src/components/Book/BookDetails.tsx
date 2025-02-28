import { Typography, Box, Button, Divider } from "@mui/material";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Route } from "../../routes/books/$id.tsx";
import { bookOptions } from "../../queries/books";
import { API_BASE_URL } from "../../api/endpoints.ts";
import { useAuthStore } from "../../store/useAuthStore.ts";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";
import { LoanConfirmationDialog } from "../Loan/LoanConfirmDialog.tsx";
import { bookCategoryLabels } from "../../utils/bookCategoryLabels.ts";

export const BookDetails = () => {
    const { id } = Route.useParams();
    const [openModal, setOpenModal] = useState(false);
    const { data: bookData } = useSuspenseQuery(bookOptions(id));
    const userId = useAuthStore((state) => state.userId);

    const handleClick = () => {
        setOpenModal(true);
    };

    return (
        <Box
            sx={{
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                p: { xs: 2, md: 5 },
                background: "linear-gradient(to bottom, #eef2f3, #ffffff)"
            }}
        >
            <Box
                display="flex"
                flexDirection={{ xs: "column", md: "row" }}
                alignItems="center"
                justifyContent="center"
                maxWidth={900}
                width="100%"
                bgcolor="white"
                p={{ xs: 2, md: 4 }}
                boxShadow={3}
                borderRadius={3}
            >
                {bookData.bookPictureUrl && (
                    <Box
                        component="img"
                        src={`${API_BASE_URL}${bookData.bookPictureUrl}`}
                        alt={`Book cover ${bookData.title}`}
                        sx={{
                            width: { xs: "30%", sm: "60%", md: "40%" },
                            maxWidth: 350,
                            borderRadius: 2,
                            boxShadow: 2,
                            objectFit: "cover",
                            mb: { xs: 2, md: 0 }
                        }}
                    />
                )}

                <Box
                    ml={{ xs: 0, md: 5 }}
                    mt={{ xs: 2, md: 0 }}
                    textAlign={{ xs: "center", md: "left" }}
                    maxWidth={500}
                >
                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                        {bookData.title}
                    </Typography>

                    <Typography variant="h6" color="text.secondary" gutterBottom display="flex" alignItems="center"
                                justifyContent={{ xs: "center", md: "flex-start" }}>
                        ✍️ {bookData.author}
                    </Typography>

                    <Typography variant="body1" sx={{ my: 2, fontSize: 16 }}>
                        Description: {bookData.description}
                    </Typography>

                    <Divider sx={{ my: 2 }} />

                    <Typography variant="body2" color="text.secondary" display="flex" alignItems="center">
                        🏷️ Category: {bookCategoryLabels[bookData.category] || 'Unknown'}
                    </Typography>

                    <Typography variant="body2" color="text.secondary" display="flex" alignItems="center">
                        📅 Year of publication: {bookData.year}
                    </Typography>

                    <Typography variant="body2" color="text.secondary" display="flex" alignItems="center">
                        📚 Available copies: {bookData.availableCopies}
                    </Typography>

                    <Box mt={3} display="flex" justifyContent={{ xs: "center", md: "center" }}>
                        <Tooltip title={!userId ? "Log in to borrow" : ""} disableHoverListener={!!userId}>
                    <span>
                        <Button
                            onClick={handleClick}
                            variant="contained"
                            color="primary"
                            sx={{
                                px: 4,
                                py: 1.5,
                                fontSize: "1rem",
                                textTransform: "none",
                                borderRadius: 3,
                                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                                "&:hover": { transform: "scale(1.05)" }
                            }}
                            disabled={!userId}
                        >
                            Borrow now
                        </Button>
                    </span>
                        </Tooltip>
                    </Box>
                </Box>
            </Box>

            <LoanConfirmationDialog open={openModal} onClose={() => setOpenModal(false)} book={bookData} />

        </Box>

    );
};
