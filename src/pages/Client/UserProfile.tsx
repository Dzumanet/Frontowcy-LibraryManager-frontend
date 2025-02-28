import { Box, Stack, Typography, Card, TextField, Button, Divider } from "@mui/material";
import { Person, Email, Lock, Notifications } from "@mui/icons-material";
import { useState } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { categoryUserDetails } from "../../queries/users";
import { Logout } from "../../components/Auth/Logout.tsx";

export const UserProfile = () => {
    const { data: userData } = useSuspenseQuery(categoryUserDetails);
    const [password, setPassword] = useState("");

    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h4" gutterBottom>👤 User Profile</Typography>

            <Card sx={{ padding: 2, marginBottom: 3 }}>
                <Typography variant="h6">Personal Information</Typography>
                <Divider sx={{ my: 2 }} />
                <Stack spacing={2}>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Person />
                        <Typography><strong>Name:</strong> {userData.firstName}</Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Email />
                        <Typography><strong>Email:</strong> {userData.email}</Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Lock />
                        <Typography><strong>Role:</strong> {userData.role}</Typography>
                    </Stack>
                </Stack>
            </Card>

            <Card sx={{ padding: 2, marginBottom: 3 }}>
                <Typography variant="h6">Change Password</Typography>
                <Divider sx={{ my: 2 }} />
                <Stack spacing={2} direction="row">
                    <TextField
                        label="New Password"
                        type="password"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button variant="contained" color="primary">Update</Button>
                </Stack>
            </Card>


            <Card sx={{ padding: 2, marginTop: 3 }}>
                <Typography variant="h6">Notification Preferences</Typography>
                <Divider sx={{ my: 2 }} />
                <Stack direction="row" spacing={2}>
                    <Notifications />
                    <Typography>Email notifications: Enabled</Typography>
                </Stack>
            </Card>

            <Logout />

        </Box>
    );
};
