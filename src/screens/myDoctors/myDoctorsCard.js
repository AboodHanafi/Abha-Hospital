import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar, Stack } from "@mui/material";
import { CustomButton } from "../../globalStyle";

export default function DoctorCard({ image, doctorName, clinicName }) {
  return (
    <Card sx={{ minWidth: 360, backgroundColor: "#fff", padding: "20px 15px" }}>
      <CardContent>
        <Stack spacing={3} alignItems={"center"}>
          <Avatar
            sx={{
              width: "100px",
              height: "100px",
            }}
            src={`data:image/*;base64,${image}`}
            alt={doctorName}
          />

          <Typography color={"#0A0A0A"} fontSize={"16"} fontWeight={600}>
            {doctorName}
          </Typography>

          <Typography color={"#0A0A0A"} fontSize={"16"} fontWeight={500}>
            {clinicName}
          </Typography>
        </Stack>
      </CardContent>
      <CardActions>
        <CustomButton
          textcolor="#f4f4f4"
          variant="contained"
          sx={{
            bgcolor: "#0E4C8F",
          }}
          size="small"
        >
          book an appontment
        </CustomButton>
        <CustomButton
          border={"1px solid #0E4C8F"}
          textcolor="#0E4C8F"
          variant="contained"
          sx={{
            bgcolor: "#fff",
          }}
          width={"30%"}
          size="small"
        >
          view
        </CustomButton>
      </CardActions>
    </Card>
  );
}
