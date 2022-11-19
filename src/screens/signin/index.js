import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
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

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      Abha Hospital 2022
      {"."}
    </Typography>
  );
}
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
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
           <LockOutlinedIcon />
         </Avatar> */}
          <img src={Images.logo} alt="logo" />
          <Typography component="h1" variant="h5">
            تسجيل الدخول
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <FormLabel>رقم الهاتف</FormLabel>
            <TextField
              required
              fullWidth
              id="mobile"
              name="mobile"
              autoComplete="mobile"
              autoFocus
              placeholder="أدخل رقم الهاتف هنا"
            />

            <FormLabel>كلمة المرور</FormLabel>
            <OutlinedInput
              id="password"
              name="password"
              autoComplete="current-password"
              placeholder="enter your password"
              required
              fullWidth
              type={showPassword ? "text" : "password"}
              variant="outlined"
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="تذكرني"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              تسجيل الدخول
            </Button>
            <Grid container>
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
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
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
