import { Box, CardMedia } from "@mui/material";
import bannerPicture from '../../assets/library400.webp';
import { BooksList } from "../../components/Book/BooksList.tsx";
import { Search } from "../../components/Search/SearchBar.tsx";


export const Home = () => {

    return (
        <>
            <Box sx={{ position: "relative" }}>
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100%",
                        height: "100%",
                        maxWidth: "1800px",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        zIndex: 1,
                        content: '""',
                    }}
                />

                <CardMedia
                    component="img"
                    image={bannerPicture}
                    alt="Okładka książki"
                    sx={{
                        objectFit: "cover",
                        margin: "0 auto",
                        display: "block",
                        width: "100%",
                        height: "auto",
                    }}
                />
                <Search />

            </Box>

            <Box>
                <BooksList />
            </Box>
        </>
    );
};