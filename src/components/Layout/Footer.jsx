import classes from '../../assets/scss/Footer.module.scss'
import React from 'react'
import { Grid } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <section id="footer" className={classes.footerWraper}>
      <section className={classes.footer}>
        <Grid container alignItems={"center"} className={classes.main} >
          <Grid item xs={12} md={6} lg={4}>
            <Grid container alignItems={"flex-start"} >
              <Grid item xs={12}>
                <NavLink to={"/"} color={"inherit"} style={{ textDecoration: "none" }}>
                  <img src={require('../../assets/images/logo/thehooplogo.svg')} alt=""
                    style={{
                      height: "40px",
                      width: "100px",
                      backgroundRepeat: "no-repeat"
                    }}
                  />
                </NavLink>
              </Grid>
              <Grid item xs={12}> <span className={classes.quote}>India's Local Store</span> </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <Grid container >
              <Grid item>
                <Grid container spacing={2}>
                  <Grid item><NavLink className={classes.link} to="/about">About us</NavLink></Grid>
                  <Grid item><NavLink className={classes.link} to="/refund">Refund</NavLink></Grid>
                  <Grid item><NavLink className={classes.link} to="/terms-of-service">Terms of Service</NavLink></Grid>
                  <Grid item><NavLink className={classes.link} to="/delivery-policy">Delivery Policy</NavLink></Grid>
                  <Grid item><NavLink className={classes.link} to="/payment-policy">Payment Policy</NavLink></Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </section>
    </section>
  )
}
