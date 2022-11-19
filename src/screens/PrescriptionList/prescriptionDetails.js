import { Link, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BasicTable from "../../components/table";
import { getPatientDataThunk } from "../../redux/features/patientData/patintActions";
import { useParams } from "react-router-dom";

const PrescriptionDetails = () => {
  const dispatch = useDispatch();
  const patient = useSelector((state) => state.patientData.patientData);
  const { id } = useParams();

  const testReportsColumns = [
    {
      field: "id",
      headerName: "#",
      maxWidth: 1,
    },
    {
      field: "drugName",
      headerName: "Drug Name",
      flex: 1,
      align: "center",
      headerAlign: "center",
      minWidth: 300,
    },
    {
      field: "dose",
      headerName: "dose",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "durationOfUse",
      headerName: "duration",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "frequency",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "route",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "qty",
      headerName: "quantity",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "remarks",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "price",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
  ];

  useEffect(() => {
    dispatch(
      getPatientDataThunk({
        url: `patient/rxItems?invoiceNo=${id}&invoiceDate=${localStorage.getItem(
          "date"
        )}&invoiceType=${localStorage.getItem(
          "type"
        )}&pageNo=1&offset=1&rows=100`,
      })
    );
  }, []);

  return (
    <Stack spacing={2}>
      <Typography fontWeight={600} fontSize={"16px"} color={"#0A0A0A"}>
        <Link underline="none" href={"/prescription-list"}>
          Prescription
        </Link>
      </Typography>
      <Stack spacing={4} padding={3} bgcolor={"#fff"} width={"100%"}>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack spacing={2}>
            <Typography fontWeight={600} fontSize={"16px"} color={"#0A0A0A"}>
              patient name
              <Typography fontWeight={400} fontSize={"16px"} color={"#0A0A0A"}>
                jihad mahfouz
              </Typography>
            </Typography>
            <Typography fontWeight={600} fontSize={"16px"} color={"#0A0A0A"}>
              ID Number
              <Typography fontWeight={400} fontSize={"16px"} color={"#0A0A0A"}>
                123456789
              </Typography>
            </Typography>
            <Typography fontWeight={600} fontSize={"16px"} color={"#0A0A0A"}>
              Email Address
              <Typography fontWeight={400} fontSize={"16px"} color={"#0A0A0A"}>
                Jeha.mahfouz1990@gmail.com
              </Typography>
            </Typography>
          </Stack>
          <Stack>
            <Typography fontWeight={600} fontSize={"16px"} color={"#0A0A0A"}>
              Invoice Number
              <Typography fontWeight={400} fontSize={"16px"} color={"#0A0A0A"}>
                555555555
              </Typography>
            </Typography>
          </Stack>
        </Stack>

        <BasicTable
          invoice
          columns={testReportsColumns}
          rows={patient.prescriptionItems ? patient.prescriptionItems : []}
        />
      </Stack>
    </Stack>
  );
};

export default PrescriptionDetails;
