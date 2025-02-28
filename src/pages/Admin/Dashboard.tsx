import { Box, Card, Divider, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useSuspenseQuery } from "@tanstack/react-query";
import { adminLoanStatisticsOptions } from "../../queries/loans";
import { AccessTime, EventAvailable, HourglassEmpty, LibraryBooks } from "@mui/icons-material";
import { NotificationsActivity } from "../Client/NotificationsActivity.tsx";
import { BarChart } from '@mui/x-charts/BarChart';

export const Dashboard = () => {
    const { data } = useSuspenseQuery(adminLoanStatisticsOptions());
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box sx={{ padding: 3, flex: 1, display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
            <Stack direction={{ xs: "column", md: "row" }} spacing={2} mb={2} justifyContent="center">
                <Card sx={{ flex: 1, padding: 2, backgroundColor: "#E3F2FD", minWidth: 250 }}>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <LibraryBooks fontSize="large" color="primary" />
                        <Typography variant="h6">Total Unique Books</Typography>
                    </Stack>
                    <Typography variant="h4" fontWeight="bold">{data.totalUniqueBooks}</Typography>
                </Card>
                <Card sx={{ flex: 1, padding: 2, backgroundColor: "#E3F2FD", minWidth: 250 }}>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <LibraryBooks fontSize="large" color="primary" />
                        <Typography variant="h6">Total Copies of Books</Typography>
                    </Stack>
                    <Typography variant="h4" fontWeight="bold">{data.totalCopies}</Typography>
                </Card>
                <Card sx={{ flex: 1, padding: 2, backgroundColor: "#FFF3E0", minWidth: 250 }}>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <HourglassEmpty fontSize="large" color="warning" />
                        <Typography variant="h6">Currently Borrowed</Typography>
                    </Stack>
                    <Typography variant="h4">{data.borrowed ?? 0}</Typography>
                </Card>
                <Card sx={{ flex: 1, padding: 2, backgroundColor: "#FFEBEE", minWidth: 250 }}>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <AccessTime fontSize="large" color="error" />
                        <Typography variant="h6" color="error">Total Loans</Typography>
                    </Stack>
                    <Typography variant="h4" fontWeight="bold" color="error">{data.totalLoans ?? 0}</Typography>
                </Card>
            </Stack>

            <Stack direction={{ xs: "column", md: "row" }} spacing={2} justifyContent="center">
                <Card sx={{ flex: 1, padding: 2, backgroundColor: "#FFEBEE", minWidth: 250 }}>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <AccessTime fontSize="large" color="error" />
                        <Typography variant="h6" color="error">Overdue Books</Typography>
                    </Stack>
                    <Typography variant="h4" fontWeight="bold" color="error">{data.overdue ?? 0}</Typography>
                </Card>
                <Card sx={{ flex: 1, padding: 2, backgroundColor: "#E8F5E9", minWidth: 250 }}>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <EventAvailable fontSize="large" color="success" />
                        <Typography variant="h6">Returned on Time</Typography>
                    </Stack>
                    <Typography variant="h4">{data.returned ?? 0}</Typography>
                </Card>
                <Card sx={{ flex: 1, padding: 2, backgroundColor: "#E8F5E9", minWidth: 250 }}>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <EventAvailable fontSize="large" color="success" />
                        <Typography variant="h6">Late Returned</Typography>
                    </Stack>
                    <Typography variant="h4">{data.returnedLate ?? 0}</Typography>
                </Card>
                <Card sx={{ flex: 1, padding: 2, backgroundColor: "#FFEBEE", minWidth: 250 }}>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <AccessTime fontSize="large" color="error" />
                        <Typography variant="h6" color="error">Forced Returns</Typography>
                    </Stack>
                    <Typography variant="h4" fontWeight="bold" color="error">{data.forcedReturned ?? 0}</Typography>
                </Card>
            </Stack>

            <Stack direction={{ xs: 'column', md: 'row' }} alignItems="stretch" justifyContent="space-between"
                   spacing={3} sx={{ width: "100%", flex: 1 }}>

                <NotificationsActivity />

                <Card sx={{
                    flex: 1,
                    padding: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Typography variant="h6" fontWeight="bold">Total Books Report</Typography>
                    <Divider sx={{ my: 2, width: '100%' }} />

                    <BarChart
                        xAxis={[{ scaleType: 'band', data: ['Unique Books', 'Total Copies', 'Loans', 'Overdue'] }]}
                        series={[
                            { data: [data.totalUniqueBooks, data.totalCopies, data.totalLoans ?? 0, data.overdue ?? 0] }
                        ]}
                        width={isMobile ? 300 : 600}
                        height={300}
                    />
                </Card>
            </Stack>
        </Box>
    );
};