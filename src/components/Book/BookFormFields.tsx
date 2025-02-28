import { FormControl, TextField, InputLabel, Select, MenuItem } from "@mui/material";
import { Controller, UseFormReturn } from "react-hook-form";
import { RegisterBookDto } from "../../types/book.ts";
import { bookCategories } from "../../utils/bookCategories.ts";

interface BookFormFieldsProps {
    form: UseFormReturn<RegisterBookDto>;
    mode: 'add' | 'edit';
    availableCopies?: number;
}

export const BookFormFields = ({ form, mode, availableCopies }: BookFormFieldsProps) => {
    const { register, control, formState: { errors } } = form;


    const isEditMode = mode === 'edit';

    console.log('availableCopies', availableCopies);

    return (
        <FormControl sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <TextField
                label="Title"
                {...register('title')}
                error={!!errors.title}
                helperText={errors.title?.message}
            />
            <TextField
                label="Author"
                {...register('author')}
                error={!!errors.author}
                helperText={errors.author?.message}
            />
            <TextField
                label="Description"
                {...register('description')}
                error={!!errors.description}
                helperText={errors.description?.message}
                multiline />
            <TextField
                label="Year"
                type="number"
                {...register('year', { valueAsNumber: true })}
                error={!!errors.year}
                helperText={errors.year?.message}
            />
            <TextField
                label="Total Copies"
                type="number"
                {...register('totalCopies', {
                    valueAsNumber: true,
                    min: isEditMode ? availableCopies : 1,
                })}
                error={!!errors.totalCopies}
                helperText={errors.totalCopies?.message}
            />

            <FormControl>
                <InputLabel id="category-label">Category</InputLabel>
                <Controller
                    name="category"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <Select {...field} labelId="category-label">
                            {bookCategories.map((category) => (
                                <MenuItem key={category.value} value={category.value}>
                                    {category.label}
                                </MenuItem>
                            ))}
                        </Select>
                    )}
                />
            </FormControl>
        </FormControl>
    );
};
