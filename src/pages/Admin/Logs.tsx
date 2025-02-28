import { useSuspenseQuery } from "@tanstack/react-query";
import { logsOptions } from "../../queries/logs";
import { DataGrid, GridColDef, GridPaginationModel } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { useLogStore } from "../../store/useLogStore.ts";
import { Box, FormControl, InputLabel, Select, SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import { logActionEnum, logStatusEnum } from "../../utils/logEnum.ts";
import MenuItem from "@mui/material/MenuItem";


const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "timestamp", headerName: "Timestamp", width: 200 },
    { field: "userId", headerName: "User ID", width: 200 },
    { field: "bookId", headerName: "Book ID", width: 200 },
    { field: "action", headerName: "Action", width: 100 },
    { field: "status", headerName: "Status", width: 100 },
];

export const Logs = () => {
    const {
        page,
        pageSize,
        logAction,
        logStatus,
        hasNextPage,
        hasPrevPage,
        totalPages,
        setFilters,
        setPageSize,
        setPaginationMeta,
        nextPage,
        prevPage,
    } = useLogStore();

    const [openStatus, setOpenStatus] = useState<boolean>(false);
    const [openAction, setOpenAction] = useState<boolean>(false);

    const { data } = useSuspenseQuery(
        logsOptions({
            page,
            pageSize,
            action: logAction,
            status: logStatus,
        })
    );

    useEffect(() => {
        if (data?.meta) {
            setPaginationMeta({
                totalPages: data.meta.totalPages,
                hasNextPage: data.meta.hasNextPage,
                hasPrevPage: data.meta.hasPrevPage,
            });
        }
    }, [data, setPaginationMeta]);

    const rows = data?.data?.map((log) => ({
        id: log.id,
        timestamp: new Date(log.timestamp).toLocaleString(),
        userId: log.userId,
        bookId: log.bookId,
        action: log.action,
        status: log.status,
    })) ?? [];


    const handleStatusChange = (e: SelectChangeEvent) => {
        const selectedStatus = e.target.value === "all" ? undefined : e.target.value;
        setFilters({ logStatus: selectedStatus });
    };

    const handleActionChange = (e: SelectChangeEvent) => {
        const selectedAction = e.target.value === "all" ? undefined : e.target.value;
        setFilters({ logAction: selectedAction });
    };


    const handlePageChange = (model: GridPaginationModel) => {
        if (model.page !== page) {
            if (model.page > page && hasNextPage) {
                nextPage();
            }
            if (model.page < page && hasPrevPage) {
                prevPage();
            }
        }
        if (model.pageSize !== pageSize) {
            setPageSize(model.pageSize);
        }
    };


    return (
        <>
            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                <FormControl sx={{ minWidth: 200 }}>
                    <InputLabel>Status</InputLabel>
                    <Select
                        open={openStatus}
                        value={logStatus || "all"}
                        onChange={handleStatusChange}
                        onOpen={() => setOpenStatus(true)}
                        onClose={() => setOpenStatus(false)}
                        size="small"
                        MenuProps={{ disableScrollLock: true }}
                    >
                        <MenuItem value="all">All</MenuItem>
                        {logStatusEnum.map(({ label, value }) => (
                            <MenuItem key={value} value={value}>
                                {label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl sx={{ minWidth: 200 }}>
                    <InputLabel>Action</InputLabel>
                    <Select
                        open={openAction}
                        value={logAction || "all"}
                        onChange={handleActionChange}
                        onOpen={() => setOpenAction(true)}
                        onClose={() => setOpenAction(false)}
                        size="small"
                        MenuProps={{ disableScrollLock: true }}
                    >
                        <MenuItem value="all">All</MenuItem>
                        {logActionEnum.map(({ label, value }) => (
                            <MenuItem key={value} value={value}>
                                {label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>

            <Paper>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSizeOptions={[10, 25, 50]}
                    paginationModel={{ page, pageSize }}
                    paginationMode="server"
                    rowCount={totalPages * pageSize}
                    onPaginationModelChange={handlePageChange}
                />
            </Paper>
        </>
    );
};
