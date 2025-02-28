import { TableRow, TableCell, Button } from "@mui/material";
import { Image, ImageNotSupported, Edit, Delete } from "@mui/icons-material";
import { Book } from "../../types/book.ts";
import { Link } from "@tanstack/react-router";
import dayjs from "dayjs";


type UpdateBookTableRowProps = {
    book: Book;
}


export const UpdateBookTableRow = ({ book }: UpdateBookTableRowProps) => {
    return (
        <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">{book.title}</TableCell>
            <TableCell align="right">{book.author}</TableCell>
            <TableCell align="right">{book.year}</TableCell>
            <TableCell align="right">{book.totalCopies}</TableCell>
            <TableCell align="right">{book.availableCopies}</TableCell>
            <TableCell align="right">{dayjs(book.createdAt).format("DD.MM.YYYY")}</TableCell>
            <TableCell align="right">{book.category}</TableCell>
            <TableCell align="center">
                {book.bookPictureUrl ? <Image color="success" /> : <ImageNotSupported color="error" />}
            </TableCell>
            <TableCell align="center">
                <Button
                    component={Link}
                    to={`/dashboard/admin/books/update/${book.id}`}
                    variant="contained"
                    color="primary"
                    startIcon={<Edit />}
                >
                    Update
                </Button>
                <Button
                    component={Link}
                    to={`/dashboard/admin/books/update/delete/${book.id}`}
                    variant="contained"
                    color="error"
                    startIcon={<Delete />}
                    sx={{ marginLeft: 1 }}
                >
                    Delete
                </Button>
            </TableCell>
        </TableRow>
    );
};

