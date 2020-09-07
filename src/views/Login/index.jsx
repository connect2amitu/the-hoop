import React, { useState } from 'react'
import { makeStyles, Grid, Button, TextField, Typography, IconButton } from '@material-ui/core';
import { useAppState } from '../../context';

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    height: "100vh",
    width: "100%",
    position: "fixed",
    background: `url(${require("../../assets/images/loginBg.jpg")})`,
    backgroundPosition: "right",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    objectFit: "cover",
  },
  loginContainer: {
    bottom: 0,
    position: 'absolute',
    padding: "14px 40px 0 40px",
    height: 280,
    borderRadius: "35px 35px 0 0",
    background: theme.palette.primary.main,
    backdropFilter: "blur(25px)",
    [theme.breakpoints.up(768)]: {
      backdropFilter: "blur(25px)",
      background: "none",
      borderRadius: 0,
      bottom: "30%",
      right: "24%",
      width: "50%",
    }
  },
  title: {
    fontSize: "23px",
    color: theme.palette.primary.contrastText
  },
  TextField: {
    color: theme.palette.primary.contrastText,
    borderRadius: "10px",
    borderColor: theme.palette.primary.light,
    fontSize: "55px",
  },
  OTPField: {
    color: theme.palette.primary.contrastText,
    borderRadius: "10px",
    borderColor: theme.palette.primary.light,
    width: "230px",
    fontSize: "55px",
  },
  btnWrap: {
    textAlign: "center",
  },
  btn: {
    width: "100%",
  },
  otpText: {
    color: "#fffbfab3"
  }
}));
function Login(props) {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [isOTPSent, setIsOTPSent] = useState(false)
  const [OTP, setOTP] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const { setLoginUser } = useAppState("userAuth");


  const generateOTP = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsOTPSent(true)
      setIsLoading(false)
    }, 1000);
  }

  const submit = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      if (OTP === "123456") {

        setLoginUser();
        props.history.push("/")
      } else {
        setError("Invalid OTP")
      }
    }, 1000);
  }

  return (
    <div className={classes.mainWrapper} >
      <Grid container direction={"column"} spacing={1} className={classes.loginContainer}>
        <Grid item className={classes.title}><Typography variant={"h4"}>{isOTPSent ? `Verify Number` : `Sign In`}</Typography></Grid>
        {!isOTPSent && <Grid item>
          <TextField
            fullWidth
            InputProps={{
              className: classes.TextField
            }}
            required
            onChange={(e) => setPhoneNumber(e.target.value)}
            color={"primary"}
            id="filled-required"
            label="Enter Phone Number"
            defaultValue=""
            variant="outlined"
          />

        </Grid>
        }
        {isOTPSent &&
          <Grid item>
            <Grid container direction={"column"}>
              <Grid item>
                <span className={classes.otpText}>Got OTP on +91 {phoneNumber}</span>
              </Grid>
              <Grid item>
                <Grid container alignItems={"center"} justify={"space-between"}>
                  <Grid item>
                    <TextField
                      InputProps={{
                        className: classes.OTPField
                      }}
                      required
                      color={"primary"}
                      id="filled-required-code"
                      label="Enter OTP CODE"
                      onChange={(e) => setOTP(e.target.value)}
                      variant="filled"
                      helperText={error && "invalid OTP"}
                    />
                  </Grid>
                  <Grid item>
                    <Button variant={"contained"} color={"secondary"}>Resend</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

          </Grid>
        }
        <Grid item className={classes.btnWrap}>
          {!isOTPSent && <Button onClick={() => generateOTP()} className={classes.btn} variant={"contained"} color={"inherit"}>{isLoading ? `Generating OTP` : `Generate OTP`}</Button>}
          {isOTPSent && <Button onClick={() => submit()} className={classes.btn} variant={"contained"} color={"inherit"}>{isLoading ? `Login...` : `Submit`}</Button>}
        </Grid>
      </Grid>
    </div >
  )
}


export default Login