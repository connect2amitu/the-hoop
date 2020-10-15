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
import MyContainer from '../../components/Layout/MyContainer';

const checkOutFormSchema = Yup.object().shape({
  name: Yup.string().required().matches(/^[a-zA-Z ]{3,20}$/, 'Name is not valid'),
  address: Yup.string()
    .required()
    .min(5, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required'),
  mobile: Yup.string().required().matches(/^(\+91[-\s]?)?[0]?(91)?[6789]\d{9}$/, 'Phone number is not valid'),
});



const useStyles = makeStyles((theme) => ({
  btn: {
    padding: 12,
    textTransform: "capitalize",
    fontSize: 18
  }
}));

export default function Checkout(props) {
  const [cookies, setCookie] = useCookies();
  const [loading, setLoading] = useState("")
  const [paymentMode, setPaymentMode] = useState(0);
  const { location } = useAppState("useGlobal");
  const { grand_total, cart_items, setOrderResponse } = useAppState("useCart");
  const classes = useStyles();


  // const handleChange = (type) => {
  //   setExpanded(expanded !== type ? type : "")
  // }

  const placeOrderHandler = (values) => {
    setCookie('phone', values.mobile, COOKIE_OPTION);
    setCookie('name', values.name, COOKIE_OPTION);
    setCookie('address', values.address, COOKIE_OPTION);


    var cart_items = JSON.parse(localStorage.cart_items);
    let order_data = []
    cart_items.forEach(item => {
      order_data.push({
        sub_product_id: item.sub_prod_id,
        qty: item.qty
      })
    });
    var data = {
      customer_name: values.name,
      customer_mobile: values.mobile,
      customer_address: values.address,
      customer_payment: paymentMode,
      customer_area: location.area_id,
      order_data
    }
    setLoading(true);
    order(data).then(resp => {
      TOAST.success("Order Placed Success")
      props.history.push("/success");
      setOrderResponse(resp.data)
    }).catch(error => {
      setLoading(false);
      console.log('order error =>', error);
    })
  }

  const handleChangePayment = (event) => {
    setPaymentMode(event);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(function () {
      TOAST.info(text + " Copied")
    }, function (err) {
      console.info('Async: Could not copy text: ', err);
    });
  };


  return (
    <MyContainer>
      {cart_items.length >= 0 && <Formik
        initialValues={{ name: cookies.name, address: cookies.address, mobile: cookies.phone }}
        validationSchema={checkOutFormSchema}
        onSubmit={(values, { setSubmitting }) => {
          placeOrderHandler(values)
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
                  <Typography variant={"h4"}>Checkout</Typography>
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
                  <Typography variant="h6" >
                    Pay with
          </Typography>
                  <div >
                    <List dense={true}>


                      <ListItem button onClick={() => handleChangePayment(0)}>
                        <ListItemIcon>
                          <Radio
                            checked={paymentMode === 0}

                            value={0}
                            name="cash"
                            inputProps={{ 'aria-label': 0 }}
                          />
                        </ListItemIcon>
                        <ListItemAvatar>
                          {/* <Avatar src={require(`../../assets/images/payment-icon/cash.png`)} /> */}
                        </ListItemAvatar>
                        <ListItemText
                          primary="Cash On Delivery"
                        />
                      </ListItem>


                      <ListItem button onClick={() => handleChangePayment(1)}>
                        <ListItemIcon>
                          <Radio
                            checked={paymentMode === 1}
                            value={1}
                            name="paytm"
                            inputProps={{ 'aria-label': 1 }}
                          />
                        </ListItemIcon>
                        <ListItemAvatar>
                          {/* <Avatar src={require(`../../assets/images/payment-icon/paytm.png`)} /> */}
                        </ListItemAvatar>
                        <ListItemText
                          primary="PayTm"
                          secondary={`Number : 8490860632`}
                        />
                        <ListItemSecondaryAction>
                          <IconButton edge="end" onClick={() => copyToClipboard(`8490860632`)}>
                            <FileCopyRounded />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>

                      <ListItem button onClick={() => handleChangePayment(2)}>
                        <ListItemIcon>
                          <Radio
                            checked={paymentMode === 2}

                            value={2}
                            name="gpay"
                            inputProps={{ 'aria-label': 2 }}
                          />
                        </ListItemIcon>
                        <ListItemAvatar>
                          {/* <Avatar src={require(`../../assets/images/payment-icon/gpay.png`)} /> */}
                        </ListItemAvatar>
                        <ListItemText
                          primary="Google Pay"
                          secondary={`UPI ID : 8490860632@okbizaxis`}
                        />
                        <ListItemSecondaryAction>
                          <IconButton edge="end" onClick={() => copyToClipboard(`8490860632@okbizaxis`)}>
                            <FileCopyRounded />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    </List>
                  </div>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Paper style={{ padding: 10 }} elevation={3}>
                    <Typography variant={"h6"}>PRICE DETAILS</Typography>
                    <Grid container direction={"column"}>
                      <Grid item>
                        <Grid container justify={"space-between"}>
                          <Grid item>
                            <Typography>Price ({cart_items.length} item)</Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant={"h5"}>{grand_total}/-</Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Grid container justify={"space-between"}>
                          <Grid item>
                            <Typography>Delivery Charges</Typography>
                          </Grid>
                          <Grid item>
                            <Typography>0/-</Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Button variant={"contained"} disabled={loading} className={classes.btn} type={"submit"} fullWidth color={"primary"}>{loading ? <CircularProgress style={{ color: "#fff", height: 26, width: 26 }} /> : `Place Order`}</Button>
                </Grid>
              </Grid>
            </form>
          )}
      </Formik>
      }
    </MyContainer >
  )
}