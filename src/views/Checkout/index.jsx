import React, { useEffect } from 'react'
import { Container, Grid, Typography, styled, Button, TextField, ListItem, List, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, ListItemIcon, Radio, Paper, makeStyles, CircularProgress, Divider } from '@material-ui/core'
import { CreditCardRounded, FileCopyRounded, HomeRounded, MoneyRounded, WorkRounded } from '@material-ui/icons';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { TOAST } from '../../shared/funs';
import { useAppState } from '../../context';
import { COOKIE_OPTION } from '../../shared/constants';
import { order } from '../../apis/order';
import MyContainer from '../../components/Layout/MyContainer';
import base64 from 'base-64';
import Axios from 'axios';
import { RAZORPAY } from '../../shared/constants'
import AddressCard from '../../components/AddressCard';
import { NavLink } from 'react-router-dom';



const checkOutFormSchema = Yup.object().shape({
  name: Yup.string().required("Required").matches(/^[a-zA-Z ]{3,20}$/, 'Name is not valid'),
  address: Yup.string()
    .required("Required")
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
  const { grand_total, cart_items, clearCart, discount, setOrderResponse } = useAppState("useCart");
  const classes = useStyles();
  const { isLoading, addresses, getAddresses } = useAppState("useAccount");




  useEffect(() => {
    if (grand_total <= 0) {
      props.history.push("/")
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

  }, [])
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
    if (paymentMode === 0) {
      placeOrder(data)
    } else {

      var options = {
        key: RAZORPAY.key, // Enter the Key ID generated from the Dashboard
        amount: grand_total * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "The Hoop",
        description: "India's Local Store",
        image: require(`../../assets/images/logo/thehooplogo.svg`),
        // "order_id": "order_Ft9WIgy2rbwXo3", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: function (response) {
          console.log('payment.success response =>', response)
          placeOrder({ ...data, razorpay_payment_id: response.razorpay_payment_id })
        },
        modal: {
          ondismiss: function () {
            TOAST.info("Payment Dismissed");
            setLoading(false);
          }
        },
        prefill: {
          "name": data.customer_name,
          "email": data.email ? data.email : `${data.customer_mobile}@thehoop.in`,
          "contact": data.customer_mobile
        },
        notes: {
          "address": "The Hoop Office"
        },
        theme: {
          "color": "#f44336"
        }
      };
      var rzp1 = window.Razorpay(options);
      console.log('rzp1 =>', rzp1)

      rzp1.on('payment.failed', function (Error) {
        setLoading(false);
        TOAST.error("Payment Failed, please try again!")

      });
      rzp1.open(options);
    }


  }




  const placeOrder = (data) => {
    // order(data).then(resp => {
    TOAST.success("Order Placed Success")
    clearCart()
    props.history.push("/success");
    // }).catch(error => {
    // setLoading(false);
    // })
  };


  const handleChangePayment = (event) => {
    setPaymentMode(event);
  };

  // const copyToClipboard = (text) => {
  //   navigator.clipboard.writeText(text).then(function () {
  //     TOAST.info(text + " Copied")
  //   }, function (err) {
  //     console.info('Async: Could not copy text: ', err);
  //   });
  // };

  return (
    <MyContainer>
      {/* <Button color={"primary"} variant={"contained"} onClick={() => payment()}>Payment</Button> */}
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

                  {!isLoading && addresses && addresses[0].address &&

                    <Grid container className={classes.userWrapper} alignItems={"flex-start"}>
                      <Grid item xs={1}>{true ? <HomeRounded /> : <WorkRounded />}</Grid>
                      <Grid item xs={11}>
                        <Grid container direction={"column"}>
                          <Grid item><Typography variant={"h6"} >{addresses[0].addressType}</Typography></Grid>
                          <Grid item>{addresses[0].address}</Grid>
                          <Grid item>{addresses[0].pinCode}</Grid>
                          <Grid item>{addresses[0].mobile}</Grid>
                        </Grid>
                        <Divider />
                      </Grid>
                    </Grid>
                  }
                  <Button color={"primary"} variant={"contained"} component={NavLink} to={`/account/addresses?redirect=checkout`} fullWidth>Change or Add Address</Button>
                  {/* {
                    !isLoading && addresses.map((o, index) =>
                      <AddressCard id={o.id} name={o.name} phone={o.phone} address={o.address} addressType={o.addressType} />
                    )
                  } */}
                </Grid>
                {/* <Grid item xs={12} sm={6}>
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
             */}
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
                          {/* <Avatar>
                            <MoneyRounded />
                          </Avatar> */}
                          <Avatar src={require(`../../assets/images/cash.png`)} />
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
                            name="online"
                            inputProps={{ 'aria-label': 1 }}
                          />
                        </ListItemIcon>
                        <ListItemAvatar>
                          <Avatar>
                            <CreditCardRounded />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary="Pay Online"
                        />
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
                            <Typography >{grand_total} &#8377; </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      {discount > 0 && <Grid item>
                        <Grid container justify={"space-between"}>
                          <Grid item>
                            <Typography>Discount</Typography>
                          </Grid>
                          <Grid item>
                            <Typography >{grand_total * (discount / 100)} &#8377; </Typography>
                          </Grid>
                        </Grid>
                      </Grid>}
                      <Grid item>
                        <Grid container justify={"space-between"}>
                          <Grid item>
                            <Typography>Payable Amount</Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant={"h5"}>{Math.ceil(grand_total - grand_total * ((discount || 0) / 100))} &#8377; </Typography>
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
            </form >
          )
        }
      </Formik >
      }
    </MyContainer >
  )
}