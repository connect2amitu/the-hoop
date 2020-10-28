import React, { useEffect } from 'react'
import { Backdrop, Button, CircularProgress, Container, Divider, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, styled, TextField, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import MyContainer from '../../components/Layout/MyContainer';
import { useAppState } from '../../context';
import Loading from '../../components/Loading';
import queryString from 'query-string';

const validationSchema = Yup.object().shape({
  pinCode: Yup.string()
    .required('Required'),
  landmark: Yup.string()
    .required('Required'),
  address: Yup.string()
    .required('Required'),
  mobile: Yup.string().required("Required!").matches(/^(\+91[-\s]?)?[0]?(91)?[6789]\d{9}$/, 'Phone number is not valid'),
});




const useStyles = makeStyles((theme) => ({

}));

export default function AddNewAddress(props) {
  console.log('props =>', props)
  const parsed = queryString.parse(props.location.search);
  const classes = useStyles();
  const { addNewAddress, isLoading, getAddress, editAddress, address } = useAppState("useAccount");
  console.log('address =>', address)

  useEffect(() => {
    getAddress(props.match.params.id)
  }, [])

  console.log('address =>', address)

  return (
    <MyContainer>
      {
        isLoading && <Loading />
      }
      {!isLoading && <Formik
        enableReinitialize
        initialValues={{
          address: (address && address.address) || "",
          landmark: (address && address.landmark) || "",
          pinCode: (address && address.pinCode) || "",
          addressType: (address && address.addressType) || "home",
          mobile: (address && address.mobile) || "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log('values =>', values)
          if (props.match.params.id) {
            editAddress(values, props.match.params.id)
          } else {
            addNewAddress(values)
          }
          if (parsed.redirect) {
            props.history.push(`/${parsed.redirect}`)
          } else {
            props.history.push('/account/addresses')
          }
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

                {/* mobile */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="standard-multiline-static"
                    label="Phone Number"
                    value={values.mobile}
                    autoComplete={"off"}
                    fullWidth
                    variant="outlined"
                    name="mobile"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.mobile && touched.mobile && errors.mobile}
                    helperText={errors.mobile && touched.mobile && errors.mobile}
                  />
                </Grid>

                {/* address */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="standard-multiline-static"
                    label="Address"
                    value={values.address}
                    autoComplete={"off"}
                    fullWidth
                    multiline
                    rows={4}
                    variant="outlined"
                    name="address"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.address && touched.address && errors.address}
                    helperText={errors.address && touched.address && errors.address}
                  />
                </Grid>

                {/* landmark */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-basic"
                    fullWidth
                    label="Landmark"
                    value={values.landmark}
                    variant="outlined"
                    name="landmark"
                    autoComplete={"off"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.landmark && touched.landmark && errors.landmark}
                    helperText={errors.landmark && touched.landmark && errors.landmark}
                  />
                </Grid>

                {/* pincode */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-basic"
                    fullWidth
                    label="Pincode"
                    value={values.pinCode}
                    variant="outlined"
                    name="pinCode"
                    autoComplete={"off"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.pinCode && touched.pinCode && errors.pinCode}
                    helperText={errors.pinCode && touched.pinCode && errors.pinCode}
                  />
                </Grid>

                {/* address type */}
                <Grid item xs={12} sm={6}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Address Type</FormLabel>
                    <RadioGroup aria-label="addressType" name="addressType" value={values.addressType} onChange={handleChange}>
                      <FormControlLabel value="home" control={<Radio />} label="Home" />
                      <FormControlLabel value="work/office" control={<Radio />} label="Work/Office" />
                    </RadioGroup>
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Button variant={"contained"} className={classes.btn} type={"submit"} fullWidth color={"primary"}>Add</Button>
                </Grid>
              </Grid>
            </form>
          )}
      </Formik>
      }
    </MyContainer >
  )
}
