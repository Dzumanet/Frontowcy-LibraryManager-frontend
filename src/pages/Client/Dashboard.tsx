import { Box, Card, Divider, Stack, Typography } from "@mui/material";
import { useSuspenseQuery } from "@tanstack/react-query";
import { myLoansOptions } from "../../queries/loans";
import { StatsCards } from "./StatsCards.tsx";
import { NotificationsActivity } from "./NotificationsActivity.tsx";
import { BooksPieChart } from "../../components/UI/BooksPieChart.tsx";

export const Dashboard = () => {
    const { data: globalLoan } = useSuspenseQuery(myLoansOptions({}));
    const globalMeta = globalLoan.meta;

    return (
        <Box sx={{ padding: 3, flex: 1, display: 'flex', flexDirection: 'column', minHeight: '100%' }}>

            <StatsCards globalMeta={globalMeta} />

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
                    <BooksPieChart meta={globalMeta} />
                </Card>
            </Stack>
        </Box>
    );
};