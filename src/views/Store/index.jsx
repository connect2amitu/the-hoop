import React, { useState, useEffect } from 'react'
import StoreBanner from '../../components/StoreBanner';
import { styled, Container, Button, Grid, CircularProgress, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import CategoryAndProduct from './CategoryAndProduct';
import { useAppState } from '../../context';
import Slider from "react-slick";

const MyContainer = styled(Container)({
  paddingBottom: "90px",
  marginTop: "10px",
});
const useStyles = makeStyles((theme) => ({
  loader: {
    position: "absolute",
    left: "49%",
    top: "50%",
  }
}));

const Store = (props) => {
  const { store, getStoreBySlug, getStoreDepartment, departments, isLoading } = useAppState("store");
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
    getStoreDepartment(props.match.params.storeName)
  }, [])

  return (
    <React.Fragment>
      {
        <>
          {/* <StoreBanner storeLogo={store.image} storeName={store.name} storeInfo={store.tags.join(" · ")} /> */}
          <MyContainer maxWidth={false} fixed={true}>
            {/* <Grid container spacing={2} justify={"center"}>
              <Grid item>
                <Button component={NavLink} color={"secondary"} to={`/store/${store.slug}/storefront`}>Home</Button>
              </Grid>
              <Grid item>
                <Button component={NavLink} to={`/store/${store.slug}/departments`}>Departments</Button>
              </Grid>
            </Grid> */}
            {/* <Container>
              <Slider {...settings}>
                <div>
                  <div style={{ backgroundImage: `url(https://thehoop.in/admin/banners/Slider/slider_groceries.jpg)`, height: "200px", width: "100%" }}></div>
                </div>
                <div>
                  <div style={{ backgroundImage: `url(https://thehoop.in/admin/banners/Slider/slider_groceries.jpg)`, height: "200px", width: "100%" }}></div>
                </div>
                <div>
                  <div style={{ backgroundImage: `url(https://thehoop.in/admin/banners/Slider/slider_groceries.jpg)`, height: "200px", width: "100%" }}></div>
                </div>
                <div>
                  <div style={{ backgroundImage: `url(https://thehoop.in/admin/banners/Slider/slider_groceries.jpg)`, height: "200px", width: "100%" }}></div>
                </div>
                <div>
                  <div style={{ backgroundImage: `url(https://thehoop.in/admin/banners/Slider/slider_groceries.jpg)`, height: "200px", width: "100%" }}></div>
                </div>
                <div>
                  <div style={{ backgroundImage: `url(https://thehoop.in/admin/banners/Slider/slider_groceries.jpg)`, height: "200px", width: "100%" }}></div>
                </div>
              </Slider>
            </Container> */}
            {
              isLoading && <CircularProgress className={classes.loader} />
            }
            <Grid container spacing={2} direction={"column"} alignItems={"center"} justify={"center"}>
              {/* {store.categories.map((category, index) =>
                <Grid item xs={12}>
                  <CategoryAndProduct key={index} category={category} store={store} />
                </Grid>
              )} */}

              {/* <Grid item xs={12}>
                
              </Grid> */}
              {
                departments.length > 0 && departments.map((product, index) =>
                  <CategoryAndProduct key={index} products={product} />
                )
              }
            </Grid>
          </MyContainer>
        </>
      }

    </React.Fragment>
  )
}
export default Store;