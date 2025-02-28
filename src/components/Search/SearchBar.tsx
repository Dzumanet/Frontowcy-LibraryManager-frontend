import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, FormControl, Select, styled, TextField, useMediaQuery, useTheme } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { useState, KeyboardEvent } from "react";
import { useBookStore } from "../../store/useBookStore.ts";


const SearchBar = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: "600px",
    backgroundColor: "rgba(255,255,255,0.95)",
    padding: "12px 16px",
    borderRadius: "12px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(1),
    zIndex: 2,

    [theme.breakpoints.up("md")]: {
        flexDirection: "row",
        gap: theme.spacing(2),
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.text.secondary,
}));

const StyledInputBase = styled(TextField)(({ theme }) => ({
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: "8px",
    "& .MuiOutlinedInput-root": {
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    },
}));

export const Search = () => {
    const setFilters = useBookStore((state) => state.setFilters);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const [searchText, setSearchText] = useState("");
    const [searchType, setSearchType] = useState<"title" | "author">("title");

    const handleSearch = () => {
        setFilters({
            title: searchType === "title" ? searchText || undefined : undefined,
            author: searchType === "author" ? searchText || undefined : undefined,
            page: 1,
        });
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <SearchBar>
            {!isMobile && (
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
            )}

            <StyledInputBase
                label="Wpisz frazę..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={handleKeyDown}
                size="small"
            />

            <FormControl sx={{ minWidth: 120 }}>
                <Select
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value as "title" | "author")}
                    size="small"
                    MenuProps={{ disableScrollLock: true }}
                >
                    <MenuItem value="title">Title</MenuItem>
                    <MenuItem value="author">Author</MenuItem>
                </Select>
            </FormControl>

            <Button
                variant="contained"
                onClick={handleSearch}
                sx={{ height: "40px", width: isMobile ? "100%" : "auto" }}
            >
                Search
            </Button>
        </SearchBar>
    );
};