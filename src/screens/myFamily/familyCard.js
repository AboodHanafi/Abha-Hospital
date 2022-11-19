import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, Stack } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { toast } from "react-hot-toast";

export default function BasicCard({ name, medicalFile, idNumber }) {
  const handleClick = (patientName, medicFileNumber) => {
    localStorage.removeItem("patientCode");
    localStorage.setItem("patientCode", medicFileNumber);
    toast.success(`change success to ${patientName}`);
  };
  return (
    <Card sx={{ minWidth: 350, backgroundColor: "#fff" }}>
      <CardContent>
        <Stack spacing={3} alignItems={"center"}>
          <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
          <Stack
            width={"80%"}
            direction={"row"}
            justifyContent={"space-between"}
          >
            <Typography
              minWidth={"90px"}
              color={"#0A0A0A"}
              fontSize={"16"}
              fontWeight={600}
            >
              Name
            </Typography>

            <Typography color={"#0A0A0A"} fontSize={"16"} fontWeight={400}>
              {name}
            </Typography>
          </Stack>
          <Stack
            width={"80%"}
            direction={"row"}
            justifyContent={"space-between"}
          >
            <Typography
              minWidth={"90px"}
              color={"#0A0A0A"}
              fontSize={"16"}
              fontWeight={600}
            >
              Medical file
            </Typography>

            <Typography color={"#0A0A0A"} fontSize={"16"} fontWeight={400}>
              {medicalFile}
            </Typography>
          </Stack>
          <Stack
            width={"80%"}
            direction={"row"}
            justifyContent={"space-between"}
          >
            <Typography
              minWidth={"90px"}
              color={"#0A0A0A"}
              fontSize={"16"}
              fontWeight={600}
            >
              ID number
            </Typography>

            <Typography color={"#0A0A0A"} fontSize={"16"} fontWeight={400}>
              {idNumber}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleClick(name, medicalFile)}>
          ChangeTo
        </Button>
      </CardActions>
    </Card>
  );
}
