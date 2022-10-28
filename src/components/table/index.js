import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function BasicTable({ rows }) {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{
          minWidth: 650,
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell align="right">العيادة</TableCell>
            <TableCell align="right">الدكتور</TableCell>
            <TableCell align="right">التاريخ</TableCell>
            <TableCell align="right">الوقت</TableCell>
            <TableCell align="right">ملاحظات</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right" component="th" scope="row">
                {row.clinic}
              </TableCell>
              <TableCell align="right">{row.doctor}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.notes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
