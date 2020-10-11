
import React, { useEffect, useState } from 'react'
import { SwipeableDrawer, makeStyles, List, ListSubheader, Grid, IconButton, Divider, Card, Typography, ListItem, ListItemText, Button, TextField, AppBar, Toolbar, Avatar, Paper } from '@material-ui/core'
import { AddRounded, ClearRounded, CloseRounded, DeleteRounded, RemoveRounded } from '@material-ui/icons';
import { NavLink, withRouter } from 'react-router-dom';
import { useAppState } from '../../context';
import { confirmAlert } from 'react-confirm-alert'; // Import
import { orderBy } from 'lodash';
import { useCookies } from 'react-cookie';



const useStyles = makeStyles((theme) => ({
  myCartPaper: {
    width: "460px",
    padding: 10,
    [theme.breakpoints.down(768)]: {
      width: "100%",
    },
  },
  qtyChangeBtn: {
    padding: 0,
    width: 15,
    minWidth: 15,
    cursor: "pointer",
    margin: 1
  },
  qtyInput: {
    width: 35,
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
    padding: "0 10px"
  },
  checkout: {
    fontSize: 20
  },
  disabled: {
    color: '#000',
    fontSize: 12
  },
  productName: {
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": 1,
    maxHeight: 26,
    fontSize: 13,
    overflow: "hidden",
  },
  textRight: {
    textAlign: "right"
  },
  qtyWrapper: {
    width: 80,
    height: 28,
    background: "#fff",
    border: "1px solid #e9e9eb",
    marginLeft: "auto",
    fontSize: "0.86rem",
    color: "#7e808c",
    position: "relative",
    contain: "content",
    "-webkit-align-self": "center",
    "-ms-flex-item-align": "center",
    "align-self": "center",
  },
  minus: {
    cursor: "pointer",
    position: "absolute",
    left: 0,
    width: 26,
    height: "100%",
    textAlign: "center",
  },
  plus: {
    cursor: "pointer",
    position: "absolute",
    right: "0",
    width: "26.66667px",
    color: "#60b246",
    fontWeight: 600,
    height: "100%",
    textAlign: "center",
    lineHeight: "26px",
    fontSize: "1.4rem"
  },
  qtyCount: {
    position: "absolute",
    left: "26.66667px",
    width: "26.66667px",
    textAlign: "center",
    height: "100%",
    lineHeight: "26px",
    color: theme.palette.secondary.main,
    fontSize: "12px"
  }
}));



