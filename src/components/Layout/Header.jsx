import React, { useRef, useState } from 'react'
import { AppBar, Toolbar, Button, Grid, IconButton, SwipeableDrawer, Badge, Fab, Dialog, Typography, List, ListItem, ListItemText, Divider, Slide, TextField, Tabs, Tab, ListItemIcon, Popper, Grow, Paper, ClickAwayListener, MenuList, MenuItem, Fade, Zoom, CircularProgress } from '@material-ui/core'
import { NavLink, withRouter } from 'react-router-dom'
import { MenuRounded, LocationOnRounded, ShoppingCartRounded, StorefrontRounded, Brightness1Rounded, Brightness3Rounded, SearchRounded, NightsStayRounded, WbSunnyRounded, ViewModuleRounded, ShoppingBasketRounded, PersonRounded, CloseRounded, ArrowLeftRounded, KeyboardArrowLeftRounded, RoundedCorner, AccountCircleRounded, AccountCircleOutlined, Notifications, NotificationsActiveRounded, NotificationsRounded, HomeRounded, KeyboardArrowDown } from '@material-ui/icons'
import { green } from '@material-ui/core/colors';
import cls from 'classnames'


import { makeStyles } from '@material-ui/core/styles';
import StoreListing from '../../views/Store/StoreListing';
import Cart from '../../views/Cart';
import { useAppState } from '../../context';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import FormDialog from '../Location';
import { Skeleton } from '@material-ui/lab';

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
  },
  storeDetail: {
    textAlign: "center"
  },
  storeName: {
    fontSize: 15,
    margin: 0,
    paddingLeft: 15,
    fontWeight: 600,
    color: theme.palette.primary.main
  },
  chooseZip: {
    fontSize: 11,
    color: `${theme.palette.secondary.main}`
  }
}));


const Header = (props) => {

  console.log('props =>', props);

  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [stores, setStores] = useState(false);
  const classes = useStyles();
  const { toggleCart, toggleStore, location, toggleLocation, openStoreDetailBox, toggleStoreDetailBox } = useAppState("useGlobal");


  const { verifyToken } = useAppState("useAuth");
  const { cart, cart_items } = useAppState("useCart");
  const { store, isLoading } = useAppState("useStore");
  const anchorRef = useRef(null);


  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);



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


  const hideHeader = () => {
    return !props.location.pathname.match(/(login|location)/)
  }


  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }


  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };


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
                <IconButton component={NavLink} to="/stores" color={"secondary"}><HomeRounded /></IconButton>
              </Grid>
              <Grid item className={classes.storeDetail}>
                {!isLoading ?
                  <Grid container alignItems={"flex-start"}>
                    <Grid item>
                      <Typography className={classes.storeName} onClick={() => toggleStore()}>{store && store.name}</Typography>
                    </Grid>
                    <Grid item><KeyboardArrowDown color={"primary"} /> </Grid>
                  </Grid>
                  : <Typography className={classes.storeName}><Skeleton variant="text" /></Typography>
                }
                <p className={cls(classes.chooseZip, classes.storeName)} >Delivery in {location?.area_pincode}</p>
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
                <IconButton color={"secondary"}
                  ref={anchorRef}
                  aria-controls={open ? 'menu-list-grow' : undefined}
                  aria-haspopup="true"
                  onClick={handleToggle}
                ><NotificationsRounded /></IconButton>
                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList style={{ width: 320 }} autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                            <MenuItem onClick={handleClose}>Order #5894565 Confirmed</MenuItem>
                            <MenuItem onClick={handleClose}>Notifications 123</MenuItem>
                            <MenuItem onClick={handleClose}>Notifications 123</MenuItem>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </Grid>
            </Grid>

            {props.location.pathname.includes('store') &&
              <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Toolbar>
                  <Grid container spacing={0} justify={"space-evenly"}>
                    {/* <Grid item>
                      <Grid container alignItems={"center"} direction={"column"} onClick={() => toggleStore()}>
                        <Grid item><StorefrontRounded /> </Grid>
                        <Grid item><span>Store</span></Grid>
                      </Grid>
                    </Grid> */}

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

      {/* Cart */}
      <Cart />

      {/* store */}
      <StoreListing classes={classes} stores={stores} setStores={setStores} />

      {/* Location */}
      <FormDialog />

      {/* Search */}
      {/* <Dialog fullScreen open={openStoreDetailBox} onClose={toggleStoreDetailBox} TransitionComponent={Fade}>
        {<AppBar className={classes.appBarForSearch}>
          <Toolbar>
            <Grid container justify={"space-between"} alignItems={"center"}>
              <Grid item>
                <Button color="inherit" onClick={() => toggleLocation()}><LocationOnRounded /> {location?.area_name}</Button>
              </Grid>
              <Grid item>
                <IconButton edge="start" color="inherit" onClick={toggleStoreDetailBox} aria-label="close">
                  <CloseRounded />
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>}
      </Dialog> */}

      { hideHeader() && <Toolbar />}
    </>
  )
}

export default withRouter(Header)