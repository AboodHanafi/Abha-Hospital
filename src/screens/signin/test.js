import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import styled from "@emotion/styled";
import { Button, TextField } from "@mui/material";

import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { signInThunk } from "../../redux/features/auth/authActions";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Images } from "../../assets";
import { CustomButton, CustomizedTextField } from "../../globalStyle";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignInSide() {
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

  React.useEffect(() => {
    if (isAuthed) {
      navigate("/");
    }
  }, [isAuthed]);

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={5}
        md={8}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid
        sx={{
          backgroundColor: "#1B1F23",
        }}
        item
        xs={12}
        sm={7}
        md={4}
        component={Paper}
        elevation={6}
        square
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={Images.logo} alt="logo" srcset="" />

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <CustomizedTextField
              margin="normal"
              required
              fullWidth
              placeholder="أدخل رقم الهاتف"
              id="mobile"
              name="mobile"
              autoComplete="mobile"
              autoFocus
            />
            <CustomizedTextField
              margin="normal"
              required
              fullWidth
              placeholder="أدخل كلمة المرور"
              name="password"
              type={showPassword ? "text" : "password"}
              id="password"
              autoComplete="current-password"
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
              sx={{
                color: "#fff",
              }}
              control={
                <Checkbox
                  value="remember"
                  sx={{
                    color: "#fff",
                  }}
                />
              }
              label="Remember me"
            />
            <CustomButton
              boxshadow={"0px 4px 12px rgba(0, 0, 0, 0.05)"}
              border={"1px solid #e9e7e7"}
              textcolor="#1D1D1B"
              variant="contained"
              type="submit"
            >
              Sign In
            </CustomButton>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
