import React from 'react'
import { SwipeableDrawer, makeStyles, List, ListSubheader, Grid, IconButton, Divider, Card, Typography, ListItem, ListItemText, Button, TextField, AppBar, Toolbar } from '@material-ui/core'
import { AddRounded, ClearRounded, CloseRounded, DeleteRounded, LocalOfferRounded, RemoveRounded } from '@material-ui/icons';
import { NavLink, withRouter } from 'react-router-dom';
import { useAppState } from '../../context';
import { confirmAlert } from 'react-confirm-alert'; // Import
import { orderBy } from 'lodash';
import { useCookies } from 'react-cookie';



const useStyles = makeStyles((theme) => ({
  myCartPaper: {
    width: "550px",
    padding: "0 10px",
    [theme.breakpoints.down(768)]: {
      width: "100%",
    },
  },
  qtyChangeBtn: {
    padding: 0,
    width: 20,
    minWidth: 25,
    cursor: "pointer"
  },
  qtyInput: {
    width: 33,
    padding: 0,
    '&$disabled': {
      color: 'black',
    },
    '& input': {
      padding: 4,
      textAlign: "center"
    }
  },
  keepShoppingBtn: {
    padding: 11,
    textTransform: "capitalize",
    width: "100%",
    marginTop: "60px",
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    maxWidth: 550,
    [theme.breakpoints.down(768)]: {
      width: "100%",
      maxWidth: "initial",
    },
  },
  checkout: {
    fontSize: 20
  },
  disabled: {
    color: '#000',
  }
}));



function Cart(props) {
  const classes = useStyles();
  const { toggleCart, closeCart, openCart } = useAppState("global");
  const [cookies, setCookie] = useCookies();

  const { removeCart, cart_items, grand_total, updateProductQty } = useAppState("cart");
  var discount = 0;
  if (grand_total <= 300) {
    discount = 10
  } else if (grand_total > 300 && grand_total <= 500) {
    discount = 15
  } else if (grand_total > 500 && grand_total <= 700) {
    discount = 20
  }
  else if (grand_total > 700) {
    discount = 25
  }

  const confirmDelete = (sub_prod_id) => {
    confirmAlert({
      title: 'Remove Item',
      message: 'Are you sure you want to remove this item from cart?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => updateProductQty(sub_prod_id, -1)
        },
        {
          label: 'No',
          onClick: () => console.info("no")
        }
      ]
    })
  }


  return (
    <SwipeableDrawer
      disableSwipeToOpen={true}
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
              <p>My Cart ({cart_items.length} items)</p>
            </Grid>
            <Grid item>
              <IconButton color={"secondary"} variant={"contained"} onClick={() => toggleCart()} ><CloseRounded /></IconButton>
            </Grid>
          </Grid>
          <Divider />
        </ListSubheader>
        <Grid container direction={"column"} spacing={1} style={{ marginBottom: "60px" }}>
          {
            orderBy(cart_items, ['id'], ['asc']).map((cart, index) =>
              <Grid item key={index}>
                <Card style={{ padding: "10px 0", margin: "0px 10px" }}>
                  <Grid container justify={"space-between"}>
                    <Grid item>
                      <Grid container spacing={1}>
                        <Grid item>
                          <Grid container alignItems={"center"}>
                            <Grid item>
                              <img src={`https://thehoop.in/admin/${cart.image}`} style={{ borderRadius: "50%", width: "80px", height: "80px" }} variant={"square"} alt="" />
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Grid container direction={"column"}>
                            <Grid item>
                              <Typography variant={"caption"}>{cart.product_name}</Typography>
                            </Grid>
                            <Grid item>
                              <Grid container direction={"column"}>
                                <Grid item>
                                  <Typography variant={"caption"}>  Available in - {cart.unitQty} {cart.unit} </Typography>
                                </Grid>
                                <Grid item>
                                  <Typography variant={"h6"}> &#8377;{cart.rate} x  {cart.qty} = &#8377;{cart.rate * cart.qty}  </Typography>
                                </Grid>
                                <Grid item>
                                  <>
                                    {cart.qty > 1 ? <RemoveRounded className={classes.qtyChangeBtn} onClick={() => updateProductQty(cart.sub_prod_id, -1)} /> : <DeleteRounded className={classes.qtyChangeBtn} color={"primary"} onClick={() => confirmDelete(cart.sub_prod_id)} />}
                                    <TextField disabled InputProps={{
                                      classes: {
                                        disabled: classes.disabled
                                      }
                                    }} className={classes.qtyInput} value={cart.qty} id="outlined-search" label="" type="text" variant="outlined" />
                                    <AddRounded className={classes.qtyChangeBtn} onClick={() => updateProductQty(cart.sub_prod_id, 1)} />
                                  </>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>


                      </Grid>
                    </Grid>
                    <Grid item>
                      <IconButton onClick={() => removeCart(index)
                      }><ClearRounded color={"primary"} /></IconButton>
                    </Grid>

                  </Grid>
                  <List>
                    {
                      cart && cart.items && cart.items.map((product, index) =>
                        <ListItem button key={index}>
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
                              <IconButton onClick={() => removeCart()}><DeleteRounded /></IconButton>
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
        {grand_total > 0 ? (props.location.pathname === "/" || props.location.pathname.includes('store')) && grand_total > 0 &&
          <AppBar position="fixed" color="primary" onClick={() => { closeCart(); props.history.push(!cookies.isVerified ? "/login" : "/checkout") }} className={classes.appBar}>
            <Toolbar>
              <Grid container spacing={0} justify={"space-between"} alignItems={"center"} onClick={() => { closeCart(); props.history.push(!cookies.isVerified ? "/login" : "/checkout") }}>
                <Grid item>
                  <Button color={"inherit"} className={classes.checkout} onClick={() => { closeCart(); props.history.push(!cookies.isVerified ? "/login" : "/checkout") }} >Checkout</Button>
                </Grid>
                <Grid item>
                  <Button color={"inherit"} className={classes.checkout} onClick={() => { closeCart(); props.history.push(!cookies.isVerified ? "/login" : "/checkout") }} >
                    {discount > 0 && <span >&#8377;<span style={{ textDecoration: "line-through", fontWeight: "lighter" }}>{grand_total}</span>&nbsp;&nbsp;</span>}
                        &#8377;<span style={{ fontSize: 23, fontWeight: 700 }}>{Math.ceil(grand_total - grand_total * (discount / 100))}/-</span></Button>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
          : <ListItemText style={{ margin: 40 }}>
            <Typography variant="body1" style={{ textAlign: "center", fontWeight: 600 }}>Empty Cart</Typography>
            <Button className={classes.keepShoppingBtn} variant={"contained"} color={"primary"} onClick={() => toggleCart()} component={NavLink} to={"/"}>Keep Shopping</Button>
          </ListItemText>
        }
      </List>
    </SwipeableDrawer >
  )
}
export default withRouter(Cart)