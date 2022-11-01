import * as React from "react";
import TableContainer from "@mui/material/TableContainer";

import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid";
import { Pagination, Stack, styled } from "@mui/material";
import { getRows } from "./getRows";

export default function BasicTable({ rows, columns }) {
  const StyledTable = styled(DataGrid)(({ theme }) => ({
    border: "none",
    minHeight: "80vh",
    "& .paxton-table--row": {
      border: "none",
      marginTop: "25px",
      marginBottom: "25px",
      backgroundColor: "#fff",
    },
    "& .paxton-table--cell": {
      border: "none",
    },
    "& .MuiDataGrid-columnHeaders": {
      backgroundColor: "#fff",
    },
    "& .MuiDataGrid-footerContainer": {
      backgroundColor: "#fff",
    },
  }));
  return (
    <Stack
      width={"100%"}
      sx={{
        backgroundColor: "#f4f4f4",
        boxShadow: "none",
      }}
      component={Paper}
    >
      <StyledTable
        rows={getRows(rows)}
        component={Pagination}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[20]}
        disableSelectionOnClick
        getRowClassName={() => "paxton-table--row"}
      />
    </Stack>
  );
}
