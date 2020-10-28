import React, { useEffect } from 'react'
import Header from './Header'
import { styled, IconButton, makeStyles } from '@material-ui/core'
import { withRouter, useLocation } from 'react-router-dom';
import { KeyboardArrowUpRounded } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
    position: "fixed",
    right: "30px",
    bottom: "90px",
    color: "#ffffff",
    borderRadius: "50%",
    cursor: "pointer",
    display: "none",
    fontSize: "2.5rem",
  }
}));

function Layout({ history, children }) {
  const { pathname } = useLocation();
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0);
    window.onscroll = function () { myFunction() };
    function myFunction() {
      if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        document.getElementById("scrollToTop").style.display = "block"
      } else {
        document.getElementById("scrollToTop").style.display = "none"
      }
    }
  }, [pathname]);

  return (
    <React.Fragment>
      <Header />
      {children}
      <IconButton onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <KeyboardArrowUpRounded className={classes.root} id="scrollToTop" ></KeyboardArrowUpRounded>
      </IconButton>
    </React.Fragment >
  )
}

export default Layout
