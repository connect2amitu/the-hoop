import React, { useState } from 'react'
import { AppBar, Toolbar, Button, Grid, IconButton, SwipeableDrawer, Badge, Fab, Dialog, Typography, List, ListItem, ListItemText, Divider, Slide, TextField, Tabs, Tab, ListItemIcon } from '@material-ui/core'
import { NavLink, withRouter } from 'react-router-dom'
import { MenuRounded, LocationOnRounded, ShoppingCartRounded, StorefrontRounded, Brightness1Rounded, Brightness3Rounded, SearchRounded, NightsStayRounded, WbSunnyRounded, ViewModuleRounded, ShoppingBasketRounded, PersonRounded, CloseRounded, ArrowLeftRounded, KeyboardArrowLeftRounded, RoundedCorner, AccountCircleRounded, AccountCircleOutlined, Notifications, NotificationsActiveRounded, NotificationsRounded } from '@material-ui/icons'
import { green } from '@material-ui/core/colors';



import { makeStyles } from '@material-ui/core/styles';
import StoreListing from '../../views/Store/StoreListing';
import Cart from '../../views/Cart';
import { useAppState } from '../../context';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import FormDialog from '../Location';

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "#f8f9fa !important",
    color: "#000",
    padding: "10px",
    [theme.breakpoints.down('sm')]: {
      padding: "5px 10px",
    },
  },
  appBarForSearch: {
    position: 'relative',
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  desktop: {
    display: "block",
    [theme.breakpoints.down(768)]: {
      display: "none",
    },
  },
  mobile: {
    display: "none",
    [theme.breakpoints.down(768)]: {
      display: "block",
    },
  },
  mobileDrawer: {
    width: 250
  },
  textAlignCenter: {
    textAlign: "center"
  },
  logoSection: {
    display: "flex",
    alignItems: "center",
    position: "relative"
  },
  logo: {
    height: "75px",
    width: "75px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain",

    position: "absolute",
    bottom: "-42px",
    [theme.breakpoints.down(768)]: {
      bottom: "-37px",
      width: "65px",
      height: "65px",
    },
  },
  contact: {
    position: "absolute",
    bottom: 35,
    textAlign: "center",
    width: "100%",
    "& a": {
      color: "inherit",
    }
  },
  storeDrawerHeight: {
    height: "calc(100vh - 120px)"
  },
  storeContainer: {
    padding: "20px 0"
  },
  myCartPaper: {
    width: "520px",
    padding: "0 10px",
    [theme.breakpoints.down(768)]: {
      width: "100%",
    },
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
  rightSideDrawer: {
    width: 260
  },
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  }
}));


