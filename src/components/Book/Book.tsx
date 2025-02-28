import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { API_BASE_URL } from "../../api/endpoints.ts";
import { BooksList } from "../../types/book.ts";
import { useNavigate } from "@tanstack/react-router";
import { bookCategoryLabels } from "../../utils/bookCategoryLabels.ts";

type BookProps = {
    book: BooksList;
}

export const Book = ({ book }: BookProps) => {
    const navigate = useNavigate();

    const handleEdit = (id: string) => {
        navigate({
            to: `/books/$id`, params: {
                id
            }
        });
    };


    return (
        <Card
            sx={{
                width: "100%",
                maxWidth: "350px",
                display: "flex",
                flexDirection: "column",
                borderRadius: 3,
                boxShadow: 3,
                overflow: "hidden",
                transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                ':hover': {
                    transform: "scale(1.05)",
                    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)"
                }
            }}
            onClick={() => handleEdit(book.id)}
        >
            {book.bookPictureUrl && (
                <CardMedia
                    component="img"
                    height="220"
                    image={`${API_BASE_URL}${book.bookPictureUrl}`}
                    alt={`Book cover ${book.title}`}
                    sx={{
                        objectFit: "contain",
                        marginTop: 5
                    }}
                />
            )}
            <CardContent sx={{ p: 2, textAlign: "center" }}>
                <Typography variant="h6" fontWeight="bold">{book.title}</Typography>
                <Typography variant="body2" color="text.secondary">✍️ Author: {book.author}</Typography>
                <Typography variant="body2" color="text.secondary">📅 Year of publication: {book.year}</Typography>
                <Typography variant="body2" color="text.secondary">📚 Available
                    copies: {book.availableCopies}</Typography>
                <Typography variant="body2" color="text.secondary">🏷️
                    Category: {bookCategoryLabels[book.category] || 'Unknown'}</Typography>
            </CardContent>
        </Card>
    );
};