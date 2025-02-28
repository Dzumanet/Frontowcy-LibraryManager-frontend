import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

type AuthLayoutProps = {
    children: ReactNode;
    flexDirection?: string,
};

export const AuthLayout = ({ children, flexDirection = "row" }: AuthLayoutProps) => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexGrow: 1,
            height: '600px',
        }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { flexDirection },
                    maxWidth: '1200px',
                    width: '100%',
                    height: '70%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: 3,
                    borderRadius: '8px',
                    overflow: 'hidden',
                }}
            >
                <Box
                    sx={{
                        width: '50%',
                        height: '100%',
                        backgroundColor: '#3F51B5',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'white',
                        padding: '2rem',
                    }}
                >
                    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                        Tu bedzie jakas grafika
                    </Typography>
                </Box>
                <Box
                    sx={{
                        width: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    {children}
                </Box>
            </Box>
        </Box>
    );
};