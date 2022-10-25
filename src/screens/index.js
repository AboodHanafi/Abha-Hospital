import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import {
  FormLabel,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { signInThunk } from "../redux/features/auth/authActions";
import { toast } from "react-hot-toast";

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

export default function SignIn() {
  const [showPassword, setShowPassword] = React.useState(false);
  const dispatch = useDispatch();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log({
    //   mobile: data.get("mobile"),
    //   password: data.get("password"),
    // });
    try {
      const res = await dispatch(
        signInThunk({
          mobile: data.get("mobile"),
          password: data.get("password"),
        })
      );
      if (signInThunk.fulfilled.match(res)) {
        toast.success("login successfully ... redirect to home");
      } else if (signInThunk.rejected.match(res)) {
        toast.error("incorrect username or password");
      }
    } catch (e) {}
  };

  return (
    <Stack>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <FormLabel>Mobile Number</FormLabel>
          <TextField
            required
            fullWidth
            id="mobile"
            name="mobile"
            autoComplete="mobile"
            autoFocus
            placeholder="enter your mobile number"
          />

          <FormLabel>Password</FormLabel>
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
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
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
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Stack>
  );
}
