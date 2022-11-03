import { IconButton, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DownloadIcon from "@mui/icons-material/Download";
import { triggerBase64Download } from "common-base64-downloader-react";
import axios from "axios";
import { toast } from "react-hot-toast";
import BasicTable from "../../components/table";
import { getPatientDataThunk } from "../../redux/features/patientData/patintActions";

const Invoices = () => {
  const dispatch = useDispatch();
  const patient = useSelector((state) => state.patientData.patientData);
  const testReportsColumns = [
    {
      field: "id",
      headerName: "#",
    },
    {
      field: "invType",
      headerName: "invoice type",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "invNo",
      headerName: "invoice number",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "invDate",
      headerName: "date",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "totalAmt",
      headerName: "invoice amount",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row }) => `${row.totalAmt}`,
    },
    {
      field: "fileName",
      headerName: "download",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row }) => (
        <IconButton
          key={row.pdfName}
          //   onClick={() => transformTopdf(row.pdfName)}
        >
          <DownloadIcon id={row.pdfName} />
        </IconButton>
      ),
    },
  ];
  //   const transformTopdf = async (fileName) => {
  //     const { data } = await axios.get(
  //       `http://aiph.me:8000/api/patient/pdfFile?patientCode=0/372081&serviceType=lab-test&fileName=${fileName}`
  //     );
  //     if (data.pdfFile) {
  //       const base64 = `data:application/pdf;base64,${data.pdfFile}`;
  //       triggerBase64Download(base64, "invoice");
  //     } else {
  //       toast.error("your report not ready yet");
  //     }
  //   };

  useEffect(() => {
    dispatch(
      getPatientDataThunk({
        url: "invoice/ptPymt",
      })
    );
  }, []);

  return (
    <Stack alignItems={"start"} width={"100%"} spacing={4}>
      <Typography fontWeight={600} fontSize={"16px"} color={"#0A0A0A"}>
        Invoices
      </Typography>
      <BasicTable
        columns={testReportsColumns}
        rows={patient.invoices ? patient.invoices : []}
      />
    </Stack>
  );
};

export default Invoices;
