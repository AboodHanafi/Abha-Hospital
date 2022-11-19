import { IconButton, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BasicTable from "../../components/table";
import { getPatientDataThunk } from "../../redux/features/patientData/patintActions";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";

const InsuranceApprovment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const patient = useSelector((state) => state.patientData.patientData);
  const testReportsColumns = [
    {
      field: "id",
      headerName: "#",
    },
    {
      field: "reqId",
      headerName: "Request Number",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "reqDate",
      headerName: "Request Date",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "clinic",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ value }) => value.clinicName,
    },
    {
      field: "doctor",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ value }) => value.doctorName,
    },
    {
      field: "reqStatus",
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
              row.reqStatus === "لم يتخذ قرار بعد"
                ? "#F59D18"
                : row.reqStatus === "موافق عليه"
                ? "#0CA437"
                : "#BF1C1C",
            textAlign: "center",
            padding: "10px",
          }}
        >
          {row.reqStatus}
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
        <IconButton key={row.reqId} onClick={() => handleClick(row.reqId)}>
          <VisibilityIcon id={row.reqId} />
        </IconButton>
      ),
    },
  ];

  const handleClick = async (id) => {
    // const { data } = await axios.get(
    //   `http://aiph.me:8000/api/patient/srvApvlDtl?reqId=${id}&pageNo=1&offset=1&rows=100&lang=AR`
    // );
    navigate(`/Insurance-approvment/${id}`);
  };

  useEffect(() => {
    dispatch(
      getPatientDataThunk({
        url: "patient/srvApvl",
      })
    );
  }, []);

  return (
    <Stack alignItems={"start"} width={"100%"} spacing={4}>
      <Typography fontWeight={600} fontSize={"16px"} color={"#0A0A0A"}>
        Insurance approvement
      </Typography>
      <BasicTable
        columns={testReportsColumns}
        rows={patient.approvals ? patient.approvals : []}
      />
    </Stack>
  );
};

export default InsuranceApprovment;
