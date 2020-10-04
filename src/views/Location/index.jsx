import React, { useState, useEffect } from 'react'
import { makeStyles, Grid, Button, TextField, Typography } from '@material-ui/core';
import { useAppState } from '../../context';
import { useCookies } from 'react-cookie';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { COOKIE_OPTION } from '../../shared/constants';

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
  },
  btnWrap: {
    textAlign: "center",
  },
  btn: {
    width: "100%",
    padding: 10,
    textTransform: "capitalize",
    fontSize: 16
  },
  disabledButton: {
    background: "white !important",
    color: "black !important",
    opacity: 0.7
  },
  inputFocused: {
    outline: "none",
    border: "none"
  }
}));


function Location(props) {
  const classes = useStyles();
  const [zipCode, setZipcode] = useState("")
  const { locations, getLocations, setLocation } = useAppState("useGlobal");


  const [cookies, setCookie] = useCookies();

  useEffect(() => {
    if (cookies.location) {
      props.history.push("/")
    }
    getLocations()
  }, [])

  const submit = () => {
    setLocation(zipCode)
    setCookie('location', zipCode, COOKIE_OPTION);
    props.history.push("/")
  }

  return (
    <div className={classes.mainWrapper} >
      <Grid container direction={"column"} spacing={1} className={classes.container}>
        <Grid item className={classes.title}><Typography variant={"h4"}>Find Area</Typography></Grid>
        <Grid item>
          <Autocomplete
            classes={{ root: classes.inputFocused }}
            style={{ width: "100%", outline: "none" }}
            id="combo-box-demo"
            color={"secondary"}
            options={locations}
            getOptionLabel={(option) => `${option.area_pincode} - ${option.area_name}`}
            onChange={(event, newValue) => {
              setZipcode(newValue);
            }}
            renderInput={(params) => <TextField
              {...params}
              color={"secondary"}
              required
              fullWidth
              label="Select Area"
              style={{ background: "#fff", borderColor: "#fff", }}
              variant="filled" />
            }
          />
        </Grid>
        <Grid item className={classes.btnWrap}>
          <Button onClick={() => submit()} disabled={!zipCode} classes={{ disabled: classes.disabledButton }} className={classes.btn} variant={"contained"} color={"primary"}>Go for Shopping</Button>
        </Grid>
      </Grid>
    </div >
  )
}


export default Location