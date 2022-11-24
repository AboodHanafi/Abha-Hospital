import { Button, Divider, Link, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BasicTable from "../../components/table";
import { getPatientDataThunk } from "../../redux/features/patientData/patintActions";
import { useParams } from "react-router-dom";

const PrescriptionDetails = () => {
  const dispatch = useDispatch();
  const patient = useSelector((state) => state.patientData.patientData);
  const { id } = useParams();
  const userData = JSON.parse(sessionStorage.getItem("userData"));

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
      minWidth: 90,
    },
    {
      field: "durationOfUse",
      headerName: "duration",
      flex: 1,
      align: "center",
      headerAlign: "center",
      minWidth: 90,
    },
    {
      field: "frequency",
      flex: 1,
      align: "center",
      headerAlign: "center",
      minWidth: 90,
    },
    {
      field: "route",
      flex: 1,
      align: "center",
      headerAlign: "center",
      minWidth: 90,
    },
    {
      field: "qty",
      headerName: "quantity",
      flex: 1,
      align: "center",
      headerAlign: "center",
      minWidth: 90,
    },
    {
      field: "remarks",
      flex: 1,
      align: "center",
      headerAlign: "center",
      minWidth: 90,
    },
    {
      field: "price",
      flex: 1,
      align: "center",
      headerAlign: "center",
      minWidth: 90,
    },
  ];

  useEffect(() => {
    dispatch(
      getPatientDataThunk({
        url: `patient/rxItems?invoiceNo=${id}&invoiceDate=${localStorage.getItem(
          "date"
        )}&invoiceType=${localStorage.getItem("type")}`,
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
      <Stack id="invoice" padding={3} bgcolor={"#fff"} width="100%">
        <Stack
          marginBottom={5}
          direction={"row"}
          justifyContent={"space-between"}
        >
          <Stack spacing={2}>
            <Typography fontWeight={600} fontSize={"16px"} color={"#0A0A0A"}>
              patient name
              <Typography fontWeight={400} fontSize={"16px"} color={"#0A0A0A"}>
                {userData.first_name}&nbsp;
                {userData.last_name}
              </Typography>
            </Typography>
            <Typography fontWeight={600} fontSize={"16px"} color={"#0A0A0A"}>
              ID Number
              <Typography fontWeight={400} fontSize={"16px"} color={"#0A0A0A"}>
                {userData.identity_number}
              </Typography>
            </Typography>
            <Typography fontWeight={600} fontSize={"16px"} color={"#0A0A0A"}>
              Email Address
              <Typography fontWeight={400} fontSize={"16px"} color={"#0A0A0A"}>
                {userData.email}
              </Typography>
            </Typography>
          </Stack>
          <Stack>
            <Typography fontWeight={600} fontSize={"16px"} color={"#0A0A0A"}>
              Invoice Number
              <Typography fontWeight={400} fontSize={"16px"} color={"#0A0A0A"}>
                {id}
              </Typography>
            </Typography>
          </Stack>
        </Stack>

        <BasicTable
          invoice
          columns={testReportsColumns}
          rows={patient.prescriptionItems ? patient.prescriptionItems : []}
        />
        <Stack
          spacing={3}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Button
            sx={{
              backgroundColor: "#0E4C8F",
              color: "#fff",
              width: "150px",
              height: "50px",
              ":hover": {
                backgroundColor: "#0E4C8F",
              },
            }}
          >
            download
          </Button>
          <Stack direction={"row"}>
            <Stack paddingRight={15} spacing={3}>
              <Typography color={"#0E4C8F"} fontSize={"13"} fontWeight={600}>
                TAX
              </Typography>

              <Typography color={"#0E4C8F"} fontSize={"13"} fontWeight={600}>
                Total
              </Typography>
            </Stack>
            <Stack paddingRight={7} spacing={3}>
              <Typography color={"#6CA3DE"} fontSize={"13"} fontWeight={400}>
                {patient.tax}
              </Typography>
              <Typography color={"#6CA3DE"} fontSize={"13"} fontWeight={400}>
                {patient.total}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PrescriptionDetails;
