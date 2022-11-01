import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Button, Stack, Typography } from "@mui/material";
import { vitalSignsIcon } from "../../assets";

export default function ScrollDialog({ open, setOpen, vitalDetails }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      scroll={"paper"}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      sx={{
        "& .MuiDialog-paper": {
          width: "400px",
          height: "500px",
        },
      }}
    >
      <DialogContent>
        <Stack padding={"0 30px 0"} spacing={4}>
          <Typography
            fontSize={"16px"}
            fontWeight={600}
            color={"#0A0A0A"}
            component={"h1"}
          >
            Vital sign
          </Typography>
          <Stack spacing={2}>
            {vitalDetails.map((item, index) => (
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                paddingBottom={1}
                borderBottom={"0.5px dashed #058638"}
              >
                <Stack spacing={1} alignItems={"center"} direction={"row"}>
                  <img
                    key={vitalSignsIcon[index].id}
                    alt="icon"
                    src={vitalSignsIcon[index].icon}
                  />

                  <Typography
                    fontSize={"16px"}
                    fontWeight={600}
                    color={"#0A0A0A"}
                  >
                    {item.signName}
                  </Typography>
                </Stack>
                <Typography
                  fontSize={"16px"}
                  fontWeight={500}
                  color={"#0A0A0A"}
                >
                  {item.signValue}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
