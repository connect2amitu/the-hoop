import React, { useEffect, useState } from 'react'
import { Container, styled, Grid, Card, Divider, Avatar, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { FilterNoneRounded, SettingsRounded, PowerSettingsNewRounded, HelpOutlineRounded, LocationOnRounded, EditAttributesRounded, EditRounded, ShoppingBasketRounded, ContactMailRounded, LocalMallRounded, PaymentRounded } from '@material-ui/icons';
import { useAppState } from '../../context';
import { useCookies } from 'react-cookie';
import FullScreenDialog from '../../components/FullScreenDialog';
import { red } from '@material-ui/core/colors';
import { NavLink } from 'react-router-dom';
import MyContainer from '../../components/Layout/MyContainer';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  btnMenu: {
    height: 90,
    width: 90,
    textTransform: "capitalize",
    fontSize: 12
  },
  menuWrapper: {
    marginTop: 15
  },
  avatar: {
    height: 70,
    width: 70,
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    marginRight: 15
  },
  userName: {
    fontSize: 16,
    fontWeight: 600
  },
  userDetail: {
    fontSize: 12,
  },
  userWrapper: {
    margin: "15px 0",
  },
}));


export default function Account(props) {
  const classes = useStyles();
  const { logout, verifyToken } = useAppState('useAuth')

  const [open, setOpen] = useState(false);
  const [heading, setHeading] = useState("");
  const handleOpen = (heading = "") => {
    setOpen(!open);
    setHeading(heading)
  };

  useEffect(() => {
    if (!verifyToken()) {
      props.history.push("/login?redirect=account")
    }
  }, [])

  return (
    <MyContainer>
      <Grid container className={classes.userWrapper} alignItems={"center"}>
        <Grid item><Avatar className={classes.avatar}>PS</Avatar></Grid>
        <Grid item>
          <Grid container direction={"column"}>
            <Grid item><Typography className={classes.userName}>Prabhat Suthar</Typography></Grid>
            <Grid item><Typography className={classes.userDetail}>+91 9586253639 * sutharprabhat@gmail.com</Typography></Grid>
            {/* <Grid item>View Detail</Grid> */}
          </Grid>
        </Grid>
      </Grid>
      <Divider />
      <Grid container className={classes.menuWrapper} justify={"space-between"}>
        <Grid item >
          <Button variant={"contained"} className={classes.btnMenu} component={NavLink} to="/account/orders">
            <Grid container justify={"center"} alignItems={"center"}>
              <Grid item><LocalMallRounded /></Grid>
              <Grid item>Orders</Grid>
            </Grid>
          </Button>
        </Grid>
        <Grid item >
          <Button variant={"contained"} className={classes.btnMenu} component={NavLink} to="/account/addresses">
            <Grid container justify={"center"} alignItems={"center"}>
              <Grid item><ContactMailRounded /></Grid>
              <Grid item>Address</Grid>
            </Grid>
          </Button>
        </Grid>
        <Grid item >
          <Button variant={"contained"} className={classes.btnMenu} component={NavLink} to="/account/payments">
            <Grid container justify={"center"} alignItems={"center"}>
              <Grid item><PaymentRounded /></Grid>
              <Grid item>Payment</Grid>
            </Grid>
          </Button>
        </Grid>
        <Grid item >
          <Button onClick={logout} variant={"contained"} className={classes.btnMenu}>
            <Grid container justify={"center"} alignItems={"center"}>
              <Grid item><ContactMailRounded /></Grid>
              <Grid item>Logout</Grid>
            </Grid>
          </Button>
        </Grid>
      </Grid>
      <FullScreenDialog open={open} heading={heading} handleOpen={handleOpen} >
        <Container>
          <Grid container>
            {heading}
          </Grid>
        </Container>
      </FullScreenDialog>
    </MyContainer >
  )
}
