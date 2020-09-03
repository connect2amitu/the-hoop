import React, { useState } from 'react'
import { AppBar, Toolbar, Button, Grid, IconButton, SwipeableDrawer, Badge, Fab } from '@material-ui/core'
import { NavLink, withRouter } from 'react-router-dom'
import { MenuRounded, LocationOnRounded, ShoppingCartRounded, StorefrontRounded, Brightness1Rounded, Brightness3Rounded, SearchRounded, NightsStayRounded, WbSunnyRounded, ViewModuleRounded, ShoppingBasketRounded, PersonRounded } from '@material-ui/icons'
import { green } from '@material-ui/core/colors';



import { makeStyles } from '@material-ui/core/styles';
import StoreListing from '../../views/Store/StoreListing';
import Cart from '../../views/Cart';
import { useAppState } from '../../context';
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: theme.palette.primary.main,
    },
    [theme.breakpoints.up('lg')]: {
      backgroundColor: green[500],
    },
  },
  appbar: {
    background: "#f8f9fa !important",
    color: "#000"
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
    [theme.breakpoints.down(600)]: {
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
    [theme.breakpoints.down(600)]: {
      width: "100%",
    },
  },
  appBar: {
    top: 'auto',
    bottom: 0,
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
}));


function Header(props) {
  const { toggleCart, toggleStore } = useAppState("global");
  const { isLoggedIn } = useAppState("userAuth");

  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [myCart, setMyCart] = useState(false);
  const [stores, setStores] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar>
          <Grid container justify={"space-between"} alignItems={"center"}>
            <Grid item className={classes.logoSection}>
              <NavLink to={"/"} color={"inherit"} style={{ textDecoration: "none" }}>
                <img src={require('../../assets/images/logo/thehooplogo.svg')} alt=""
                  style={{
                    height: "30px",
                    width: "90px",
                    backgroundRepeat: "no-repeat"
                  }}
                />
              </NavLink>
              {/* <Typography variant="h6" component={NavLink} to={"/"} color={"inherit"} style={{ textDecoration: "none" }} > Hoop </Typography> */}
            </Grid>
            <Grid item className={classes.desktop}>
              <Grid container spacing={1} alignItems={"center"}>
                <Grid item>
                  <Button color="inherit" onClick={() => toggleStore()} ><StorefrontRounded /> Store</Button>
                </Grid>
                <Grid item>
                  <Button color="inherit"><LocationOnRounded /> Varachha road</Button>
                </Grid>
                <Grid item>
                  <Badge color="secondary" badgeContent={15} showZero>
                    <Button variant={"contained"} onClick={() => toggleCart()} color="primary">
                      <ShoppingCartRounded />
                     My Cart</Button>
                  </Badge>
                </Grid>
                {!isLoggedIn && <Grid item>
                  <Button component={NavLink} to="/login" color="secondary" variant={"contained"}> Login</Button>
                </Grid>}
              </Grid>
            </Grid>
            <Grid item className={classes.mobile}>
              <IconButton onClick={handleDrawerToggle}><MenuRounded style={{ fill: "#000" }} /></IconButton>
              <SwipeableDrawer
                anchor={"right"}
                open={mobileOpen}
                onClose={handleDrawerToggle}
                onOpen={handleDrawerToggle}
              >
                <Grid container spacing={1} direction={"column"}>
                  <Grid item>
                    <Button color="inherit" onClick={() => { toggleStore(); handleDrawerToggle() }} ><StorefrontRounded /> Store</Button>
                  </Grid>
                  <Grid item>
                    <Button color="inherit"><LocationOnRounded /> Varachha road</Button>
                  </Grid>
                  <Grid item>
                    <Badge color="secondary" badgeContent={15} showZero>
                      <Button variant={"contained"} onClick={() => { toggleCart(); handleDrawerToggle() }} color="primary"> <ShoppingCartRounded /> My Cart</Button>
                    </Badge>
                  </Grid>
                  {!isLoggedIn && <Grid item>
                    <Button component={NavLink} onClick={() => handleDrawerToggle()} to="/login" color="secondary" variant={"contained"}> Login</Button>
                  </Grid>}
                </Grid>
              </SwipeableDrawer>
              <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Toolbar>
                  <Grid container spacing={2} justify={"space-evenly"}>
                    <Grid item><IconButton edge="start" color={"inherit"} > <StorefrontRounded onClick={() => toggleStore()} /> </IconButton></Grid>
                    <Grid item><IconButton color={"inherit"}> <SearchRounded /> </IconButton></Grid>
                    <Grid item><IconButton color={"inherit"}> <ViewModuleRounded /> </IconButton></Grid>
                    <Grid item><IconButton color={"inherit"}> <ShoppingBasketRounded onClick={() => toggleCart()} /> </IconButton></Grid>
                    <Grid item><IconButton color={"inherit"} component={NavLink} to="/account"> <PersonRounded /> </IconButton></Grid>
                  </Grid>
                </Toolbar>
              </AppBar>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Cart />

      {/* store */}
      <StoreListing classes={classes} stores={stores} setStores={setStores} />
      <Toolbar />
    </>
  )
}

export default withRouter(Header)