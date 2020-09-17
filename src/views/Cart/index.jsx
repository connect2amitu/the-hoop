import React from 'react'
import { SwipeableDrawer, makeStyles, List, ListSubheader, Grid, IconButton, Divider, Card, Typography, ListItem, ListItemText, Button, TextField } from '@material-ui/core'
import { AddRounded, ClearRounded, CloseRounded, DeleteRounded, RemoveRounded } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import { useAppState } from '../../context';
import { confirmAlert } from 'react-confirm-alert'; // Import
import { orderBy } from 'lodash';



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
  }
}));



export default function Cart(props) {
  const classes = useStyles();
  const { toggleCart, openCart } = useAppState("global");
  const { removeCart, cart_items, grand_total, updateProductQty } = useAppState("cart");

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
        <Grid container direction={"column"} spacing={1}>
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
                                    <TextField readOnly className={classes.qtyInput} value={cart.qty} id="outlined-search" label="" type="text" variant="outlined" />
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
                        // confirmAlert({
                        //   title: 'Remove Item',
                        //   message: 'Are you sure you want to remove this item from cart?',
                        //   buttons: [
                        //     {
                        //       label: 'Yes',
                        //       onClick: () => removeCart(index)
                        //     },
                        //     {
                        //       label: 'No',
                        //       onClick: () => console.info("no")
                        //     }
                        //   ]
                        // })
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
        {grand_total > 0 ? <ListItemText style={{ position: "sticky", bottom: 0, margin: 0 }}>
          <Button component={NavLink} onClick={() => toggleCart()} to="/checkout" style={{ width: "100%", bottom: 0, position: "static", padding: "10px", fontSize: "18px" }} variant={"contained"} color={"primary"}>
            <Grid container justify={"space-between"}>
              <Grid item>
                Go to Checkout
              </Grid>
              <Grid item>
                &#8377; {grand_total}
              </Grid>
            </Grid>

          </Button>

        </ListItemText> : <ListItemText style={{ margin: 40 }}>
            <Typography variant="body1" style={{ textAlign: "center", fontWeight: 600 }}>Empty Cart</Typography>
            <Button className={classes.keepShoppingBtn} variant={"contained"} color={"primary"} onClick={() => toggleCart()} component={NavLink} to={"/"}>Keep Shopping</Button>
          </ListItemText>
        }
      </List>
    </SwipeableDrawer >
  )
}
