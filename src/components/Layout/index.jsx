import React, { useEffect } from 'react'
import Header from './Header'
import { IconButton, makeStyles } from '@material-ui/core'
import { useLocation } from 'react-router-dom';
import { KeyboardArrowUpRounded } from '@material-ui/icons';
import { ToastContainer } from 'react-toastify';


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
      <IconButton>
        <KeyboardArrowUpRounded className={classes.root} id="scrollToTop" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}></KeyboardArrowUpRounded>
      </IconButton>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </React.Fragment >
  )
}

export default Layout
