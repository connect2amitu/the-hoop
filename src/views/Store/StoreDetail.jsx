import React, { useState, useEffect } from 'react'
import { styled, Container, Button, Grid, makeStyles, Avatar, Typography, CircularProgress } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import CategoryAndProduct from './CategoryAndProduct';
import { useAppState } from '../../context';
import Slider from "react-slick";
import StoreBanner from '../../components/StoreBanner'
import cls from 'classnames'
import MyContainer from '../../components/Layout/MyContainer';

//#region 
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

//#endregion


const useStyles = makeStyles((theme) => ({
  rightSideAds: { width: "100%", height: "100%", marginTop: 10, backgroundColor: "#F2F2F2" },
  categoryWrap: { overflow: "scroll hidden", flexWrap: "nowrap" },
  categoryItem: {
    height: "60px",
    width: "60px",
    borderRadius: 10,
    outline: "none",
    margin: "0 auto",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  categorySlider: { marginTop: 15, padding: "0 20px" },
  tCenter: { textAlign: "center" },
  categoryName: { fontSize: 10 },
  loader: {
    position: "absolute",
    left: "45%",
    top: "42%",
  },
  storeDetailWrapper: {
    marginTop: 200
  },
  slickItem: {
    maxWidth: "100%",
    height: "100%",
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
    // backgroundPosition: "center", backgroundSize: "cover", padding: "0 10px", height: 200, width: "100%", borderRadius: 7
  }
}));


const Store = (props) => {
  const { store, getStoreBySlug, isLoading, departments, getStoreDepartment } = useAppState("useStore");
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  useEffect(() => {
    getStoreBySlug(props.match.params.storeName)
    getStoreDepartment()
  }, [props.match.params.storeName])

  return (
    <React.Fragment>
      {!isLoading && store && <StoreBanner storeLogo={store.image || ""} storeName={store.name} storeInfo={store.tags.join(" · ")} />}
      {!isLoading ? <MyContainer style={{ margin: "200px auto 50px" }} maxWidth={"lg"} fixed={true}>
        <Grid container>
          <Slider {...settings}>
            {[...new Array(5)].map((o, index) =>
              <div style={{ margin: "0 20px", borderRadius: 10 }}>
                <img src={`https://placeimg.com/640/480/${index}`} className={classes.slickItem} alt="sdfgdg" />
              </div>
            )}
          </Slider>
        </Grid>
        <Grid container>
          <Grid item={12}>
            <Typography variant={"h4"}>Departments</Typography>
          </Grid>
        </Grid>
        <Grid container className={classes.categoryWrap}>
          {
            [...departments, ...departments].map((o, index) =>
              <Grid item style={{ padding: "15px 5px" }} >
                <Button style={{ backgroundImage: `url(https://placeimg.com/640/480/${index})` }} className={classes.categoryItem} alt="sdfgdg" />
                <Typography variant={"subtitle2"} className={cls(classes.tCenter, classes.categoryName)} >{o.category_name}</Typography>
              </Grid>

            )
          }
        </Grid>
        {
          store?.categories && <>
            <Grid container spacing={2} direction={"column"} alignItems={"flex-start"} justify={"center"}>
              {store.categories.slice(1).map((category, index) =>
                <>
                  <Grid item xs={12}>
                    <CategoryAndProduct key={index} category={category} store={store} />
                  </Grid>
                  <Grid item xs={12} style={{ width: "100%", textAlign: "center" }}>
                    <Button style={{ textAlign: "center" }} color={"primary"}
                      component={NavLink}
                      to={`/store/${`thehoop`}/departments/${category.category_id}/${category.slug}`} variant={"outlined"}>View more </Button>
                  </Grid>
                </>
              )}
            </Grid>
          </>
        }
      </MyContainer> : <CircularProgress className={classes.loader} />
      }
    </React.Fragment >
  )
}
export default Store;