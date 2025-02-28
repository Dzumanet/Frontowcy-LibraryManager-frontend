import { useForm } from "react-hook-form";
import { useRegisterUserMutation } from "../../mutations/auth";
import { Box, Button, CircularProgress, TextField, Typography } from "@mui/material";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { RegisterSuccessMessage } from "./RegisterSuccessMessage.tsx";
import { RegisterData, registerSchema } from "../../schema/auth.ts";
import { yupResolver } from "@hookform/resolvers/yup";

export const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<RegisterData>({
        resolver: yupResolver(registerSchema)
    });
    const { mutate: registerUser, isPending } = useRegisterUserMutation();
    const [successMessage, setSuccessMessage] = useState<{ message: string, libraryCardNumber: string } | null>(null);

    const onSubmit = async (data: RegisterData) => {
        registerUser(data, {
            onSuccess: async (data) => {
                reset();
                setSuccessMessage({
                    message: data.message,
                    libraryCardNumber: data.libraryCardNumber
                });
            }
        });
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
                label="First Name"
                {...register('firstName')}
                error={!!errors.firstName}
                helperText={errors.firstName?.message}

                required />
            <TextField
                label="Last Name"
                {...register('lastName')}
                error={!!errors.lastName}
                helperText={errors.lastName?.message}
                required />
            <TextField
                label="E-mail"
                type="email"
                {...register('email')}
                error={!!errors.email}
                helperText={errors.email?.message}
                required />
            <TextField
                label="Password"
                type="password"
                {...register('pwd')}
                error={!!errors.pwd}
                helperText={errors.pwd?.message}
                required />

            <Button variant="outlined" type="submit" disabled={isPending}>
                {isPending ? <CircularProgress size={24} /> : "Sing up"}
            </Button>
            <Typography align="center">Do you have an account? <Link to="/auth/login">Log in</Link></Typography>

            {successMessage ? (
                <RegisterSuccessMessage
                    message={successMessage.message}
                    libraryCardNumber={successMessage.libraryCardNumber}
                />
            ) : null}
        </Box>


    );
};