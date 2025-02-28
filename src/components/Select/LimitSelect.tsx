import { useState } from "react";
import { useBookStore } from "../../store/useBookStore.ts";
import { FormControl, InputLabel, Select, SelectChangeEvent } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

const pageSizeOptions = [5, 10, 20, 50];

export const LimitSelect = () => {
    const [open, setOpen] = useState(false);
    const pageSize = useBookStore((state) => state.pageSize);
    const setPageSize = useBookStore((state) => state.setPageSize);

    const handleLimitChange = (e: SelectChangeEvent) => {
        const newSize = Number(e.target.value);
        if (pageSizeOptions.includes(newSize)) {
            setPageSize(newSize);
        }
    };


    return (
        <FormControl sx={{ minWidth: 150 }}>
            <InputLabel id="items-label">Items per page</InputLabel>
            <Select
                labelId="items-label"
                open={open}
                value={pageSize.toString()}
                onChange={handleLimitChange}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
                label="Items per page"
                size="small"
                MenuProps={{ disableScrollLock: true }}
            >
                {pageSizeOptions.map((size) => (
                    <MenuItem key={size} value={size}>
                        {size} per page
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};