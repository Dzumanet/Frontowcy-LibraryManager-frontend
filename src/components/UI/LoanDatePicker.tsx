import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Button, Stack } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Dayjs } from "dayjs";

type LoanDatePickerProps = {
    selectedDate: Dayjs | null;
    onChange: (date: Dayjs | null) => void;
}

export const LoanDatePicker = ({ selectedDate, onChange }: LoanDatePickerProps) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack direction="row" spacing={2} alignItems="center" mb={3}>
                <DatePicker
                    views={['year', 'month']}
                    label="Select Year and Month"
                    value={selectedDate}
                    onChange={onChange}
                    format="MMMM YYYY"
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => onChange(null)}
                >
                    Show All
                </Button>
            </Stack>
        </LocalizationProvider>
    );
};