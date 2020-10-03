import React, { useState, useEffect } from 'react'
import { styled, Container, Button, Grid, makeStyles, Avatar, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import CategoryAndProduct from './CategoryAndProduct';
import { useAppState } from '../../context';
import Slider from "react-slick";
import StoreBanner from '../../components/StoreBanner'
const MyContainer = styled(Container)({
  paddingBottom: "90px",
  marginTop: "210px",
  padding: 15
});


// const categorySettings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   autoplay: true,
//   slidesToShow: 6,
//   slidesToScroll: 6,
//   responsive: [
//     {
//       breakpoint: 3000,
//       settings: {
//         slidesToShow: 4,
//         slidesToScroll: 4,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 2000,
//       settings: {
//         slidesToShow: 6,
//         slidesToScroll: 6,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 1800,
//       settings: {
//         slidesToShow: 4,
//         slidesToScroll: 4,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 1500,
//       settings: {
//         slidesToShow: 5,
//         slidesToScroll: 5,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 4,
//         slidesToScroll: 4,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         initialSlide: 3
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     }
//   ]
// };




const useStyles = makeStyles((theme) => ({
  rightSideAds: { width: "100%", height: "100%", marginTop: 10, backgroundColor: "#F2F2F2" },
  categoryItem: {
    height: "100px",
    width: "100px",
    borderRadius: 10,
    outline: "none",
    margin: "0 auto"
  },
  categorySlider: { marginTop: 15, padding: "0 20px" },
  tCenter: { textAlign: "center" },
}));


const Store = (props) => {
  const { store, getStoreBySlug } = useAppState("store");
  const classes = useStyles();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  useEffect(() => {
    if (!props.match.params.storeName) {
      props.history.push("/store/thehoop");
    } else {
      getStoreBySlug(props.match.params.storeName)
    }
  }, [props.match.params.storeName, props.history])
  return (
    <React.Fragment>
      {store && <StoreBanner storeLogo={store.image} storeName={store.name} storeInfo={store.tags.join(" · ")} />}
      <MyContainer maxWidth={"lg"} fixed={true}>
        <Grid container wrap={"nowrap"} style={{ overflow: "scroll hidden" }}>
          <Grid item={12}>
            <Typography variant={"h4"}>Departments</Typography>
          </Grid>
        </Grid>
        <Grid container wrap={"nowrap"} style={{ overflow: "scroll hidden" }}>
          {
            [...new Array(15)].map(o =>
              <Grid item style={{ padding: "15px 5px" }} >
                <Button style={{ backgroundImage: `url(${require("../../assets/images/storeBanner.png")})` }} className={classes.categoryItem} alt="sdfgdg" />
                <Typography variant={"body1"} className={classes.tCenter} >Snack</Typography>
              </Grid>
            )
          }
        </Grid>
        {
          store?.categories && <>
            <Grid container spacing={2} direction={"column"} alignItems={"center"} justify={"center"}>
              <Grid item xs={12}>
                <CategoryAndProduct category={store.categories[0]} store={store} />
              </Grid>
              {store.categories.slice(1).map((category, index) =>
                <Grid item xs={12}>
                  <CategoryAndProduct key={index} category={category} store={store} />
                </Grid>
              )}
            </Grid>
          </>
        }
      </MyContainer>

    </React.Fragment >
  )
}
export default Store;