import React, { useEffect } from 'react'
import { Container, Grid, Typography, styled, Button, TextField, ListItem, List, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, ListItemIcon, Radio, Paper, makeStyles, CircularProgress } from '@material-ui/core'
import { FileCopyRounded } from '@material-ui/icons';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { TOAST } from '../../shared/funs';
import { useAppState } from '../../context';
import { COOKIE_OPTION } from '../../shared/constants';
import { order } from '../../apis/order';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { requestForSample } from '../../apis/jasodhaMilk';

const formSchema = Yup.object().shape({
  name: Yup.string().required().matches(/^[a-zA-Z ]{3,20}$/, 'Name is not valid'),
  address: Yup.string()
    .required()
    .min(5, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required'),
  mobile: Yup.string().required().matches(/^(\+91[-\s]?)?[0]?(91)?[6789]\d{9}$/, 'Phone number is not valid'),
});


const MyContainer = styled(Container)({
  paddingBottom: "0px",
  marginTop: "20px",
});


const useStyles = makeStyles((theme) => ({
  btn: {
    padding: 12,
    fontSize: 18
  },
  inputFocused: {
    outline: "none",
    border: "none"
  },
  logo: {
    height: 120,
    width: 120,
  },
  heading: {
    textAlign: "center"
  }
}));

export default function Checkout(props) {
  const [cookies, setCookie] = useCookies();
  const [loading, setLoading] = useState("")

  const { location } = useAppState("global");
  const { locations, getLocations, setLocation } = useAppState("global");

  const classes = useStyles();

  useEffect(() => {
    getLocations()
  }, [])


  const requestHandler = (value) => {
    console.log('value =>', value);
    var payload = {
      name: value.name,
      address: value.address,
      mobile: value.mobile,
      area: value.location.area_id
    }
    console.log('payload =>', payload);

    requestForSample(payload).then(resp => {
      TOAST.success(<span>your request ID is {resp.request_no} <br />shortly you will get all other information</span>)
      props.history.push("/")
    }).catch(e => {
      TOAST.success(`Something went wrong, please try again.`)
    })
  }

  return (
    <MyContainer>
      <Formik
        initialValues={{ name: cookies.name, address: cookies.address, mobile: cookies.phone, location: cookies.location }}
        validationSchema={formSchema}
        onSubmit={(values, { setSubmitting }) => {
          requestHandler(values)
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2} direction={"column"}>
                <Grid item xs={12} sm={6}>
                  <Grid container justify={"center"}>
                    <Grid item >
                      <IconButton><Avatar className={classes.logo} src={require(`../../assets/images/jasodha.png`)} /></IconButton>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant={"h4"} className={classes.heading}>Inquiry Form</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-basic"
                    fullWidth
                    label="Name"
                    value={values.name}
                    variant="outlined"
                    name="name"
                    autoComplete={"off"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.name && touched.name && errors.name}
                    helperText={errors.name && touched.name && errors.name}

                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Autocomplete
                    classes={{ root: classes.inputFocused }}
                    style={{ width: "100%", outline: "none" }}
                    id="combo-box-demo"
                    color={"secondary"}
                    options={locations}
                    value={location}
                    getOptionLabel={(option) => `${option.area_pincode} - ${option.area_name}`}
                    onChange={(event, newValue) => {
                      setLocation(newValue)
                      handleChange(event)
                    }}
                    onBlur={handleBlur}
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

                <Grid item xs={12} sm={6}>
                  <TextField
                    id="standard-multiline-static"
                    label="Address"
                    value={values.address}
                    multiline
                    rows={4}
                    autoComplete={"off"}
                    fullWidth
                    variant="outlined"
                    name="address"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.address && touched.address && errors.address}
                    helperText={errors.address && touched.address && errors.address}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-basic"
                    fullWidth
                    label="Mobile"
                    value={values.mobile}
                    variant="outlined"
                    name="mobile"
                    autoComplete={"off"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.mobile && touched.mobile && errors.mobile}
                    helperText={errors.mobile && touched.mobile && errors.mobile}
                  />

                </Grid>
                <Grid item xs={12} sm={6}>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Button variant={"contained"} disabled={loading} className={classes.btn} type={"submit"} fullWidth color={"primary"}>{loading ? <CircularProgress style={{ color: "#fff", height: 26, width: 26 }} /> : `Request for a sample`}</Button>
                </Grid>
              </Grid>
            </form>
          )}
      </Formik>
    </MyContainer >
  )
}
