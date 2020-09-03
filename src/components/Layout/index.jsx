import React, { useEffect } from 'react'
import Header from './Header'
import { styled, IconButton } from '@material-ui/core'
import { withRouter, useLocation } from 'react-router-dom';
import { KeyboardArrowUpRounded } from '@material-ui/icons';

const ScrollToTop = styled(KeyboardArrowUpRounded)({
  position: "fixed",
  right: "30px",
  bottom: "90px",
  background: "#f00",
  color: "#ffffff",
  borderRadius: "50%",
  cursor: "pointer",
  display: "none",
  fontSize: "2.5rem"
});



function Layout({ history, children }) {
  const { pathname } = useLocation();

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
        <ScrollToTop id="scrollToTop" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}></ScrollToTop>
      </IconButton>
    </React.Fragment >
  )
}

export default withRouter(Layout)
