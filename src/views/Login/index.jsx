import React, { useState } from 'react'
import { makeStyles, Grid, Button, TextField, Typography, FormControl, OutlinedInput, InputAdornment, CircularProgress } from '@material-ui/core';
import { useAppState } from '../../context';
import { fetchOTP, resendOTP, verifyOTP } from '../../apis/login'
import { useEffect } from 'react';
import { TOAST } from '../../shared/funs';
import { useCookies } from 'react-cookie';
import queryString from 'query-string';


const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    height: "100vh",
    width: "100%",
    position: "fixed",
    background: `url(${require("../../assets/images/loginBg.jpg")})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    objectFit: "cover",
    backgroundPosition: "inherit",
  },
  loginContainer: {
    bottom: 300,
    position: 'absolute',
    padding: "14px 40px 0 40px",
    height: 280,
    // borderRadius: "35px 35px 0 0",
    background: "transparent",
    backdropFilter: "blur(10px)",
    [theme.breakpoints.up(768)]: {
      backdropFilter: "blur(10px)",
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
    fontSize: "30px",
    '&$focused': {
      color: '#000',
    },
  },
  inputFocused: {
    outline: "none",
    "&.Mui-focused fieldset": {
      borderColor: "red",
      borderWidth: "2px"
    }
  },
  OTPField: {
    color: theme.palette.primary.contrastText,
    borderRadius: "10px",
    borderColor: theme.palette.primary.light,
    width: "100%",
    fontSize: "30px",
    "& .MuiFormLabel-root": {
      color: "#fff"
    }
  },
  resentBtn: {
    padding: 4,
    fontSize: 13,
    // color: "#fff",
    textTransform: "capitalize",
  },
  btnWrap: {
    textAlign: "center",
  },
  btn: {
    width: "100%",
    padding: 10,
    // backgroundColor: "#ffffff",
    textTransform: "capitalize",
    fontSize: 16
  },
  otpText: {
    color: "#fffbfab3"
  },
  disabledButton: {
    background: "white !important",
    color: "black !important",
    opacity: 0.7
  }
}));
function Login(props) {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false)
  const [isOTPSent, setIsOTPSent] = useState(false)
  const parsed = queryString.parse(props.location.search);
  const [showResendBtn, setShowResendBtn] = useState(true)
  const [OTP, setOTP] = useState("")
  const [clock, setClock] = useState(false)
  const [generatedOTP, setGeneratedOTP] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [timerId, setTimerId] = useState(null)
  const { setLoginUser, saveOTP, user, phone, otp, verifyToken } = useAppState("useAuth");
  const [cookies, setCookie] = useCookies();

  var timeLeft = 60;
  useEffect(() => {
    if (otp) {
      setIsOTPSent(true)
      setGeneratedOTP(otp)
      setPhoneNumber(phone)
    }
    // }
  }, [])

  useEffect(() => {
    if (verifyToken()) {
      props.history.push("/");
    }
  }, [])




  const generateOTP = () => {
    if (phoneNumber.length !== 10) {
      TOAST.error("Invalid Phone Number")
      return;
    }
    callCounter()
    setIsLoading(true)
    fetchOTP(phoneNumber).then(resp => {
      saveOTP(resp.data.data.token, phoneNumber)
      setIsOTPSent(true)
      setIsLoading(false)
    }).catch(e => {
      setIsOTPSent(false)
      setIsLoading(false)
      console.log('e =>', e);
    })
  }

  const callCounter = () => {
    var timerId = setInterval(countdown, 1000);
    setTimerId(timerId);
  }

  function countdown() {
    if (timeLeft === -1) {
      clearTimeout(timerId);
      doSomething();
    } else {
      setClock(timeLeft)
      timeLeft--;
    }
  }

  function doSomething() {
    clearTimeout(timerId);
    setShowResendBtn(true);
  }

  const submit = () => {
    if (OTP.length !== 6) {
      TOAST.error("Invalid OTP")
      return;
    }
    verifyOTP(Number(OTP)).then(resp => {
      console.log('resp =>', resp.data.data.token)
      setLoginUser(resp.data.data.token);
      if (parsed.redirect) {
        props.history.push(`/${parsed.redirect}`)
      } else {
        props.history.push("/")
      }
    }).catch(e => {
      TOAST.error("Invalid OTP")
      console.log('e =>', e);
    })
  }

  const resendOTPHandler = () => {
    resendOTP({
      mobile_no: phoneNumber,
      otp
    }).then(resp => {
      callCounter();
      setIsOTPSent(true)
      setIsLoading(false)
    }).catch(e => {

    })
  }

  return (
    <div className={classes.mainWrapper} >
      <Grid container direction={"column"} spacing={1} className={classes.loginContainer}>
        <Grid item className={classes.title}><Typography variant={"h4"}>{isOTPSent ? `Verify Number` : `Sign In`}</Typography></Grid>
        {!isOTPSent && <Grid item>
          <FormControl
            style={{ color: "#fff", fontSize: 30, outlineColor: "red" }} fullWidth className={classes.TextField} variant="outlined">
            <OutlinedInput
              fullWidth
              style={{ color: "#fff", fontSize: 35 }}
              autoComplete={"off"}
              type="number"
              className={classes.TextField}
              InputProps={{
                // className: classes.TextField,
                // style: { color: "#fff" }
              }}
              autoFocus
              required
              color={"primary"}
              id="outlined-adornment-amount"
              defaultValue=""
              onChange={(e) => setPhoneNumber(e.target.value)}
              startAdornment={<InputAdornment position="start">+91 </InputAdornment>}
            />
          </FormControl>

        </Grid>
        }
        {isOTPSent &&
          <Grid item>
            <Grid container spacing={1} direction={"column"}>
              <Grid item>
                <span className={classes.otpText}>OTP sent on +91 {phoneNumber}</span>
              </Grid>
              <Grid item>
                <Grid container alignItems={"center"} spacing={1} justify={"space-between"}>
                  <Grid item xs={10} sm={8}>
                    <TextField
                      className={classes.OTPField}
                      InputProps={{
                        className: classes.OTPField,
                        style: { color: "white" }

                      }}
                      type="number"
                      autoFocus
                      required
                      autoComplete={"off"}
                      color={"secondary"}
                      id="filled-required-code"
                      label="Enter OTP CODE"
                      onChange={(e) => setOTP(e.target.value)}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={2} sm={4}>
                    {/* {showResendBtn && !clock ? <Button className={classes.resentBtn} onClick={() => resendOTPHandler()} variant={"contained"} color={"secondary"}>Resend</Button> : clock ? <Button className={classes.resentBtn} variant={"contained"} color={"secondary"}>{toHHMMSS(clock)}</Button> : ""} */}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

          </Grid>
        }
        <Grid item className={classes.btnWrap}>
          {!isOTPSent && <Button onClick={() => generateOTP()} className={classes.btn} classes={{ disabled: classes.disabledButton }} disabled={isLoading} variant={"contained"} color={"primary"}>
            {isLoading ? <CircularProgress style={{ height: 26, width: 26 }} /> : `Generate OTP`}
          </Button>}
          {isOTPSent && <Button onClick={() => submit()} disabled={isLoading} classes={{ disabled: classes.disabledButton }}
            className={classes.btn} variant={"contained"} color={"primary"}>{isLoading ? <CircularProgress style={{ height: 26, width: 26 }} /> : `Submit`}</Button>}
        </Grid>
      </Grid>
    </div >
  )
}


export default Login