import { IconButton, Link, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BasicTable from "../../components/table";
import { getPatientDataThunk } from "../../redux/features/patientData/patintActions";
import VisibilityIcon from "@mui/icons-material/Visibility";
import axios from "axios";
import { useParams } from "react-router-dom";

const InsuranceApprovmentDetails = () => {
  const dispatch = useDispatch();
  const patient = useSelector((state) => state.patientData.patientData);
  const { id } = useParams();
  console.log(id);
  const testReportsColumns = [
    {
      field: "id",
      headerName: "#",
      maxWidth: 1,
    },
    {
      field: "serviceName",
      headerName: "Name",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "serviceType",
      headerName: "Type",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "serviceQty",
      headerName: "quantity",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "servicePrice",
      headerName: "Price",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "approvedAmount",
      headerName: "Approved Amount",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "approvalDate",
      headerName: "Date",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "approvalTime",
      headerName: "Time",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "approvalStatus",
      headerName: "Status",
      flex: 1,
      align: "center",
      headerAlign: "center",
      minWidth: 150,
      renderCell: ({ row }) => (
        <Typography
          fontWeight={500}
          fontSize={14}
          sx={{
            color: "#F4F4F4",
            borderRadius: "10px",
            background:
              row.approvalStatus === "لم يتخذ قرار بعد"
                ? "#F59D18"
                : row.approvalStatus === "موافق عليه"
                ? "#0CA437"
                : "#BF1C1C",
            textAlign: "center",
            padding: "10px",
          }}
        >
          {row.approvalStatus}
        </Typography>
      ),
    },
    {
      field: "validityPeriod",
      headerName: "Validity Period",
      flex: 1,
      align: "center",
      headerAlign: "center",
      minWidth: 200,
    },

    // {
    //   field: "reqStatus",
    //   headerName: "Status",
    //   flex: 1,
    //   align: "center",
    //   headerAlign: "center",
    //   renderCell: ({ row }) => (
    //     <Typography
    //       fontWeight={500}
    //       fontSize={14}
    //       sx={{
    //         color: "#F4F4F4",
    //         borderRadius: "10px",
    //         background:
    //           row.reqStatus === "لم يتخذ قرار بعد"
    //             ? "#F59D18"
    //             : row.reqStatus === "موافق عليه"
    //             ? "#0CA437"
    //             : "#BF1C1C",
    //         textAlign: "center",
    //         padding: "10px",
    //       }}
    //     >
    //       {row.reqStatus}
    //     </Typography>
    //   ),
    // },
    // {
    //   field: "View",
    //   headerName: "View",
    //   flex: 1,
    //   align: "center",
    //   headerAlign: "center",
    //   renderCell: ({ row }) => (
    //     <IconButton
    //       key={row.reqId}
    //       onClick={() => handleClick(row.vitalSignId)}
    //     >
    //       <VisibilityIcon id={row.reqId} />
    //     </IconButton>
    //   ),
    // },
  ];

  useEffect(() => {
    dispatch(
      getPatientDataThunk({
        url: `patient/srvApvlDtl?reqId=${id}&pageNo=1&offset=1&rows=100`,
      })
    );
  }, []);

  return (
    <Stack alignItems={"start"} width={"100%"} spacing={4}>
      <Typography fontWeight={600} fontSize={"16px"} color={"#0A0A0A"}>
        <Link underline="none" href={"/Insurance-approvment"}>
          Insurance approvement
        </Link>{" "}
        &gt; {id}
      </Typography>
      <BasicTable
        columns={testReportsColumns}
        rows={patient.approvalItems ? patient.approvalItems : []}
      />
    </Stack>
  );
};

export default InsuranceApprovmentDetails;
