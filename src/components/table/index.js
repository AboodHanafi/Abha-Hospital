import * as React from "react";
import TableContainer from "@mui/material/TableContainer";

import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid";
import { IconButton, Pagination, Stack, styled } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { getRows } from "./getRows";
import axios from "axios";
import ScrollDialog from "../popUp";
import { useState } from "react";

export default function BasicTable({ rows }) {
  const [open, setOpen] = useState(false);
  const [vitalDetails, setvitalDetails] = useState([]);
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
  const handleClick = async (id) => {
    const { data } = await axios.get(
      `http://aiph.me:8000/api/patient/PtVSDtl?vitalSignId=${id}&pageNo=1&offset=1&rows=5&lang=AR`
    );

    setOpen(true);
    setvitalDetails(data.vitalSigns);
  };

  return (
    <Stack
      width={"100%"}
      sx={{
        backgroundColor: "#f4f4f4",
      }}
      component={Paper}
    >
      <ScrollDialog vitalDetails={vitalDetails} open={open} setOpen={setOpen} />
      <StyledTable
        // rowHeight={100}
        rows={getRows(rows)}
        component={Pagination}
        columns={[
          {
            field: "id",
            headerName: "#",
          },
          {
            field: "doctor",
            flex: 1,
            align: "center",
            headerAlign: "center",
            renderCell: ({ value }) => value.doctorName,
          },
          {
            field: "clinic",
            flex: 1,
            align: "center",
            headerAlign: "center",
            renderCell: ({ value }) => value.clinicName,
          },
          {
            field: "notes",
            flex: 1,
            align: "center",
            headerAlign: "center",
          },
          {
            field: "vitalSignDate",
            headerName: "Vital Sign Date",
            flex: 1,
            align: "center",
            headerAlign: "center",
          },
          {
            field: "show",
            headerName: "show",
            flex: 1,
            align: "center",
            headerAlign: "center",
            renderCell: ({ row }) => (
              <IconButton
                key={row.vitalSignId}
                onClick={() => handleClick(row.vitalSignId)}
              >
                <VisibilityIcon id={row.vitalSignId} />
              </IconButton>
            ),
          },
        ]}
        pageSize={5}
        rowsPerPageOptions={[20]}
        disableSelectionOnClick
        getRowClassName={() => "paxton-table--row"}
      />
    </Stack>
  );
}