function Cart(props) {
  const classes = useStyles();
  const { toggleCart, openCart } = useAppState("useGlobal");
  const { getCarts } = useAppState("useCart");
  // const [carts, setCarts] = useState([])
  const { removeCart, cart_items, grand_total, updateProductQty } = useAppState("useCart");
  const { verifyToken } = useAppState("useAuth");
  const carts = getCarts()

  useEffect(() => {
    // setCarts(getCarts())
  })
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
              <p>My Cart ({cart_items?.length} items)</p>
            </Grid>
            <Grid item>
              <IconButton color={"secondary"} variant={"contained"} onClick={() => toggleCart()} ><CloseRounded /></IconButton>
            </Grid>
          </Grid>
        </ListSubheader>
        <Grid container direction={"column"} spacing={1} style={{ marginBottom: "60px", padding: "0 10px" }}>
          {
            carts.map((cart, index) =>
              <Grid item>
                <Paper elevation={3} style={{ padding: "15px" }}>
                  <Grid container direction={"column"}>
                    <Grid item>
                      <Grid container justify={"space-between"} alignItems={"center"}>
                        <Grid item xs={2}>
                          <Avatar src={cart.store.image} />
                        </Grid>
                        <Grid item xs={7}>
                          <Typography variant={"h5"}>{cart.store.name}</Typography>
                        </Grid>
                        <Grid item xs={3}>
                          <Typography style={{ textAlign: "right" }} variant={"h5"}>&#8377; {cart.total}</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid container direction={"column"}>
                        {cart.items.map((cart, index) =>
                          <Grid item>
                            <Grid container justify={"space-between"}>
                              <Grid xs={2}>
                                <img src={`https://placeimg.com/640/480/${index}`} style={{ borderRadius: 5, width: 50, height: 50 }} variant={"square"} alt="" />
                              </Grid>
                              <Grid item xs={7}>
                                <Grid container direction={"column"}>
                                  <Grid item>
                                    <Typography variant={"subtitle2"} className={classes.productName}>{cart.name}</Typography>
                                  </Grid>
                                  <Grid item>
                                    <Grid container>
                                      <Grid item xs={4}>
                                        <Typography variant={"caption"}>{cart.unitQty} {cart.unit}</Typography>
                                      </Grid>
                                      <Grid item>
                                        <Typography variant={"caption"}> &#8377; <b>{cart.rate}</b> x  {cart.qty} = &#8377; <b>{cart.rate * cart.qty}</b>   </Typography>
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </Grid>
                              <Grid item xs={3}>
                                {/* <Grid container justify={"flex-end"} alignItems={"center"}>
                                  {cart.qty > 1 ? <RemoveRounded className={classes.qtyChangeBtn} onClick={() => updateProductQty(cart.sub_prod_id, -1)} /> : <DeleteRounded className={classes.qtyChangeBtn} color={"primary"} onClick={() => confirmDelete(cart.sub_prod_id)} />}
                                  <TextField disabled InputProps={{
                                    classes: {
                                      disabled: classes.disabled
                                    }
                                  }}
                                    className={classes.qtyInput} value={cart.qty} id="outlined-search" label="" type="text" variant="outlined" />
                                  <AddRounded className={classes.qtyChangeBtn} onClick={() => updateProductQty(cart.sub_prod_id, 1)} />
                                </Grid> */}
                                <div className={classes.qtyWrapper}>
                                  <div className={classes.minus}>{cart.qty > 1 ? <RemoveRounded className={classes.qtyChangeBtn} onClick={() => updateProductQty(cart.sub_prod_id, -1)} /> : <DeleteRounded className={classes.qtyChangeBtn} color={"primary"} onClick={() => confirmDelete(cart.sub_prod_id)} />}</div>
                                  <div className={classes.qtyCount}>{cart.qty}</div>
                                  <div className={classes.plus}><AddRounded className={classes.qtyChangeBtn} onClick={() => updateProductQty(cart.sub_prod_id, 1)} /></div>
                                </div>
                              </Grid>
                            </Grid>
                          </Grid>
                        )}
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            )
          }
          {/* {
            carts.map((cart, index) =>
              <>
                <Grid item style={{ padding: "10px 10px 0 10px", }}>
                  <Grid container justify={"space-between"}>
                    <Grid item xs={2}>
                      <Avatar src={cart.store.image} />
                    </Grid>
                    <Grid item xs={10}>
                      <Grid container justify={"space-between"}>
                        <Grid item>
                          <Grid container direction={"column"}>
                            <Grid item>
                              <Typography variant={"h5"}>{cart.store.name}</Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Typography variant={"h6"}>&#8377; {cart.total}</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Divider />
                {cart.items.map((cart, index) =>
                  <Grid item key={index}>
                    <Card style={{ padding: "10px", }}>
                      <Grid container justify={"space-between"}>
                        <Grid item>
                          <Grid container spacing={1}>
                            <Grid item>
                              <Grid container alignItems={"center"}>
                                <Grid item>
                                  <img src={`${cart.image}`} style={{ borderRadius: 5, width: 50, height: 50 }} variant={"square"} alt="" />
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item>
                              <Grid container direction={"column"}>
                                <Grid item>
                                  <Typography variant={"caption"}>{cart.name}</Typography>
                                </Grid>
                                <Grid item>
                                  <Grid container direction={"column"}>
                                    <Grid item>
                                      <Typography variant={"caption"}>  Available in - {cart.unitQty} {cart.unit} </Typography>
                                    </Grid>
                                    <Grid item>
                                      <Typography variant={"body2"}> &#8377;{cart.rate} x  {cart.qty} = &#8377;{cart.rate * cart.qty}  </Typography>
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
                          <IconButton onClick={() => {
                            removeCart(index);
                            confirmAlert({
                              title: 'Remove Item',
                              message: 'Are you sure you want to remove this item from cart?',
                              buttons: [
                                {
                                  label: 'Yes',
                                  onClick: () => removeCart(index)
                                },
                                {
                                  label: 'No',
                                  onClick: () => console.info("no")
                                }
                              ]
                            })
                          }}><ClearRounded color={"primary"} /></IconButton>
                        </Grid>

                      </Grid>
                    </Card>
                  </Grid>
                )}
              </>
            )
          } */}
        </Grid>
        {grand_total > 0 ? (props.location.pathname === "/" || props.location.pathname.includes('store')) && grand_total > 0 &&
          <AppBar position="fixed" color="primary" onClick={() => { toggleCart(); props.history.push(!verifyToken() ? "/login" : "/checkout") }} className={classes.appBar}>
            <Toolbar>
              <Grid container spacing={0} justify={"space-between"} alignItems={"center"} onClick={() => { toggleCart(); props.history.push(!verifyToken() ? "/login" : "/checkout") }}>
                <Grid item>
                  <Button color={"inherit"} className={classes.checkout} onClick={() => { toggleCart(); props.history.push(!verifyToken() ? "/login" : "/checkout") }} >Checkout</Button>
                </Grid>
                <Grid item>
                  <Button color={"inherit"} className={classes.checkout} onClick={() => { toggleCart(); props.history.push(!verifyToken() ? "/login" : "/checkout") }} >&#8377; {grand_total}/-</Button>
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