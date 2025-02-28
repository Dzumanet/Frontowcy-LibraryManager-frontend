import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import { useLoanStore } from "../../store/useLoanStore.ts";
import { loanStatusEnum } from "../../utils/loanStatusEnum.ts";


export const StatusSelect = () => {
    const status = useLoanStore((state) => state.loanStatus);

    const setFilters = useLoanStore((state) => state.setFilters);
    const [openCategory, setOpenCategory] = useState(false);


    const handleCategoryChange = (e: SelectChangeEvent) => {
        const selectedStatus = e.target.value === "all" ? undefined : e.target.value;
        setFilters({ loanStatus: selectedStatus });
        setOpenCategory(false);
        console.log('StatusSelect', e.target.value);
    };

    return (
        <FormControl sx={{ minWidth: 200 }}>
            <InputLabel id="status-label">Status: </InputLabel>
            <Select
                labelId="status-label"
                open={openCategory}
                value={status || "all"}
                onChange={handleCategoryChange}
                onOpen={() => setOpenCategory(true)}
                onClose={() => setOpenCategory(false)}
                label="Status"
                size="small"
                MenuProps={{ disableScrollLock: true }}
            >
                <MenuItem value="all">All</MenuItem>
                {loanStatusEnum.map(({ label, value }) => (
                    <MenuItem key={value} value={value}>
                        {label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};
