import React, { useState, useEffect } from 'react'
import { styled, Container, Button, Grid, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import CategoryAndProduct from './CategoryAndProduct';
import { useAppState } from '../../context';
import Slider from "react-slick";

const MyContainer = styled(Container)({
  paddingBottom: "90px",
  marginTop: "210px",
});



const useStyles = makeStyles((theme) => ({
  rightSideAds: { width: "100%", height: "100%", marginTop: 10, backgroundColor: "#F2F2F2" },
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
      {
        store && store !== null && <>
          {/* <StoreBanner storeLogo={store.image} storeName={store.name} storeInfo={store.tags.join(" · ")} /> */}
          <MyContainer maxWidth={"lg"} fixed={true}>
            <Grid container >
              <Grid item xs={9}>
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
              </Grid>
              <Grid item xs={3}>
                <div className={classes.rightSideAds}>Add section</div>
              </Grid>
            </Grid>
          </MyContainer>
        </>
      }

    </React.Fragment>
  )
}
export default Store;