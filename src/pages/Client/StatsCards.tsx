import { Card, Stack, Typography } from "@mui/material";
import { AccessTime, EventAvailable, HourglassEmpty, LibraryBooks } from "@mui/icons-material";
import { Meta } from "../../types/meta.ts";

type StatsCardsProps = {
    globalMeta: Meta;
}

export const StatsCards = ({ globalMeta }: StatsCardsProps) => {
    return (
        <Stack direction="row" spacing={2} mb={3}>
            <Card sx={{ flex: 1, padding: 2, backgroundColor: "#E3F2FD" }}>
                <Stack direction="row" alignItems="center" spacing={2}>
                    <LibraryBooks fontSize="large" color="primary" />
                    <Typography variant="h6">Total Borrowed Books</Typography>
                </Stack>
                <Typography variant="h4" fontWeight="bold">{globalMeta.total}</Typography>
            </Card>
            <Card sx={{ flex: 1, padding: 2, backgroundColor: "#FFEBEE" }}>
                <Stack direction="row" alignItems="center" spacing={2}>
                    <AccessTime fontSize="large" color="error" />
                    <Typography variant="h6" color="error">Overdue Books</Typography>
                </Stack>
                <Typography variant="h4" fontWeight="bold" color="error">{globalMeta.overdueBooks ?? 0}</Typography>
            </Card>
            <Card sx={{ flex: 1, padding: 2 }}>
                <Stack direction="row" alignItems="center" spacing={2}>
                    <HourglassEmpty fontSize="large" color="warning" />
                    <Typography variant="h6">Currently Borrowed</Typography>
                </Stack>
                <Typography variant="h4">{globalMeta.currentlyBorrowed ?? 0}</Typography>
            </Card>
            <Card sx={{ flex: 1, padding: 2, backgroundColor: "#E8F5E9" }}>
                <Stack direction="row" alignItems="center" spacing={2}>
                    <EventAvailable fontSize="large" color="success" />
                    <Typography variant="h6">Returned on Time</Typography>
                </Stack>
                <Typography variant="h4">{globalMeta.returnedOnTime ?? 0}</Typography>
            </Card>
        </Stack>
    );
};