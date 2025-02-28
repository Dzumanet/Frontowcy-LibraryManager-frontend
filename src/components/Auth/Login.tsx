import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../mutations/auth";
import { Link, useNavigate } from "@tanstack/react-router";
import { Box, Button, TextField, Typography } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginData, loginSchema } from "../../schema/auth.ts";



export const Login = () => {
    const { register, handleSubmit, setError, formState: { errors } } = useForm<LoginData>({
        resolver: yupResolver(loginSchema)
    });
    const { mutateAsync: loginUser } = useLoginMutation();
    const navigate = useNavigate();

    const onSubmit = async (data: LoginData) => {
        try {
            await loginUser(data, {
                onSuccess: () => {
                    navigate({ to: '/dashboard' });
                }
            });
        } catch (error: unknown ) {
            setError("root", { message: (error as Error).message });
        }
    };


    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                width: '60%',
            }}
        >
            <TextField
                label="Library Card Number"
                {...register('libraryCardNumber')}
                error={!!errors.libraryCardNumber}
                helperText={errors.libraryCardNumber?.message}
                required
            />
            <TextField
                label="Password" type="password"
                {...register('pwd')}
                required
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
            >
                Sign in
            </Button>
            <Typography align='center'>Don't have an account? <Link to="/auth/register"> Sing Up</Link></Typography>
            {errors.root && (
                <Typography color="error" align="center">
                    {errors.root.message}
                </Typography>
            )}
        </Box>

    );
};