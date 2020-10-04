import React, { useState, useEffect } from 'react'
import StoreBanner from '../../components/StoreBanner';
import { styled, Container, Button, Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import CategoryAndProduct from './CategoryAndProduct';
import { useAppState } from '../../context';
import Slider from "react-slick";

const MyContainer = styled(Container)({
  paddingBottom: "90px",
  marginTop: "210px",
});


const Store = (props) => {
  const { store, getStoreBySlug } = useAppState("useStore");
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
      {
        store && store !== null && <>
          <StoreBanner storeLogo={store.image} storeName={store.name} storeInfo={store.tags.join(" · ")} />
          <MyContainer maxWidth={false} fixed={true}>
            {/* <Grid container spacing={2} justify={"center"}>
              <Grid item>
                <Button component={NavLink} color={"secondary"} to={`/store/${store.slug}/storefront`}>Home</Button>
              </Grid>
              <Grid item>
                <Button component={NavLink} to={`/store/${store.slug}/departments`}>Departments</Button>
              </Grid>
            </Grid> */}
            <Container>
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
            </Container>
            <Grid container spacing={2} direction={"column"} alignItems={"center"} justify={"center"}>
              {store.categories.map((category, index) =>
                <Grid item xs={12}>
                  <CategoryAndProduct key={index} category={category} store={store} />
                </Grid>
              )}
            </Grid>
          </MyContainer>
        </>
      }

    </React.Fragment>
  )
}
export default Store;