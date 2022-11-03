import { Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import BasicTable from "../../components/table";
import { getPatientDataThunk } from "../../redux/features/patientData/patintActions";

const Appointment = () => {
  const dispatch = useDispatch();
  const patient = useSelector((state) => state.patientData.patientData);
  const { pathname } = useLocation();
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
      field: "resDate",
      headerName: "date",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "time",
      headerName: "time",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "resStatus",
      headerName: "Status",
      hide: pathname === "/previous-appointments" ? true : false,
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row }) => (
        <Typography
          fontWeight={500}
          fontSize={14}
          sx={{
            color: "#F4F4F4",
            borderRadius: "10px",
            background:
              row.resStatus === "غير مؤكد"
                ? "#F59D18"
                : row.resStatus === "مؤكد"
                ? "#0CA437"
                : "#BF1C1C",
            textAlign: "center",
            padding: "10px",
          }}
        >
          {row.resStatus}
        </Typography>
      ),
    },
    {
      field: "notes",
      headerName: "notes",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
  ];

  useEffect(() => {
    dispatch(
      getPatientDataThunk({
        url:
          pathname === "/next-appointments"
            ? "patient/nextAppt"
            : "patient/prevAppt",
      })
    );
  }, [pathname]);

  return (
    <Stack alignItems={"start"} width={"100%"} spacing={4}>
      <Typography fontWeight={600} fontSize={"16px"} color={"#0A0A0A"}>
        {pathname === "/next-appointments"
          ? "Next Appointment"
          : "Previous Appointment"}
      </Typography>
      <BasicTable
        columns={testReportsColumns}
        rows={
          pathname === "/next-appointments"
            ? patient.myNextAppointments
              ? patient.myNextAppointments
              : []
            : patient.myPrevAppointments
            ? patient.myPrevAppointments
            : []
        }
      />
    </Stack>
  );
};

export default Appointment;
