import { IconButton, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ScrollDialog from "../../components/popUp";
import BasicTable from "../../components/table";
import { getPatientDataThunk } from "../../redux/features/patientData/patintActions";
import VisibilityIcon from "@mui/icons-material/Visibility";

const VitalSigns = () => {
  const dispatch = useDispatch();
  const patient = useSelector((state) => state.patientData.patientData);
  const [open, setOpen] = useState(false);
  const [vitalDetails, setvitalDetails] = useState([]);

  const VitalCloumns = [
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
      field: "notes",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "vitalSignDate",
      headerName: "Vital Sign Date",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "show",
      headerName: "show",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row }) => (
        <IconButton
          key={row.vitalSignId}
          onClick={() => handleClick(row.vitalSignId)}
        >
          <VisibilityIcon
            sx={{
              fill: "#3CC0B9",
            }}
            id={row.vitalSignId}
          />
        </IconButton>
      ),
    },
  ];
  const handleClick = async (id) => {
    const { data } = await axios.get(
      `http://aiph.me:8000/api/patient/PtVSDtl?vitalSignId=${id}&pageNo=1&offset=1&rows=5&lang=AR`
    );

    setOpen(true);
    setvitalDetails(data.vitalSigns);
  };

  useEffect(() => {
    dispatch(
      getPatientDataThunk({
        url: "patient/PtVS",
      })
    );
  }, []);

  return (
    <Stack alignItems={"start"} width={"100%"} spacing={4}>
      <Typography fontWeight={600} fontSize={"16px"} color={"#0A0A0A"}>
        Vital sign
      </Typography>
      <ScrollDialog vitalDetails={vitalDetails} open={open} setOpen={setOpen} />
      <BasicTable
        columns={VitalCloumns}
        rows={patient.vitalSigns ? patient.vitalSigns : []}
      />
    </Stack>
  );
};

export default VitalSigns;
