import { Error as ErrorIcon, Warning as WarningIcon, CheckCircle as CheckCircleIcon, Book as BookIcon, HelpOutline as HelpOutlineIcon } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import BlockIcon from '@mui/icons-material/Block';

export const formatLoanStatus = (status: string) => {
    return (
        <Box display="flex" alignItems="center" justifyContent="center">
            {status === "overdue" && <ErrorIcon color="error" fontSize="small" sx={{ mr: 1 }} />}
            {status === "returned_late" && <WarningIcon color="warning" fontSize="small" sx={{ mr: 1 }} />}
            {status === "forced_returned" && <BlockIcon color="warning" fontSize="small" sx={{ mr: 1 }} />}
            {status === "borrowed" && <BookIcon color="primary" fontSize="small" sx={{ mr: 1 }} />}
            {status === "returned" && <CheckCircleIcon color="success" fontSize="small" sx={{ mr: 1 }} />}
            {status !== "overdue" && status !== "returned_late" && status !== "borrowed" && status !== "returned" && status !== "forced_returned" && (
                <HelpOutlineIcon color="disabled" fontSize="small" sx={{ mr: 1 }} />
            )}
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                {status === "overdue" && "Overdue"}
                {status === "returned_late" && "Returned Late"}
                {status === "forced_returned" && "Forced Returned"}
                {status === "borrowed" && "Currently Borrowed"}
                {status === "returned" && "Returned"}
                {!["overdue", "returned_late", "borrowed", "returned", "forced_returned"].includes(status) && "Unknown Status"}
            </Typography>
        </Box>
    );
};