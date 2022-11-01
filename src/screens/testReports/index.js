import { IconButton, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BasicTable from "../../components/table";
import DownloadIcon from "@mui/icons-material/Download";
import { getPatientDataThunk } from "../../redux/features/patientData/patintActions";
import { useLocation } from "react-router-dom";
import { triggerBase64Download } from "common-base64-downloader-react";
import axios from "axios";
import { toast } from "react-hot-toast";

const LabReports = () => {
  const dispatch = useDispatch();
  const patient = useSelector((state) => state.patientData.patientData);
  const testReportsColumns = [
    {
      field: "id",
      headerName: "#",
    },
    {
      field: "serviceName",
      headerName: "Test Name",
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
    {
      field: "serviceDate",
      headerName: "date",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "fileName",
      headerName: "download",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row }) => (
        <IconButton
          key={row.fileName}
          onClick={() => transformTopdf(row.fileName)}
        >
          <DownloadIcon id={row.fileName} />
        </IconButton>
      ),
    },
  ];
  const transformTopdf = async (fileName) => {
    const { data } = await axios.get(
      `http://aiph.me:8000/api/patient/pdfFile?patientCode=0/372081&serviceType=lab-test&fileName=${fileName}`
    );
    if (data.pdfFile) {
      const base64 = `data:application/pdf;base64,${data.pdfFile}`;
      triggerBase64Download(base64, pathname);
    } else {
      toast.error("your report not ready yet");
    }
  };

  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(
      getPatientDataThunk({
        url: pathname === "/lab-reports" ? "labReports" : "radReports",
      })
    );
  }, [pathname]);

  return (
    <Stack alignItems={"start"} width={"100%"} spacing={4}>
      <Typography fontWeight={600} fontSize={"16px"} color={"#0A0A0A"}>
        Test reports&nbsp;{">"}&nbsp;
        {pathname === "/lab-reports" ? "lab reports" : "rad reports"}
      </Typography>
      <BasicTable
        columns={testReportsColumns}
        rows={patient.services ? patient.services : []}
      />
    </Stack>
  );
};

export default LabReports;
