import { useSuspenseQuery } from "@tanstack/react-query";
import { booksOptions } from "../../queries/books";
import { Box } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useBookStore } from "../../store/useBookStore.ts";
import { useEffect } from "react";
import { UpdateBookPagination } from "./UpdateBookPagination.tsx";
import { UpdateBookTableRow } from "./UpdateBookTableRow.tsx";
import { Outlet } from "@tanstack/react-router";


export const UpdateBook = () => {
    const { title, author, page, pageSize, setPaginationMeta } = useBookStore();
    const category = useBookStore((state) => state.category);

    const { data: booksData } = useSuspenseQuery(booksOptions({ title, author, category, page, pageSize }));

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
        <Box sx={{ padding: 3 }}>
            <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2 }}>
                <Table aria-label="update book table">
                    <TableHead>
                        <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                            <TableCell align="center" sx={{ fontWeight: "bold" }}>Title</TableCell>
                            <TableCell align="right" sx={{ fontWeight: "bold" }}>Author</TableCell>
                            <TableCell align="right" sx={{ fontWeight: "bold" }}>Year</TableCell>
                            <TableCell align="right" sx={{ fontWeight: "bold" }}>Total Copies</TableCell>
                            <TableCell align="right" sx={{ fontWeight: "bold" }}>Available Copies</TableCell>
                            <TableCell align="right" sx={{ fontWeight: "bold" }}>Created At</TableCell>
                            <TableCell align="right" sx={{ fontWeight: "bold" }}>Category</TableCell>
                            <TableCell align="center" sx={{ fontWeight: "bold" }}>Picture</TableCell>
                            <TableCell align="center" sx={{ fontWeight: "bold" }}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {booksData.data.map((book) => (
                            <UpdateBookTableRow key={book.id} book={book} />
                        ))}
                    </TableBody>
                    <UpdateBookPagination />
                </Table>
            </TableContainer>
            <Outlet />
        </Box>
    );
};