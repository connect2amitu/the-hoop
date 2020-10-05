import React, { useState, useEffect } from 'react'
import { styled, Container, Button, Grid, makeStyles, Avatar, Typography, CircularProgress } from '@material-ui/core';
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
    height: "100px",
    width: "100px",
    borderRadius: 10,
    outline: "none",
    margin: "0 auto",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  categorySlider: { marginTop: 15, padding: "0 20px" },
  tCenter: { textAlign: "center" },
  loader: {
    position: "absolute",
    left: "45%",
    top: "42%",
  },
}));


const Store = (props) => {
  const { store, getStoreBySlug, isLoading, departments, getStoreDepartment } = useAppState("useStore");
  const classes = useStyles();
  console.log('departments =>', departments)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  useEffect(() => {
    getStoreBySlug(props.match.params.storeName)
    getStoreDepartment()
  }, [props.match.params.storeName])
  console.log('store =>', store)


  return (
    <React.Fragment>
      {!isLoading && store && <StoreBanner storeLogo={store.image} storeName={store.name} storeInfo={store.tags.join(" · ")} />}
      {!isLoading ? <MyContainer maxWidth={"lg"} fixed={true}>
        <Grid container>
          <Grid item={12}>
            <Typography variant={"h4"}>Departments</Typography>
          </Grid>
        </Grid>
        <Grid container className={classes.categoryWrap}>
          {
            [...departments, ...departments].map((o, index) =>
              <Grid item style={{ padding: "15px 5px" }} >
                <Button style={{ backgroundImage: `url(http://lorempixel.com/400/200/cats/${index})` }} className={classes.categoryItem} alt="sdfgdg" />
                <Typography variant={"subtitle2"} className={classes.tCenter} >{o.category_name}</Typography>
              </Grid>

            )
          }
        </Grid>
        {
          store?.categories && <>
            <Grid container spacing={2} direction={"column"} alignItems={"flex-start"} justify={"center"}>
              <>
                <Grid item xs={12}>
                  <CategoryAndProduct category={store.categories[0]} store={store} />
                </Grid>
                <Grid item xs={12} style={{ width: "100%", textAlign: "center" }}>
                  <Button style={{ textAlign: "center" }} color={"primary"}
                    component={NavLink}
                    to={`/store/${`thehoop`}/departments/${store.categories[0].category_id}/${store.categories[0].slug}`} variant={"outlined"}>View more </Button>
                </Grid>
              </>
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