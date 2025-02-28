import { useLoanStore } from "../../store/useLoanStore.ts";
import { AdminLoanResponse } from "../../types/loan.ts";
import { useEffect } from "react";
import { StatusSelect } from "../../components/Select/StatusSelect.tsx";
import { Card, CardContent, CardActions, Typography, Button, Box } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { loansOptions } from "../../queries/loans";
import { useSuspenseQuery } from "@tanstack/react-query";
import { LoanPaginationNav } from "../../components/Nav/LoanPaginationNav.tsx";
import { useForcedReturnBookMutation } from "../../mutations/loans";
import EventIcon from "@mui/icons-material/Event";
import PersonIcon from "@mui/icons-material/Person";
import BookIcon from "@mui/icons-material/Book";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import dayjs from "dayjs";
import { CircularProgress } from "../../components/UI/CircularProgress.tsx";


export const LoansList = () => {
    const {
        page,
        pageSize,
        loanStatus,
        setPaginationMeta
    } = useLoanStore();
    const { data: loanData, isLoading, error } = useSuspenseQuery(loansOptions({
        page,
        pageSize,
        loanStatus: loanStatus
    }));

    const { mutate: forcedReturn } = useForcedReturnBookMutation();


    useEffect(() => {
        if (loanData?.meta) {
            setPaginationMeta({
                totalPages: loanData.meta.totalPages,
                total: loanData.meta.total,
                hasNextPage: loanData.meta.hasNextPage,
                hasPrevPage: loanData.meta.hasPrevPage,
            });
        }
    }, [loanData, setPaginationMeta]);

    const handleForceReturn = async (loan: AdminLoanResponse) => {
        forcedReturn({ loanId: loan.id, bookId: loan.book.id });
    };

    if (isLoading) return <CircularProgress />;
    if (error) return <p>Error while fetching data.</p>;

    return (

        <Box sx={{ maxWidth: 1200, mx: "auto", my: 4, p: 2 }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
                Loan List
            </Typography>
            <Box marginBottom={3}>
                <StatusSelect />
            </Box>
            <Grid container spacing={3}>
                {loanData?.data.map((loan) => (
                    <Grid key={loan.id} component="div">
                        <Card sx={{ boxShadow: 3, borderRadius: 3, p: 2, height: "100%" }}>
                            <CardContent>
                                <Typography variant="h6" fontWeight="bold" gutterBottom display="flex"
                                            alignItems="center">
                                    <BookIcon sx={{ mr: 1 }} />
                                    {loan.book.title}
                                </Typography>
                                <Typography component="span"
                                            fontWeight="normal"> Author: {loan.book.author}</Typography>
                                <Typography variant="body2" color="text.secondary" display="flex" alignItems="center">
                                    <PersonIcon sx={{ mr: 1 }} /> Borrower: {loan.user.firstName}
                                </Typography>

                                <Typography variant="body2" color="text.secondary" display="flex" alignItems="center">
                                    <CardMembershipIcon sx={{ mr: 1 }} /> Card ID: {loan.user.libraryCardNumber}
                                </Typography>

                                <Typography variant="body2" color="text.secondary" display="flex" alignItems="center">
                                    <EventIcon sx={{ mr: 1 }} /> Borrowed
                                    on: {dayjs(loan.loanDate).format("DD.MM.YYYY")}
                                </Typography>

                                <Typography variant="body2" color="text.secondary" display="flex" alignItems="center">
                                    <LibraryBooksIcon sx={{ mr: 1 }} /> Return
                                    deadline: {dayjs(loan.dueDate).format("DD.MM.YYYY")}
                                </Typography>

                                <Typography variant="body2"
                                            color={loan.loanStatus === "borrowed" || loan.loanStatus === "overdue" ? "error" : "success"}
                                            fontWeight="bold" display="flex" alignItems="center">
                                    Status: {loan.loanStatus}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: "flex-end" }}>
                                <Button
                                    onClick={() => handleForceReturn(loan)}
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    disabled={!(loan.loanStatus === "borrowed" || loan.loanStatus === "overdue")}>
                                    Force return
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <LoanPaginationNav />
        </Box>
    );
};