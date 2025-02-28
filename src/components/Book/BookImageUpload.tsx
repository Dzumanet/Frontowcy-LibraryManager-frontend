import { Box, Button, Typography } from "@mui/material";
import { API_BASE_URL } from "../../api/endpoints.ts";
import { ChangeEvent } from "react";

interface BookImageUploadProps {
    preview: string | null;
    onFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onRemoveImage: () => void;
}

export const BookImageUpload = ({ preview, onFileChange, onRemoveImage }: BookImageUploadProps) => {
    return (
        <Box sx={{ textAlign: 'center' }}>
            {preview ? (
                <>
                    <Box sx={{ marginBottom: 2 }}>
                        <img src={preview.startsWith("blob:") ? preview : `${API_BASE_URL}${preview}`}
                             alt="Cover preview"
                             style={{
                                 maxWidth: "100%",
                                 maxHeight: "200px",
                                 objectFit: "contain",
                                 transition: "opacity 0.3s ease-in-out"
                             }} />
                    </Box>
                    <Button variant="contained" size="medium" onClick={onRemoveImage}>
                        Delete the photo
                    </Button>
                </>
            ) : (
                <>
                    <Typography variant="body2" color="textSecondary">
                        No photo available
                    </Typography>
                    <Button variant="contained" size="medium" component="label">
                        Add a photo
                        <input type="file" accept="image/png, image/jpeg" hidden onChange={onFileChange} />
                    </Button>
                </>
            )}
        </Box>
    );
};
