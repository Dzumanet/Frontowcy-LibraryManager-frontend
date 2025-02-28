import { useLoanStore } from "../../store/useLoanStore.ts";
import { Box, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import IconButton from "@mui/material/IconButton";

export const LoanPaginationNav = () => {
    const page = useLoanStore((state) => state.page);
    const prevPage = useLoanStore((state) => state.prevPage);
    const nextPage = useLoanStore((state) => state.nextPage);
    const hasPrevPage = useLoanStore((state) => state.hasPrevPage);
    const hasNextPage = useLoanStore((state) => state.hasNextPage);

    return (
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}>
            <IconButton
                disabled={!hasPrevPage}
                onClick={prevPage}>
                <ArrowBackIcon />
            </IconButton>

            <Typography variant="body1">Page: {page}</Typography>

            <IconButton
                disabled={!hasNextPage}
                onClick={nextPage}>
                <ArrowForwardIcon />
            </IconButton>

        </Box>
    );
};
