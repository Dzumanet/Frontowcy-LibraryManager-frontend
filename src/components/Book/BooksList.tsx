import { useSuspenseQuery } from "@tanstack/react-query";
import { booksOptions } from "../../queries/books";
import { Box, Typography } from "@mui/material";
import { Book } from "./Book.tsx";
import { useBookStore } from "../../store/useBookStore.ts";
import { CategorySelect } from "../Select/CategorySelect.tsx";
import { LimitSelect } from "../Select/LimitSelect.tsx";
import { BookPaginationNav } from "../Nav/BookPaginationNav.tsx";
import { useEffect } from "react";
import { SortSelect } from "../Select/SortSelect.tsx";

export const BooksList = () => {
    const { title, author, page, pageSize, total, setPaginationMeta, sortBy, sortOrder } = useBookStore();

    const category = useBookStore((state) => state.category);
    const { data: booksData } = useSuspenseQuery(booksOptions({
        title,
        author,
        category,
        page,
        pageSize,
        sortBy,
        sortOrder
    }));

    useEffect(() => {
        if (booksData?.meta) {
            setPaginationMeta({
                totalPages: booksData.meta.totalPages,
                total: booksData.meta.total,
                hasNextPage: booksData.meta.hasNextPage,
                hasPrevPage: booksData.meta.hasPrevPage,
            });
        }
    }, [booksData, setPaginationMeta]);

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4, width: "100%", alignItems: "center", p: 3 }}>
            <Typography variant="h4" component="h2"
                        sx={{ width: "100%", textAlign: "center", fontWeight: "bold", mb: 2 }}>
                📚 Number of Available Books: {total}
            </Typography>
            <Box sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                justifyContent: "center",
                width: "90%",
                maxWidth: "1200px"
            }}>
                <CategorySelect />
                <SortSelect />
                <LimitSelect />
            </Box>
            <Box sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
                gap: 3,
                justifyContent: "center",
                width: "90%",
                maxWidth: "1200px"
            }}>
                {booksData.data.map(book => <Book book={book} key={book.id} />)}
            </Box>
            <BookPaginationNav />
        </Box>
    );
};

