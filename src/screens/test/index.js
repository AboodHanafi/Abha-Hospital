import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { makeStyles, styled, useTheme } from "@mui/material";

const TestComp = () => {
  const StyledTable = styled(DataGrid)(({ theme }) => ({
    border: "none",
    "& .paxton-table--row": {
      border: "none",
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      backgroundColor: theme.palette.primary.main,
    },
    "& .paxton-table--cell": {
      border: "none",
    },
  }));

  return (
    <StyledTable
      rows={[
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
        { id: 10 },
        { id: 11 },
      ]}
      columns={[{ field: "id" }]}
      pageSize={20}
      rowsPerPageOptions={[20]}
      disableSelectionOnClick
      autoHeight
      getRowClassName={() => "paxton-table--row"}
    />
  );
};

export default TestComp;
