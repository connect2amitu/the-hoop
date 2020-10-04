import { Avatar, Button, Container, Grid, makeStyles, styled, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import Slider from "react-slick";
import TouchRipple from '@material-ui/core/ButtonBase/TouchRipple';
import { NavLink } from 'react-router-dom';
import { useAppState } from '../../context';




const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1
};

const categorySettings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 6,
  slidesToScroll: 6,
  responsive: [
    {
      breakpoint: 3000,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 2000,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1800,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
};

const useStyles = makeStyles((theme) => ({
  mainContainer: { marginTop: 25 },
  loader: {
    position: "absolute",
    left: "49%",
    top: "50%",
  },
  slickItem: {
    maxWidth: "100%",
    height: "200px",
    width: "100%",
    borderRadius: 10,
    outline: "none",
    [theme.breakpoints.down('460')]: {
      height: 115
    },
    [theme.breakpoints.between('460', '960')]: {
      height: 123
    },
    [theme.breakpoints.between('460', '960')]: {
      height: 133
    },
  },
  categoryItem: {
    height: "100px",
    width: "180px",
    borderRadius: 10,
    outline: "none",
    margin: "0 auto"
    // padding: "0 5px"
  },
  videoContainer: { height: 300, overflow: "hidden" },
  videoSlider: {
    height: "100%",
    width: "100%",
    transform: "scale(2.4)"
  },
  categorySlider: { marginTop: 15 },
  shopCart: {
    display: "block",
    padding: 0,
    borderRadius: 12,
    position: "relative",
    backgroundColor: "#f1f1f1",
    marginTop: 10,
    marginBottom: 10,
    textTransform: "capitalize",
    fontSize: "12px",
    textAlign: "start",
    // height: 200,
    // boxShadow: "rgba(0, 0, 0, 0.16) 0px 2px 8px",
    // [theme.breakpoints.up('md')]: {
    //   width: "32%"
    // },
    // [theme.breakpoints.down('sm')]: {
    //   width: "45%",
    //   margin: 10,
    // },
    // [theme.breakpoints.down('xs')]: {
    //   width: "100%"
    // },
    "&:hover": {
      cursor: "pointer"
    },
    transition: "4s",
    "&:hover $shopTopBanner": {
      transform: "scale(1.2)",
      transition: "8.2s"
    }
  },
  bannerWrapper: {
    overflow: "hidden",
    width: "100%",
    height: 110,
    borderRadius: "12px 12px 0 0",
  },
  shopTopBanner: {
    height: 125,
    width: "100%",
    transition: "4s",
    "&:hover": {
      transform: "scale(1.2)",
      transition: "8.2s"
    }
  },
  storeProfile: { display: "flex", height: 74 },
  storeImage: {
    height: 70,
    width: 70,
    top: 90,
    left: 10,
    borderRadius: 7,
    position: "absolute",
  },
  storeDetail: { width: "75%", marginLeft: 90, },
  storeName: { margin: 0 },
  description: { margin: 0 },
  rightSideAds: { width: "100%", height: "100%", marginTop: 10, backgroundColor: "#F2F2F2" },
  heading: { margin: "28px 0 5px 0" },
  bannerAds: { width: "100%", height: 250, margin: "25px 0", backgroundColor: "#F2F2F2" },

}));


const Home = () => {
  const { stores } = useAppState("useStore");
  console.log('store =>', stores)


  const classes = useStyles();


  return (
    <Container maxWidth={"lg"} className={classes.mainContainer}>
      {/* <Grid container>
        <Grid item xs={12} className={classes.videoContainer}>
          <video className={classes.videoSlider} autoPlay loop>
            <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
            <source src="https://parachutemontreal.ca/workspace/uploads/accueil-slideshow/v2-1-.webm" type="video/webm" />
          </video>
        </Grid>
      </Grid> */}

      {/* <Slider {...categorySettings} className={classes.categorySlider}>
        {
          [...new Array(15)].map(o =>
            <div style={{ padding: 15 }}>
              <img src={require("../../assets/images/storeBanner.png")} className={classes.categoryItem} alt="sdfgdg" />
            </div>
          )
        }
      </Slider> */}
      <Grid container direction={"column"}>
        <Grid item={12}>
          <Typography variant={"h4"}>Stores</Typography>
        </Grid>
        <Grid item>
          <Grid container direction={"column"}>
            <Grid item xs={12}>
              <Grid container justify={"flex-start"} spacing={1}>
                {
                  stores && stores.map((o, index) =>
                    <Grid item xs={12} sm={6} md={3} key={index}>
                      <Button component={NavLink} to={`/store/${o.slug}`} className={classes.shopCart}>
                        < div >
                          <div className={classes.bannerWrapper}>
                            <img className={classes.shopTopBanner} src={`https://picsum.photos/300/100?random=${index}`} alt="test" />
                          </div>
                          <div className={classes.storeProfile}>
                            <img src={o.image} className={classes.storeImage} alt="testing" />
                            <div className={classes.storeDetail} >
                              <h3 className={classes.storeName} >{o.name}</h3>
                              <p className={classes.description} >{`description of the store ${o.name} and location of the store`}</p>
                            </div>
                          </div>
                        </div>
                      </Button>
                    </Grid>
                  )
                }
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid >
    </Container >
  )
}
export default Home;