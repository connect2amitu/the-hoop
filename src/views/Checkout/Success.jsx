import { Avatar, Button, Container, Grid, makeStyles, styled, Typography } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom';
import { useAppState } from '../../context';
import './style.scss'

const MyContainer = styled(Container)({
  paddingBottom: "0px",
  marginTop: "20px",
});

const useStyles = makeStyles((theme) => ({
  checkStatusBtn: {
    textTransform: "capitalize"
  },
  whatsappBtn: {
    color: "#fff",
    padding: 11,
    backgroundColor: "#1ca811",
    textTransform: "capitalize",
    '&:hover': {
      backgroundColor: "#1ca811",
    },
  },
  keepShoppingBtn: {
    padding: 11,
    textTransform: "capitalize"
    // marginTop: 80
    // width: "100%"
  }
}));



export default function Success() {
  const { link, order_id } = useAppState("cart");
  const classes = useStyles();

  return (
    <MyContainer>
      <Grid container spacing={1} direction={"column"} >
        <Grid item xs={12} sm={6}>
          <svg id="svg" viewBox="0 0 130.2 130.2">
            <circle className="check_circle circle" fill="none" stroke="#73AF55" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1" />
            <polyline className="check_circle check" fill="none" stroke="#73AF55" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 " />
          </svg>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography style={{ textAlign: "center" }} variant={"h4"}>Order is Placed Successfully</Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography style={{ textAlign: "center" }} variant={"h6"}>Your Order Id : #<b>{order_id}</b> </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography style={{ textAlign: "center", marginTop: 20 }} variant={"h6"}>For order status share it on Whatsapp</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={1} justify={"center"} alignItems={"center"}>
            <Grid item>
              <Button className={classes.whatsappBtn} variant={"contained"} onClick={() => window.open(link, "_blank")} >Share On <Avatar style={{ height: 25, width: 25 }} src={require(`../../assets/images/whatsapp.png`)} /></Button>
            </Grid>
            <Grid item>
              <Button className={classes.keepShoppingBtn} variant={"contained"} color={"primary"} component={NavLink} to={"/"}>Keep Shopping</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MyContainer>
  )
}
