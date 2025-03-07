import { Card, Divider, Stack, Switch, Typography } from "@mui/material";
import { Notifications } from "@mui/icons-material";
import { useState } from "react";

export const EmailNotification = () => {
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);

    const toggleNotifications = () => setNotificationsEnabled((prev) => !prev);

    return (
        <Card sx={{ padding: 3, marginBottom: 3, borderRadius: 2, boxShadow: 2 }}>
            <Typography variant="h6" gutterBottom>Notification Preferences</Typography>
            <Divider sx={{ my: 2 }} />
            <Stack direction="row" alignItems="center" spacing={2}>
                <Notifications sx={{ color: "primary.main" }} />
                <Typography>Email notifications:</Typography>
                <Switch
                    checked={notificationsEnabled} onChange={toggleNotifications} />
            </Stack>
        </Card>
    )
};