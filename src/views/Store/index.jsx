import React, { useEffect } from 'react'
import { styled, Container, Grid, CircularProgress, makeStyles } from '@material-ui/core';
import CategoryAndProduct from './CategoryAndProduct';
import { useAppState } from '../../context';
import Slider from "react-slick";

const MyContainer = styled(Container)({
  paddingBottom: "90px",
  marginTop: "10px",
  minHeight: "calc(100vh - 200px)"
});
const useStyles = makeStyles((theme) => ({
  loader: {
    position: "absolute",
    left: "49%",
    top: "50%",
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
  const { getStoreDepartment, departments, isLoading } = useAppState("store");
  const { banner, getBanner, isLoading: bannerLoader } = useAppState("banner");
  const classes = useStyles();

  useEffect(() => {
    getStoreDepartment(props.match.params.storeName)
    getBanner();
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 800,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <React.Fragment>
      {
        <>
          <MyContainer maxWidth={false} fixed={true}>
            <Slider {...settings}>
              {banner.map((ban, index) =>
                <div style={{ padding: 10 }}>
                  <img src={`https://thehoop.in/admin/${ban.image_url}`} className={classes.slickItem} alt="sdfgdg" />
                </div>
              )}
            </Slider>
            {
              isLoading && <CircularProgress className={classes.loader} />
            }
            <Grid container spacing={2} direction={"column"} alignItems={"center"} justify={"center"}>
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