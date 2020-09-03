import React from 'react'
import { SwipeableDrawer, makeStyles, List, ListSubheader, Grid, IconButton, Divider, Card, Typography, ListItem, ListItemText, Button } from '@material-ui/core'
import { CloseRounded, DeleteRounded } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import { useAppState } from '../../context';


const useStyles = makeStyles((theme) => ({
  myCartPaper: {
    width: "520px",
    padding: "0 10px",
    [theme.breakpoints.down(600)]: {
      width: "100%",
    },
  }
}));



export default function Cart(props) {
  const classes = useStyles();
  const { toggleCart, openCart } = useAppState("global");
  const { cart } = useAppState("cart");

  return (
    <SwipeableDrawer
      anchor={"right"}
      open={openCart}
      onClose={() => toggleCart()}
      onOpen={() => toggleCart()}
      classes={{
        paper: classes.myCartPaper
      }}
    >
      <List style={{ height: "100vh" }}>
        <ListSubheader component="h1" style={{
          background: "#ffffff", margin: 0, textAlign: "center", fontWeight: 700,
          fontSize: "18px"
        }} color={"primary"} id="nested-list-subheader">
          <Grid container justify={"space-between"} alignItems={"center"}>
            <Grid item>
              <p>My Cart (0 items)</p>
            </Grid>
            <Grid item>
              <IconButton color={"secondary"} variant={"contained"} onClick={() => toggleCart()} ><CloseRounded /></IconButton>
            </Grid>
          </Grid>
          <Divider />
        </ListSubheader>
        <Grid container direction={"column"} spacing={1}>
          {
            cart.items.map(cart =>
              <Grid item>
                <Card style={{ padding: "10px 10px", margin: "0px 10px" }}>
                  <Grid container alignItems={"center"} justify={"space-between"}>
                    <Grid item>
                      <Grid container spacing={1}>
                        <Grid item>
                          <img src={cart.image} style={{ borderRadius: "50%", width: "50px", height: "50px" }} variant={"square"} alt="" />
                        </Grid>
                        <Grid item>
                          <Grid container direction={"column"}>
                            <Grid item>
                              <Typography variant={"h5"}>{cart.store_name}</Typography>
                            </Grid>
                            <Grid item>
                              <Typography variant={"subtitle2"}>Next delivery: Within 5 hours</Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography variant={"h6"}> {cart.price}/- </Typography>
                    </Grid>
                  </Grid>
                  <List>
                    {
                      cart.items.map(product =>
                        <ListItem button>
                          <Grid container alignItems={"center"} justify={"space-between"}>
                            <Grid item>
                              <Grid container spacing={1}>
                                <Grid item>
                                  <img src={product.image} style={{ width: "30px", height: "30px" }} variant={"square"} alt="" />
                                </Grid>
                                <Grid item>
                                  <Grid container direction={"column"}>
                                    <Grid item>
                                      <Typography variant={"subtitle2"}>{product.name}</Typography>
                                    </Grid>
                                    <Grid item>
                                      <Typography variant={"caption"}>Rs. {product.price} x {product.quantity}</Typography>
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item>
                              <Typography variant={"h6"}> {product.price * product.quantity}/- </Typography>
                            </Grid>
                            <Grid item>
                              <IconButton><DeleteRounded /></IconButton>
                            </Grid>
                          </Grid>
                        </ListItem>
                      )
                    }
                  </List>
                </Card>
              </Grid>
            )
          }
        </Grid>
        <ListItemText>
          <Button component={NavLink} onClick={() => toggleCart()} to="/checkout" style={{ width: "100%", bottom: 0, position: "static", padding: "10px", fontSize: "18px" }} variant={"contained"} color={"primary"}>Go to Checkout</Button>
        </ListItemText>
      </List>
    </SwipeableDrawer >
  )
}
