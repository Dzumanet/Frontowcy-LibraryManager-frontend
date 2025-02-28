import { useState } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { myLoansOptions } from "../../queries/loans";
import dayjs, { Dayjs } from 'dayjs';
import { Typography, Stack, Box } from "@mui/material";
import { LoanTable } from "../../components/Loan/LoanTable.tsx";
import { LoanDatePicker } from "../../components/UI/LoanDatePicker.tsx";

export const MyLoans = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());

    const selectedYear = selectedDate ? selectedDate.year() : undefined;
    const selectedMonth = selectedDate ? selectedDate.month() + 1 : undefined;

    const { data: filteredLoan } = useSuspenseQuery(myLoansOptions({
        page: page + 1,
        pageSize: rowsPerPage,
        year: selectedYear,
        month: selectedMonth
    }));

    const filteredMeta = filteredLoan.meta;

    return (
        <Box sx={{
            minHeight: '100%', display: 'flex', flexDirection: 'column', flex: 1 }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
                <Typography variant="h4">My Loans</Typography>
                <LoanDatePicker selectedDate={selectedDate} onChange={setSelectedDate} />
            </Stack>

            <Stack marginTop={3}>
                <LoanTable
                    data={filteredLoan.data}
                    meta={filteredMeta}
                    page={page}
                    setPage={setPage}
                    rowsPerPage={rowsPerPage}
                    setRowsPerPage={setRowsPerPage}
                />
            </Stack>
        </Box>
    );
};
