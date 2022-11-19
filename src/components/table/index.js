import Paper from "@mui/material/Paper";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { Pagination, Stack, styled } from "@mui/material";
import { getRows } from "./getRows";

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}
export default function BasicTable({ rows, columns, invoice }) {
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
        components={{
          Toolbar: invoice ? CustomToolbar : null,
        }}
        columns={columns}
        pageSize={6}
        disableSelectionOnClick
        getRowClassName={() => "paxton-table--row"}
      />
    </Stack>
  );
}
