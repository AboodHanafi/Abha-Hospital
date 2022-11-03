import { Button, IconButton, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BasicTable from "../../components/table";
import { getPatientDataThunk } from "../../redux/features/patientData/patintActions";

import { toast } from "react-hot-toast";

const MyFamily = () => {
  const dispatch = useDispatch();
  const patient = useSelector((state) => state.patientData.patientData);
  const testReportsColumns = [
    {
      field: "id",
      headerName: "#",
    },
    {
      field: "patientName",
      headerName: "Name",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "medicFileNumber",
      headerName: "medical file number",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },

    {
      field: "View",
      headerName: "View",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row }) => (
        <Button
          color="primary"
          key={row.medicFileNumber}
          onClick={() => handleClick(row.medicFileNumber, row.patientName)}
        >
          change to
        </Button>
      ),
    },
  ];

  const handleClick = (patintCode, patientName) => {
    localStorage.removeItem("patientCode");
    localStorage.setItem("patientCode", patintCode);
    toast.success(`change success to ${patientName}`);
  };

  useEffect(() => {
    dispatch(
      getPatientDataThunk({
        url: "patient/familyMembers",
      })
    );
  }, []);

  return (
    <Stack alignItems={"start"} width={"100%"} spacing={4}>
      <Typography fontWeight={600} fontSize={"16px"} color={"#0A0A0A"}>
        Family Members
      </Typography>
      <BasicTable
        columns={testReportsColumns}
        rows={patient.familyMembers ? patient.familyMembers : []}
      />
    </Stack>
  );
};

export default MyFamily;
