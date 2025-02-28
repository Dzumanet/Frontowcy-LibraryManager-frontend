import { Box, CircularProgress as MUICircularProgress } from "@mui/material";

export const CircularProgress = () => {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "200px",
            width: "100%"
        }}>
            <MUICircularProgress size={40} />
        </Box>
    );
};