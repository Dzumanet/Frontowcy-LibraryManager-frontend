import { Box, Modal } from "@mui/material";
import { BookDetails } from "../Book/BookDetails.tsx";
import { useNavigate } from "@tanstack/react-router";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";


export const BookDetailsModal = () => {
    const navigate = useNavigate();
    const handleClose = () => {
        navigate({ to: '/books' });
    };

    return (
        <Modal open={true} onClose={handleClose}>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    background: "linear-gradient(to bottom, #eef2f3, #ffffff)",
                    boxShadow: 24,
                    borderRadius: 3,
                    p: 3,
                    width: { xs: "90%", md: "60%", lg: "50%" },
                    maxHeight: "80vh",
                    overflowY: "auto",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <IconButton
                    onClick={handleClose}
                    sx={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                        color: "gray",
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <BookDetails />
            </Box>
        </Modal>

    );
};