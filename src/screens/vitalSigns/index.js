import { Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BasicTable from "../../components/table";
import { vitalSignsThunk } from "../../redux/features/patientData/patintActions";

const VitalSigns = () => {
  const dispatch = useDispatch();
  const patient = useSelector((state) => state.vitalSigns.patientData);

  useEffect(() => {
    dispatch(vitalSignsThunk());
  }, []);

  return (
    <Stack alignItems={"start"} width={"100%"} spacing={4}>
      <Typography fontWeight={600} fontSize={"16px"} color={"#0A0A0A"}>
        Vital sign
      </Typography>
      <BasicTable rows={patient} />;
    </Stack>
  );
};

export default VitalSigns;
