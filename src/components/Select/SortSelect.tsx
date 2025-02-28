import { Select, MenuItem, FormControl, InputLabel, SelectChangeEvent } from "@mui/material";
import { useBookStore } from "../../store/useBookStore.ts";

type SortField = "title" | "author";
type SortOrder = "ASC" | "DESC";

export const SortSelect = () => {
    const sortBy = useBookStore((state) => state.sortBy);
    const sortOrder = useBookStore((state) => state.sortOrder);
    const setFilters = useBookStore((state) => state.setFilters);


    const handleSortChange = (e: SelectChangeEvent) => {
        const value = e.target.value as string;
        const [field, order] = value.split("-") as [SortField, SortOrder];
        setFilters({ sortBy: field, sortOrder: order });
    };

    return (
        <FormControl sx={{ minWidth: 200 }}>
            <InputLabel id="sort-label">Sort by</InputLabel>
            <Select
                labelId="sort-label"
                value={`${sortBy}-${sortOrder}`}
                onChange={handleSortChange}
                label="Sort By"
                size="small"
                MenuProps={{ disableScrollLock: true }}
            >
                <MenuItem value="title-ASC">Title (A-Z)</MenuItem>
                <MenuItem value="title-DESC">Title (Z-A)</MenuItem>
                <MenuItem value="author-ASC">Author (A-Z)</MenuItem>
                <MenuItem value="author-DESC">Author (Z-A)</MenuItem>
            </Select>
        </FormControl>
    );
};