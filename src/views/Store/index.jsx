import React, { useEffect } from 'react'
import { styled, Container, Grid, CircularProgress, makeStyles } from '@material-ui/core';
import CategoryAndProduct from './CategoryAndProduct';
import { useAppState } from '../../context';

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
  const { getStoreDepartment, departments, isLoading } = useAppState("store");
  const classes = useStyles();

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