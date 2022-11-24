import * as React from "react";
import Button from "@mui/material/Button";
import LockIcon from "@mui/icons-material/Lock";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  CircularProgress,
  Container,
  FormLabel,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
} from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { signInThunk } from "../../redux/features/auth/authActions";
import { toast } from "react-hot-toast";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Images } from "../../assets";
import { CustomizedTextField } from "../../globalStyle";

const SignIn = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthed = useSelector((state) => state.auth.isAuthed);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      const res = await dispatch(
        signInThunk({
          mobile: data.get("mobile"),
          password: data.get("password"),
        })
      );
      if (signInThunk.fulfilled.match(res)) {
        toast.success(
          "تم تسجيل الدخول بنجاح ... جاري تحويلك إلى الصفحة الرئيسية"
        );
      } else if (signInThunk.rejected.match(res)) {
        toast.error("خطأ في رقم الهاتف أو كلمة المرور");
      }
    } catch (e) {}
  };

  useEffect(() => {
    if (isAuthed) {
      setTimeout(() => navigate("/"), 3000);
    }
  }, [isAuthed]);

  if (!isAuthed) {
    return (
      <Container
        sx={{
          backgroundColor: "#1B1F23",
          height: "100%",
        }}
        maxWidth="xs"
      >
        <Stack
          alignItems={"center"}
          spacing={3}
          component="form"
          onSubmit={handleSubmit}
        >
          <Stack>
            <img
              width={"117px"}
              height={"100px"}
              src={Images.logo}
              alt="logo"
            />
          </Stack>
          <Stack>
            <Stack id="Username">
              <FormLabel>رقم الهاتف</FormLabel>
              <CustomizedTextField
                placeholder={"Username"}
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AlternateEmailIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>
            <Stack id="password">
              <FormLabel>كلمة المرور</FormLabel>
              <OutlinedInput
                id="outlined-adornment-Password"
                type={showPassword ? "text" : "password"}
                placeholder={"Password"}
                variant="outlined"
                startAdornment={
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Stack>
          </Stack>

          {/* <Stack>
            <FormLabel>رقم الهاتف</FormLabel>
            <CustomizedTextField
              required
              fullWidth
              id="mobile"
              name="mobile"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AlternateEmailIcon />
                  </InputAdornment>
                ),
              }}
              autoComplete="mobile"
              placeholder="أدخل رقم الهاتف هنا"
            />
          </Stack>
          <Stack>
            <FormLabel>كلمة المرور</FormLabel>

            <OutlinedInput
              id="outlined-adornment-Password"
              type={showPassword ? "text" : "password"}
              placeholder={"Password"}
              variant="outlined"
              startAdornment={
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </Stack>
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="تذكرني"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            تسجيل الدخول
          </Button>
          {/* <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                نسيت كلمة المرور؟
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"لا تملك حساب ؟ إنشاء حساب جديد"}
              </Link>
            </Grid>
          </Grid> */}
        </Stack>
      </Container>
    );
  }
  return (
    <Stack width={"100%"} alignItems={"center"} marginTop={"100px"}>
      <CircularProgress />
    </Stack>
  );
};

export default SignIn;
