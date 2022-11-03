import { IconButton, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BasicTable from "../../components/table";
import { getPatientDataThunk } from "../../redux/features/patientData/patintActions";
import VisibilityIcon from "@mui/icons-material/Visibility";

const MyDoctors = () => {
  const dispatch = useDispatch();
  const patient = useSelector((state) => state.patientData.patientData);
  const testReportsColumns = [
    {
      field: "id",
      headerName: "#",
    },
    {
      field: "doctorName",
      headerName: "doctor",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "clinicName",
      headerName: "clinic",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
  ];

  useEffect(() => {
    dispatch(
      getPatientDataThunk({
        url: "patient/visitedDrs",
      })
    );
  }, []);

  return (
    <Stack alignItems={"start"} width={"100%"} spacing={4}>
      <Typography fontWeight={600} fontSize={"16px"} color={"#0A0A0A"}>
        My Doctors
      </Typography>
      <BasicTable
        columns={testReportsColumns}
        rows={patient.doctors ? patient.doctors : []}
      />
    </Stack>
  );
};

export default MyDoctors;
