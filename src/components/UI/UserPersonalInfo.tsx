import { Card, Typography, Divider, Stack } from "@mui/material";
import { Person, Email, Badge, AdminPanelSettings, CalendarToday, Login } from "@mui/icons-material";
import dayjs from "dayjs";
import { User } from "../../types/user.tsx";

type UserPersonalInfoProps = {
    userData: User;
}

export const UserPersonalInfo = ({ userData }: UserPersonalInfoProps) => {
    const infoFields = [
        { icon: <Person />, label: "First Name", value: userData.firstName },
        { icon: <Person />, label: "Last Name", value: userData.lastName },
        { icon: <Email />, label: "Email", value: userData.email },
        { icon: <Badge />, label: "Library Card Number", value: userData.libraryCardNumber },
        { icon: <AdminPanelSettings />, label: "Role", value: userData.role },
        { icon: <CalendarToday />, label: "Account Created", value: dayjs(userData.createdAt).format('DD/MM/YYYY') },
        { icon: <Login />, label: "Last Login", value: dayjs(userData.lastLogin).format('DD/MM/YYYY') }
    ];

    return (
        <Card sx={{ padding: 3, marginBottom: 3, borderRadius: 2, boxShadow: 2 }}>
            <Typography variant="h6" gutterBottom>Personal Information</Typography>
            <Divider sx={{ my: 2 }} />
            <Stack spacing={2}>
                {infoFields.map(({ icon, label, value }, index) => (
                    <Stack key={index} direction="row" alignItems="center" spacing={2}>
                        {icon}
                        <Typography><strong>{label}:</strong> {value}</Typography>
                    </Stack>
                ))}
            </Stack>
        </Card>
    );
};