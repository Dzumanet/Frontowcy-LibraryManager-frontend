import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import { useBookStore } from "../../store/useBookStore.ts";
import { bookCategories } from "../../utils/bookCategories.ts";


export const CategorySelect = () => {
    const category = useBookStore((state) => state.category);
    const setFilters = useBookStore((state) => state.setFilters);
    const [openCategory, setOpenCategory] = useState(false);

    const handleCategoryChange = (e: SelectChangeEvent) => {
        const selectedCategory = e.target.value === "all" ? undefined : e.target.value;
        setFilters({ category: selectedCategory });
        setOpenCategory(false);
    };


    return (
        <FormControl sx={{ minWidth: 200, mb: 2 }}>
            <InputLabel id="category-label">Category</InputLabel>
            <Select
                labelId="category-label"
                id="category-select"
                open={openCategory}
                value={category || "all"}
                onChange={handleCategoryChange}
                onOpen={() => setOpenCategory(true)}
                onClose={() => setOpenCategory(false)}
                label="Category"
                size="small"
                MenuProps={{ disableScrollLock: true }}
            >
                <MenuItem value="all">All</MenuItem>
                {bookCategories.map(({ label, value }) => (
                    <MenuItem key={value} value={value}>
                        {label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};
