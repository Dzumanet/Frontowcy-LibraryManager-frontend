import { Button, Card, Divider, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

export const ChangePasswordForm = () => {
    const [password, setPassword] = useState("");


    return (
        <Card sx={{ padding: 3, marginBottom: 3, borderRadius: 2, boxShadow: 2 }}>
            <Typography variant="h6" gutterBottom>Change Password</Typography>
            <Divider sx={{ my: 2 }} />
            <Stack spacing={2} direction={{ xs: "column", sm: "row" }}>
                <TextField
                    label="New Password"
                    type="password"
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button variant="contained" color="primary" sx={{ minWidth: 120 }}>Update</Button>
            </Stack>
        </Card>
    )
};