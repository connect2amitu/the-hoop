import React, { useState, useEffect } from 'react'
import { makeStyles, Grid, Button, TextField, Typography } from '@material-ui/core';
import { useAppState } from '../../context';
import { useCookies } from 'react-cookie';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { COOKIE_OPTION } from '../../shared/constants';
import Axios from 'axios';
import FullScreenDialog from '../../components/FullScreenDialog';

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    height: "calc(100vh - 36px)",
    width: "100%",
    position: "fixed",
    background: `url(${require("../../assets/images/loginBg.jpg")})`,
    backgroundPosition: "inherit",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    objectFit: "cover",
  },
  container: {
    bottom: 300,
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
  const [currentLocation, setCurrentLocation] = useState("")
  const { locations, location, getLocations, setLocation, setAddress } = useAppState("useGlobal");

  const [cookies, setCookie] = useCookies();

  useEffect(() => {
    if (cookies.location) {
      props.history.push("/")
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        Axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&location_type=ROOFTOP&result_type=street_address&key=AIzaSyBifN6Ghk3qyWUhFsrZkxt3ixRcPqi-pas`).then(resp => {
          console.log('location resp =>', resp.data.results[0].formatted_address.split(", ").slice(1).join(", "))
          setCurrentLocation(resp.data.results[0].formatted_address.split(", ").slice(1).join(", "))
          setAddress(resp.data.results[0].formatted_address.split(", ").slice(1).join(", "))
        }).catch(e => {
          console.log('e =>', e)
        })
      });
    } else {
      console.error("Geolocation is not supported by this browser!");
    }
    var tag = document.createElement('script');
    tag.async = false;
    tag.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBifN6Ghk3qyWUhFsrZkxt3ixRcPqi-pas&callback=initMap&libraries=&v=weekly";
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(tag);
    getLocations()
  }, [])

  const submit = () => {
    var data = { ...zipCode, address: currentLocation };
    console.log('data =>', data)

    setLocation(data)
    setCookie('location', zipCode, COOKIE_OPTION);
    props.history.push("/")
  }

  return (
    <div className={classes.mainWrapper} >
      <div id="map"></div>
      <Button color={"primary"} fullWidth onClick={() => props.history.push("/")} variant={"contained"}>Go</Button>
      {/* <p style={{ color: "white" }}>{currentLocation}</p> */}
      {/* <Grid container direction={"column"} spacing={1} className={classes.container}>
        <Grid item className={classes.title}><Typography variant={"h4"}>Find Area</Typography></Grid>
        <Grid item>
          <Autocomplete
            defaultValue={location}
            classes={{ root: classes.inputFocused }}
            style={{ width: "100%", outline: "none" }}
            id="combo-box-demo"
            color={"secondary"}
            options={locations}
            getOptionLabel={(option) => `${option.area_pincode} - ${option.area_name}`}
            onChange={(event, newValue) => {
              console.log('newValue =>', newValue)

              setZipcode(newValue);
            }}
            renderInput={(params) => <TextField
              {...params}
              color={"secondary"}
              required
              fullWidth
              label="Select Area"
              style={{ background: "#fff", borderColor: "#fff", }}
              variant="outlined" />
            }
          />
        </Grid>
        <Grid item className={classes.btnWrap}>
          <Button onClick={() => submit()} disabled={!zipCode} classes={{ disabled: classes.disabledButton }} className={classes.btn} variant={"contained"} color={"primary"}>Go for Shopping</Button>
        </Grid>
      </Grid>
    */}
    </div >
  )
}


export default Location