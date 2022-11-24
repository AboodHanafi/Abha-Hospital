import { Box, IconButton, Skeleton, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPatientDataThunk } from "../../redux/features/patientData/patintActions";
import DoctorCard from "./myDoctorsCard";

const LoadingSkeleton = () => (
  <Box
    sx={{
      height: "max-content",
      width: "30%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <Skeleton
      variant="circular"
      sx={{ width: 80, height: 80, mx: 1, color: "red" }}
    />
    <Skeleton variant="rectangular" sx={{ width: "80%", my: 1, mx: 1 }} />
    <Skeleton variant="rectangular" sx={{ width: "80%", my: 1, mx: 1 }} />
    <Stack width={"80%"} direction={"row"}>
      <Skeleton
        variant="rounded"
        sx={{ width: "50%", height: "50px", my: 4, mx: 1 }}
      />
      <Skeleton
        variant="rounded"
        sx={{ width: "50%", height: "50px", my: 4, mx: 1 }}
      />
    </Stack>
  </Box>
);

const MyDoctors = () => {
  const dispatch = useDispatch();
  const patient = useSelector((state) => state.patientData.patientData);
  const isLoading = useSelector((state) => state.patientData.isLoading);

  useEffect(() => {
    dispatch(
      getPatientDataThunk({
        url: "patient/visitedDrs",
      })
    );
  }, []);

  return (
    <Stack alignItems={"start"} width={"100%"} spacing={4}>
      <Typography fontWeight={600} fontSize={"16px"} color={"#0A0A0A"}>
        My Doctors
      </Typography>
      {!isLoading ? (
        <Stack
          justifyContent={"center"}
          direction={"row"}
          gap={4}
          flexWrap={"wrap"}
          width={"100%"}
        >
          {patient.doctors
            ? patient.doctors.map((item) => {
                return (
                  <DoctorCard
                    doctorName={item.doctorName}
                    clinicName={item.clinicName}
                    image={item.img}
                  />
                );
              })
            : null}
        </Stack>
      ) : (
        //
        <Stack direction={"row"} gap={4} flexWrap={"wrap"} width={"100%"}>
          {[...Array(6)].map((_) => (
            <LoadingSkeleton />
          ))}
        </Stack>
      )}
    </Stack>
  );
};

export default MyDoctors;
