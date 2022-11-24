import { IconButton, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BasicTable from "../../components/table";
import { getPatientDataThunk } from "../../redux/features/patientData/patintActions";
import VisibilityIcon from "@mui/icons-material/Visibility";

const SickLeave = () => {
  const dispatch = useDispatch();
  const patient = useSelector((state) => state.patientData.patientData);
  const testReportsColumns = [
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
      field: "repDate",
      headerName: "date",
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
        <IconButton
          key={row.leaveId}
          //   onClick={() => handleClick(row.vitalSignId)}
        >
          <VisibilityIcon id={row.leaveId} />
        </IconButton>
      ),
    },
  ];

  useEffect(() => {
    dispatch(
      getPatientDataThunk({
        url: "patient/sickLeaves",
      })
    );
  }, []);

  return (
    <Stack alignItems={"start"} width={"100%"} spacing={4}>
      <Typography fontWeight={600} fontSize={"16px"} color={"#0A0A0A"}>
        Sick Leaves
      </Typography>
      <BasicTable
        columns={testReportsColumns}
        rows={patient.leaves ? patient.leaves : []}
      />
    </Stack>
  );
};

export default SickLeave;
