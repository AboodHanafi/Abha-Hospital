import { Button, Link, Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logo } from "../../assets";

const HomePage = () => {
  const navigate = useNavigate();
  const isAuthed = useSelector((state) => state.auth.isAuthed);

  if (!isAuthed) {
    return (
      <Stack height={"97%"} justifyContent="flex-end">
        <Stack
          height={"100%"}
          alignItems={"center"}
          justifyContent="center"
          spacing={2}
        >
          <img src={logo.smallLogo} alt="logo" />
          <Typography fontWeight={500} color="#004C8C">
            الصفحة الرئيسية
          </Typography>
        </Stack>

        <Stack alignItems={"center"} spacing={2}>
          <Button
            onClick={() => navigate("/signin")}
            color="secondary"
            variant="contained"
          >
            تسجيل الدخول
          </Button>
          <Button
            variant="contained"
            //   onClick={() => navigate("/signup")}
          >
            إنشاء حساب جديد
          </Button>
        </Stack>
      </Stack>
    );
  }
  return (
    <Stack alignItems={"center"}>
      <Stack spacing={2}>
        <img src={logo.MainLogo} alt="logo" />
      </Stack>
      {/* <Stack>
        <Typography fontSize={"32px"} fontWeight={400}>
          ملفي الطبي :
        </Typography>
        {listHome.map((item) => {
          return (
            <Link
              key={item.id}
              href={item.path}
              underline="none"
              color={"red"}
              sx={{
                cursor: "pointer",
              }}
            >
              {item.text}
            </Link>
          );
        })}
      </Stack> */}
    </Stack>
  );
};

export default HomePage;
