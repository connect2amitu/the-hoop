import React, { useEffect } from 'react'
import { styled, Container, Grid, CircularProgress, makeStyles } from '@material-ui/core';
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
  },
  slickItem: {
    maxWidth: "100%",
    height: "100%",
    width: "100%",
    borderRadius: 10,
    outline: "none",
    [theme.breakpoints.down('sm')]: {
      height: 110
    },
    // backgroundPosition: "center", backgroundSize: "cover", padding: "0 10px", height: 200, width: "100%", borderRadius: 7
  }
}));

const Store = (props) => {
  const { getStoreDepartment, departments, isLoading } = useAppState("store");
  const classes = useStyles();

  useEffect(() => {
    getStoreDepartment(props.match.params.storeName)
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
            {/* <Container> */}
            <Slider {...settings}>
              <div style={{ padding: 10 }}>
                {/* <div className={classes.slickItem} style={{ backgroundImage: `url(https://thehoop.in/admin/banners/Slider/slider_groceries.jpg)` }}></div> */}
                <img src="https://thehoop.in/admin/banners/Slider/slider_groceries.jpg" className={classes.slickItem} alt="sdfgdg" />
              </div>
              <div style={{ padding: 10 }}>
                {/* <div className={classes.slickItem} style={{ backgroundImage: `url(https://miro.medium.com/max/11730/0*ihTZPO4iffJ8n69_)` }}></div> */}
                <img src="https://thehoop.in/admin/banners/Slider/slider_groceries.jpg" className={classes.slickItem} alt="sdfgdg" />
              </div>
              <div style={{ padding: 10 }}>
                {/* <div className={classes.slickItem} style={{ backgroundImage: `url(https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg)` }}></div> */}
                <img src="https://thehoop.in/admin/banners/Slider/slider_groceries.jpg" className={classes.slickItem} alt="sdfgdg" />
              </div>
              <div style={{ padding: 10 }}>
                {/* <div className={classes.slickItem} style={{ backgroundImage: `url(https://thehoop.in/admin/banners/Slider/slider_groceries.jpg)` }}></div> */}
                <img src="https://thehoop.in/admin/banners/Slider/slider_groceries.jpg" className={classes.slickItem} alt="sdfgdg" />
              </div>
              <div style={{ padding: 10 }}>
                {/* <div className={classes.slickItem} style={{ backgroundImage: `url(https://thehoop.in/admin/banners/Slider/slider_groceries.jpg)` }}></div> */}
                <img src="https://thehoop.in/admin/banners/Slider/slider_groceries.jpg" className={classes.slickItem} alt="sdfgdg" />
              </div>
              {/* <div>
                  <div style={{ backgroundImage: `url(https://thehoop.in/admin/banners/Slider/slider_groceries.jpg)`, backgroundPosition: "center", backgroundSize: "cover", padding: "0 10px", height: "200px", width: "100%", borderRadius: 5 }}></div>
                </div>
                <div>
                  <div style={{ backgroundImage: `url(https://thehoop.in/admin/banners/Slider/slider_groceries.jpg)`, backgroundPosition: "center", backgroundSize: "cover", padding: "0 10px", height: "200px", width: "100%", borderRadius: 5 }}></div>
                </div>
                <div>
                  <div style={{ backgroundImage: `url(https://thehoop.in/admin/banners/Slider/slider_groceries.jpg)`, backgroundPosition: "center", backgroundSize: "cover", padding: "0 10px", height: "200px", width: "100%", borderRadius: 5 }}></div>
                </div>
                <div>
                  <div style={{ backgroundImage: `url(https://thehoop.in/admin/banners/Slider/slider_groceries.jpg)`, backgroundPosition: "center", backgroundSize: "cover", padding: "0 10px", height: "200px", width: "100%", borderRadius: 5 }}></div>
                </div>
                <div>
                  <div style={{ backgroundImage: `url(https://thehoop.in/admin/banners/Slider/slider_groceries.jpg)`, backgroundPosition: "center", backgroundSize: "cover", padding: "0 10px", height: "200px", width: "100%", borderRadius: 5 }}></div>
                </div> */}
            </Slider>
            {/* </Container> */}
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