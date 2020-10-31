import React, { useEffect, useState } from 'react'
import { SwipeableDrawer, Container, Grid, Paper, makeStyles, Button, Typography, TextField } from '@material-ui/core';
import { NavLink, withRouter } from 'react-router-dom';
import { useAppState } from '../../context';
import { LocationOnRounded } from '@material-ui/icons';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useCookies } from 'react-cookie';


const useStyles = makeStyles((theme) => ({
  storeDrawerHeight: {
    height: "calc(100vh - 120px)"
  },
  storeContainer: {
    padding: "0 20px"
  },
  storeImage: {
    [theme.breakpoints.down(768)]: {
      height: 70,
      width: 70,
    },
  },
  right: {
    flexDirection: "row",
    [theme.breakpoints.up(768)]: {
      justifyContent: "center"
    }
  },
  storeTags: {
    fontSize: 12
  },
  storeName: {
    [theme.breakpoints.up(768)]: {
      fontSize: "100%"
    }
  },
  storeCard: {
    [theme.breakpoints.down(768)]: {
      width: "100%"
    }
  },
  meta: {
    [theme.breakpoints.up(768)]: {
      flexDirection: "column",
      alignItems: "center"
    }
  },
  chooseStore: {
    margin: "10px 0",
    position: "relative",
    textAlign: "center",
    fontSize: 18,
    fontWeight: 700
  }
}));


const StoreListing = (props) => {
  const classes = useStyles();
  const { openStore, toggleStore, location, toggleLocation, locations, getLocations, setLocation } = useAppState("useGlobal");
  const { stores } = useAppState("useStore");

  useEffect(() => {
    getLocations()
  }, [])


  return (
    <SwipeableDrawer
      disableSwipeToOpen={true}
      anchor={"bottom"}
      open={openStore}
      onClose={() => toggleStore()}
      onOpen={() => toggleStore()}
      // style={{ height: `440px` }}
      classes={{
        paperAnchorBottom: classes.storeDrawerHeight
      }}
    >
      <Container className={classes.storeContainer}>
        <Grid container direction={"column"}>
          <Grid item>
            <Typography className={classes.chooseStore}> Choose a store </Typography>
          </Grid>
          <Grid item>
            {/*  <Button color={"primary"} variant={"contained"} style={{ width: "100%" }} onClick={() => toggleLocation()}>
              <Grid container justify={"space-between"}>
                <Grid item>
                  {location?.area_name}
                </Grid>
                <Grid item>
                  <LocationOnRounded />
                </Grid>
              </Grid> 
            </Button>*/}
            <Autocomplete
              defaultValue={location}
              classes={{ root: classes.inputFocused }}
              style={{ width: "100%", outline: "none" }}
              id="locations"
              color={"secondary"}
              options={locations}
              getOptionLabel={(option) => `${option.area_pincode} - ${option.area_name}`}
              onChange={(event, newValue) => {
                setLocation(newValue)
              }}
              renderInput={(params) => <TextField
                {...params}
                color={"secondary"}
                required
                fullWidth
                // label=""
                style={{ background: "#fff", borderColor: "#fff", }}
                variant="outlined" />
              }
            />
          </Grid>
        </Grid>
        <Grid container>
          {
            stores.map((store, index) =>
              <Grid item xs={12} sm={3} key={index}>
                <Button className={classes.storeCard} onClick={() => { props.history.push(`/store/${store.slug}`); toggleStore(); }} >
                  <Grid container className={classes.right} direction={"column"} alignItems={"center"} spacing={2}>
                    <Grid item><img src={store.image || ""} className={classes.storeImage} alt="store" height="100" width="100" /></Grid>
                    <Grid item>
                      <Grid className={classes.meta} container direction={"column"} alignItems={"flex-start"} justify={"flex-start"}>
                        <Grid item>
                          <h3 className={classes.storeName}>{store.name}</h3>
                        </Grid>
                        <Grid item>
                          <span className={classes.storeTags}>{store.tags.join(" • ")}</span>
                        </Grid>
                      </Grid>
                    </Grid>
                    {/* <Grid item>{store.type}</Grid> */}
                  </Grid>
                </Button>
              </Grid>
            )
          }
        </Grid>
      </Container>
    </SwipeableDrawer>
  )
  // }
}
export default withRouter(StoreListing)