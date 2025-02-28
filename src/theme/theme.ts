import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        background: {
            default: "#f4f4f4",
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                "html, body": {
                    maxWidth: "1800px",
                    margin: "0 auto",
                    padding: 0,
                    backgroundColor: "#f5f5f5",
                },
                "*": {
                    boxSizing: "border-box",
                },
                a: {
                    textDecoration: "none",
                    color: "inherit",
                },
            },
        },
    },
});
