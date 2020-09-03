import React, { useState } from 'react'
import { makeStyles, Grid, Button, TextField, Typography } from '@material-ui/core';
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
    padding: 40,
    height: 300,
    borderRadius: "35px 35px 0 0",
    background: theme.palette.primary.main,
  },
  title: {
    fontSize: "23px",
    color: theme.palette.primary.contrastText
  },
  TextField: {
    color: theme.palette.secondary.contrastText,
    borderRadius: "10px",
    borderColor: theme.palette.secondary.contrastText
  },
  btnWrap: {
    textAlign: "center",
  },
  btn: {
    width: "100%",
  }
}));
export default function Login(props) {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [isOTPSent, setIsOTPSent] = useState(false)
  const [OTP, setOTP] = useState("")
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
        <Grid item className={classes.title}><Typography variant={"h4"}>Sign In</Typography></Grid>
        <Grid item>
          {!isOTPSent && <TextField
            fullWidth
            InputProps={{
              className: classes.TextField
            }}
            required
            color={"primary"}
            id="filled-required"
            label="Enter Phone Number"
            defaultValue=""
            variant="outlined"
          />}
          {isOTPSent &&
            <TextField
              InputProps={{
                className: classes.TextField
              }}
              required
              color={"primary"}
              id="filled-required-code"
              label="Enter OTP CODE"
              onChange={(e) => setOTP(e.target.value)}
              variant="filled"
            />
          }
          {
            error && "invalid OTP"
          }
        </Grid>
        <Grid item className={classes.btnWrap}>
          {!isOTPSent && <Button onClick={() => generateOTP()} className={classes.btn} variant={"contained"} color={"inherit"}>{isLoading ? `Generating OTP` : `Generate OTP`}</Button>}
          {isOTPSent && <Button onClick={() => submit()} className={classes.btn} variant={"contained"} color={"inherit"}>{isLoading ? `Login...` : `Submit`}</Button>}
        </Grid>
      </Grid>
    </div>
  )
}
