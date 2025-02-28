import { Box, Button, Typography } from "@mui/material";

interface PaginationNavProps {
    page: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    onPrevPage: () => void;
    onNextPage: () => void;
}

export const PaginationNav = ({
                                  page,
                                  hasPrevPage,
                                  hasNextPage,
                                  onPrevPage,
                                  onNextPage,
                              }: PaginationNavProps) => {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}>
            <Button variant="contained" disabled={!hasPrevPage} onClick={onPrevPage}>
                Previous
            </Button>

            <Typography variant="body1">Page: {page}</Typography>

            <Button variant="contained" onClick={onNextPage} disabled={!hasNextPage}>
                Next
            </Button>
        </Box>
    );
};