const Header = (props) => {

  console.log('props =>', props);

  const [open, setOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [stores, setStores] = useState(false);
  const classes = useStyles();
  const { toggleCart, toggleStore, location, toggleLocation } = useAppState("useGlobal");
  const { verifyToken } = useAppState("useAuth");
  const { cart, cart_items } = useAppState("useCart");
  const { store } = useAppState("useStore");


  useEffect(() => {
    if (!location) {
      props.history.push("/location")
    }
  }, [])

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const hideHeader = () => {
    return !props.location.pathname.match(/(login|location)/)
  }

  return (
    <>
      {hideHeader() && <AppBar position="fixed" className={classes.appbar}>
        {/* <Toolbar> */}
        <Grid container justify={"space-between"} alignItems={"center"}>
          {!props.location.pathname.includes('store') && <Grid item className={classes.logoSection}>
            <NavLink to={"/"} color={"inherit"} style={{ textDecoration: "none" }}>
              <img src={require('../../assets/images/logo/thehooplogo.svg')} alt=""
                style={{
                  height: "40px",
                  width: "100px",
                  backgroundRepeat: "no-repeat"
                }}
              />
            </NavLink>
          </Grid>}
          {props.location.pathname.includes('store') &&
            <>
              <Grid item className={classes.mobile}>
                <Button color="inherit" onClick={() => toggleLocation()}><LocationOnRounded /> {location?.area_name}</Button>
              </Grid>

            </>

          }
          <Grid item className={classes.desktop}>
            <Grid container spacing={1} justify={"flex-end"} alignItems={"center"}>
              <Grid item>
                <Button color="inherit" onClick={() => toggleStore()} ><StorefrontRounded /> Store</Button>
              </Grid>
              <Grid item>
                <Button color="inherit" onClick={() => toggleLocation()}><LocationOnRounded /> {location?.area_name}</Button>
              </Grid>
              <Grid item>
                <Badge color="secondary" badgeContent={cart.count} showZero>
                  <Button variant={"contained"} onClick={() => toggleCart()} color="primary">
                    <ShoppingCartRounded />
                     My Cart</Button>
                </Badge>
              </Grid>
              {!verifyToken() && <Grid item>
                <Button component={NavLink} to="/login" color="secondary" variant={"contained"}> Login</Button>
              </Grid>}
              {verifyToken() && <Grid item>
                <Button component={NavLink} to="/account" color="secondary" variant={"contained"}> Account</Button>
              </Grid>}
            </Grid>
          </Grid>
          <Grid item className={classes.mobile}>

            <Grid container spacing={2} alignItems={"center"}>
              <Grid item >
                <IconButton color={"secondary"}><NotificationsRounded /></IconButton>
              </Grid>
              {/* <Grid item>
                <Badge color="primary" badgeContent={cart.count} showZero>
                  <ShoppingCartRounded onClick={() => toggleCart()} />
                </Badge>
              </Grid> */}
              {/* <Grid item>
                  <Button color="inherit" onClick={() => toggleStore()} ><StorefrontRounded /> Store</Button>
                </Grid> */}
              {/* <Grid item>
                <Button color="inherit" onClick={() => toggleLocation()}><LocationOnRounded /> {location?.area_name}</Button>
              </Grid> */}
              {/* <Grid item>
                <IconButton onClick={handleDrawerToggle}><MenuRounded style={{ fill: "#000" }} /></IconButton>
              </Grid> */}
            </Grid>
            {/* <SwipeableDrawer
              anchor={"right"}

              open={mobileOpen}
              onClose={handleDrawerToggle}
              onOpen={handleDrawerToggle}
            >
              <List classes={{ root: classes.rightSideDrawer }}>
                <ListItem button>
                  <ListItemIcon>{<StorefrontRounded />}</ListItemIcon>
                  <ListItemText primary={"Store"} />
                </ListItem>

                <ListItem button onClick={() => { toggleLocation(); handleDrawerToggle() }}>
                  <ListItemIcon>{<LocationOnRounded />}</ListItemIcon>
                  <ListItemText primary={location?.area_name} />
                </ListItem>
                <ListItem button onClick={() => { toggleCart(); handleDrawerToggle() }}>
                  <ListItemIcon>{
                    <Badge color="secondary" badgeContent={cart.count} showZero><ShoppingCartRounded /></Badge>}</ListItemIcon>
                  <ListItemText primary={`My Cart`} />

                </ListItem>
                {!verifyToken() && <ListItem button component={NavLink} onClick={() => handleDrawerToggle()} to="/login" >
                  <ListItemIcon>{<AccountCircleRounded />}</ListItemIcon>
                  <ListItemText primary={"Login"} />
                </ListItem>}
                {verifyToken() && <ListItem button component={NavLink} to="/account" onClick={() => handleDrawerToggle()}  >
                  <ListItemIcon>{<AccountCircleRounded />}</ListItemIcon>
                  <ListItemText primary={"Account"} />
                </ListItem>}
              </List>
            </SwipeableDrawer> */}
            {props.location.pathname.includes('store') &&
              <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Toolbar>
                  <Grid container spacing={0} justify={"space-evenly"}>
                    <Grid item>
                      <Grid container alignItems={"center"} direction={"column"} onClick={() => toggleStore()}>
                        <Grid item><StorefrontRounded /> </Grid>
                        <Grid item><span>Store</span></Grid>
                      </Grid>
                    </Grid>

                    <Grid item>
                      <Grid container alignItems={"center"} direction={"column"} onClick={() => props.history.push(`/store/${store.slug}/departments`)} >
                        <Grid item><ViewModuleRounded /> </Grid>
                        <Grid item><span>Department</span></Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid container alignItems={"center"} direction={"column"} onClick={() => toggleCart()} >
                        <Badge badgeContent={cart_items.length} color="secondary"><Grid item><ShoppingBasketRounded /></Grid></Badge>
                        <Grid item><span>Cart</span></Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid container alignItems={"center"} direction={"column"} onClick={() => props.history.push(`${verifyToken() ? `/account` : `/login`}`)} >
                        <Grid item><AccountCircleRounded /> </Grid>
                        <Grid item><span>Profile</span></Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Toolbar>
              </AppBar>
            }
          </Grid>
        </Grid>
        {/* </Toolbar> */}
      </AppBar>
      }
      <Cart />

      {/* store */}
      <StoreListing classes={classes} stores={stores} setStores={setStores} />

      {/* Location */}
      <FormDialog />

      {/* Search */}
      <Dialog fullScreen open={open} onClose={handleClose}>
        {<AppBar className={classes.appBarForSearch}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <KeyboardArrowLeftRounded />
            </IconButton>
            <TextField fullWidth variant="standard" required id="standard-required" label="" defaultValue="" />
          </Toolbar>
        </AppBar>}
      </Dialog>
      {hideHeader() && <Toolbar />}
    </>
  )
}

export default withRouter(Header)