import { IconButton, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BasicTable from "../../components/table";
import { getPatientDataThunk } from "../../redux/features/patientData/patintActions";
import VisibilityIcon from "@mui/icons-material/Visibility";

const PrescriptionList = () => {
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
      field: "invoiceDate",
      headerName: "date",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "invoiceStatus",
      headerName: "Status",
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
              row.invoiceStatus === "لم يتخذ قرار بعد"
                ? "#F59D18"
                : row.invoiceStatus === "صرفت"
                ? "#0CA437"
                : "#BF1C1C",
            textAlign: "center",
            padding: "10px",
          }}
        >
          {row.invoiceStatus}
        </Typography>
      ),
    },

    {
      field: "View",
      headerName: "View",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row }) => (
        <IconButton
          key={row.invoiceNo}
          //   onClick={() => handleClick(row.vitalSignId)}
        >
          <VisibilityIcon id={row.invoiceNo} />
        </IconButton>
      ),
    },
  ];

  useEffect(() => {
    dispatch(
      getPatientDataThunk({
        url: "rxList",
      })
    );
  }, []);

  return (
    <Stack alignItems={"start"} width={"100%"} spacing={4}>
      <Typography fontWeight={600} fontSize={"16px"} color={"#0A0A0A"}>
        Prescription List
      </Typography>
      <BasicTable
        columns={testReportsColumns}
        rows={patient.prescriptionList ? patient.prescriptionList : []}
      />
    </Stack>
  );
};

export default PrescriptionList;
