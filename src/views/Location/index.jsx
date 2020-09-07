import React, { useState, useEffect } from 'react'
import { makeStyles, Grid, Button, TextField, Typography } from '@material-ui/core';
import { useAppState } from '../../context';
import { useCookies } from 'react-cookie';


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
  container: {
    bottom: 0,
    position: 'absolute',
    padding: "14px 40px 0 40px",
    height: 240,
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
  },
  btnWrap: {
    textAlign: "center",
  },
  btn: {
    width: "100%",
  },
}));


function Location(props) {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false)
  const [zipCode, setZipcode] = useState("")

  const [cookies, setCookie] = useCookies();

  useEffect(() => {
    if (cookies.location) {
      props.history.push("/")
    }
  })

  const submit = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setCookie('location', zipCode, { path: '/' });
    }, 1000);
  }

  return (
    <div className={classes.mainWrapper} >
      <Grid container direction={"column"} spacing={1} className={classes.container}>
        <Grid item className={classes.title}><Typography variant={"h4"}>Find Address</Typography></Grid>
        <Grid item>
          <TextField
            fullWidth
            InputProps={{
              className: classes.TextField
            }}
            required
            onChange={(e) => setZipcode(e.target.value)}
            color={"primary"}
            id="filled-required"
            label="Enter Zip Code"
            defaultValue=""
            variant="outlined"
          />
        </Grid>
        <Grid item className={classes.btnWrap}>
          <Button onClick={() => submit()} className={classes.btn} variant={"contained"} color={"inherit"}>Locate me</Button>
        </Grid>
      </Grid>
    </div >
  )
}


export default Location