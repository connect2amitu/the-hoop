import React from 'react'
import { SwipeableDrawer, Container, Grid, Paper, makeStyles, Button } from '@material-ui/core';
import { NavLink, withRouter } from 'react-router-dom';
import { useAppState } from '../../context';


const useStyles = makeStyles((theme) => ({
  storeDrawerHeight: {
    height: "calc(100vh - 120px)"
  },
  storeContainer: {
    padding: "20px"
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
  }
}));


const StoreListing = (props) => {
  const classes = useStyles();
  const { openStore, toggleStore } = useAppState("useGlobal");
  const { stores } = useAppState("useStore");

  return (
    <SwipeableDrawer
      disableSwipeToOpen="false"
      anchor={"bottom"}
      open={openStore}
      onClose={() => toggleStore()}
      onOpen={() => toggleStore()}
      style={{ height: `440px` }}
      classes={{
        paperAnchorBottom: classes.storeDrawerHeight
      }}
    >
      <Container className={classes.storeContainer}>
        <Grid container>
          {
            stores.map((store, index) =>
              <Grid item xs={12} sm={3} key={index}>
                <Button className={classes.storeCard} onClick={() => { props.history.push(`/store/${store.slug}`); toggleStore(); }} >
                  <Grid container className={classes.right} direction={"column"} alignItems={"center"} spacing={2}>
                    <Grid item><img src={store.image} className={classes.storeImage} alt="store" height="100" width="100" /></Grid>
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