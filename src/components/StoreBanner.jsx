import React from 'react'
import classes from '../assets/scss/StoreBanner.module.scss'
import { Grid, Avatar } from '@material-ui/core';

export default function StoreBanner(props) {
  const { storeName = "No Name", storeInfo = "no info for now", storeLogo = "" } = props

  return (
    <React.Fragment>
      <div className={classes.storeBanner}>
        <div className={classes.overLay}></div>
        <div className={classes.banner} style={{ backgroundImage: `url(${require('../assets/images/storeBanner.png')})` }} />
        <Grid container className={classes.innerWrapper} direction={"column"} justify={"center"} alignItems={"center"}>
          <Grid item>
            <Avatar className={classes.logo} src={storeLogo} />
          </Grid>
          <Grid item className={classes.storefront}>
            <h1 >{storeName}</h1>
          </Grid>
          <Grid item className={classes.storeInfo}>
            <span><b>{storeInfo}</b></span>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  )
}
