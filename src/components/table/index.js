import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid";
import { Stack, styled } from "@mui/material";
import { getRows } from "./getRows";
import * as React from "react";
import { useDemoData } from "@mui/x-data-grid-generator";

export default function BasicTable({ rows, columns, invoice }) {
  const [pageSize, setPageSize] = React.useState(6);

  const StyledTable = styled(DataGrid)(({ theme }) => ({
    border: "none",
    minHeight: invoice ? "40vh" : "75vh",
    color: "#0A0A0A",
    fontWeight: 500,
    fontSize: "0.9rem",
    "& .paxton-table--row": {
      border: "none",
      marginTop: "15px",
      marginBottom: "15px",
      backgroundColor: "#fff",
    },
    "& .paxton-table--cell": {
      border: "none",
    },
    "& .MuiDataGrid-columnHeaders": {
      backgroundColor: "#fff",
    },
    "& .MuiDataGrid-footerContainer": {
      display: invoice ? "none" : "",
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
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[6, 12, 18, 100]}
        pagination
        disableSelectionOnClick
        getRowClassName={() => "paxton-table--row"}
      />
    </Stack>
  );
}
