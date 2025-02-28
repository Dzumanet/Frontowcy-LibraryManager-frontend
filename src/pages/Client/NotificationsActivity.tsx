import { Card, Divider, Stack, Typography } from "@mui/material";

export const NotificationsActivity = () => {
    return(
            <Stack flex={1} spacing={3} sx={{ flex: 1, minHeight: '200px' }}>
                <Card sx={{ padding: 2 }}>
                    <Typography variant="h6">Notifications</Typography>
                    <Divider sx={{ my: 2 }} />
                    <Typography sx={{ color: "gray", fontStyle: "italic" }}>🎉 No new notifications!</Typography>
                </Card>
                <Card sx={{ padding: 2 }}>
                    <Typography variant="h6">Activity</Typography>
                    <Divider sx={{ my: 2 }} />
                    <Typography>Lorem ipsum activity 1</Typography>
                    <Typography>Lorem ipsum activity 2</Typography>
                </Card>
            </Stack>
    )
};