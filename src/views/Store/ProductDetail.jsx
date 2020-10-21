import React, { useState, useEffect } from 'react'
import { styled, Container, Button, Grid, makeStyles, Avatar, Typography, CircularProgress, Card, CardContent, FormControl, Select, MenuItem, TextField } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import CategoryAndProduct from './CategoryAndProduct';
import { useAppState } from '../../context';
import Slider from "react-slick";
import cls from 'classnames'
import MyContainer from '../../components/Layout/MyContainer';
import { find, findIndex } from 'lodash';
import { AddRounded, DeleteRounded, RemoveRounded } from '@material-ui/icons';
import { confirmAlert } from 'react-confirm-alert';



const useStyles = makeStyles((theme) => ({

  offer: {
    background: "#f2fef2",
    border: "1px solid #51aa1b",
    borderRadius: 2,
    color: "#51aa1b",
    fonSize: 14,
    fontWeight: 500,
    padding: "6px 13px",
    display: "inlineBlock",
    fontSize: "75%",
    lineHeight: 1,
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "baseline",
  },
  card: {
    background: "#fff",
    border: "1px solid #eee",
    borderRadius: 12,
    padding: 32,
  },
  productTitle: {
    [theme.breakpoints.down(768)]: {
      // fontSize: "12px",
      width: "300px"
    }
  },
  addToCartBtn: {
    padding: "4px 10px",
    fontSize: "12px",
    textTransform: "capitalize",
  },
  selectBox: {
    width: "100%",
    fontSize: 12
  },
  productCard: {
    padding: "10px",
    [theme.breakpoints.up(1000)]: {
      width: "200px !important"
    }
  },
  productImageWrapper: {
    height: 250,
    width: "100%",
    textAlign: "center"
  },
  productImage: {
    height: 250,
    width: 250,
    margin: "auto",
    cursor: "pointer",
    borderRadius: 10,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    objectFit: "contain",
  },
  productNameGrid: {
    fontSize: 13,
    fontWeight: 600,
    height: 42,
    maxHeight: 42,
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  productName: {
    fontWeight: 600
  },
  productDescription: {
    fontSize: 11,
    opacity: 0.7,
    minHeight: 40
  },
  categoryHeading: {
    margin: "10px 0"
  },
  priceGrid: {
    fontSize: 15,
    fontWeight: 600
  },
  viewmore: {
    color: theme.palette.primary.main
  },
  select: {
    padding: 10,
    fontSize: 14
  },
  categoryName: {
    margin: "31px 0 15px 0"
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
  disabled: {
    color: '#000',
  }
}));


const ProductDetail = (props) => {
  const { } = useAppState("useStore");
  const classes = useStyles();
  const [state, setState] = React.useState(null);


  const { addToCart, cart_items, grand_total, updateProductQty } = useAppState("useCart");

  const product = {
    id: 8,
    name: "The Hoop Sprouts",
    price: 100,
    discount: 10,
    image: "https://picsum.photos/200/300",
    data: [{ "sub_prod_id": 500, "qty": 1, "unit": "Kg", "rate": 101, "product_url": "bitter-gourd-small-1-kg" }, { "sub_prod_id": 501, "qty": 500, "unit": "Gram", "rate": 33, "product_url": "bitter-gourd-small-500-g" }, { "sub_prod_id": 502, "qty": 250, "unit": "Gram", "rate": 17, "product_url": "bitter-gourd-small-250-g" }]

  }
  const store = {
    id: 2,
    name: "The Hoop",
    slug: "thehoop",
    tags: ["Organic", "Veggies", "Local"],
    type: "delivery",
  }
  useEffect(() => {

  }, [])

  const handleChange = (event, pid) => {
    const name = event.target.name;

    if (state && state[name]) {

      var _subProd = state[name];

      var index = findIndex(_subProd.subProducts, { sub_prod_id: event.target.value.sub_prod_id });
      if (index < 0) {

        _subProd.subProducts.push(event.target.value)
        _subProd.rate = event.target.value.rate
        _subProd.qty = event.target.value.qty
        _subProd.unit = event.target.value.unit
        _subProd.sub_prod_id = event.target.value.sub_prod_id


        setState({
          ...state,
          [name]: _subProd
        });
      } else {
        _subProd.rate = event.target.value.rate
        _subProd.qty = event.target.value.qty
        _subProd.unit = event.target.value.unit
        _subProd.sub_prod_id = event.target.value.sub_prod_id


        setState({
          ...state,
          [name]: _subProd
        });
      }
    } else {

      var data = {
        ...event.target.value,
        sub_prod_id: event.target.value.sub_prod_id,
        subProducts: [
          event.target.value
        ]
      }

      setState({
        ...state,
        [name]: data
      });
    }
  };

  const addToCartHandler = (product, sub_prod_id) => {
    navigator.vibrate(100)
    var _product = Object.assign({}, product);
    if (state && state[`product-${_product.id}`]) {
      var temp = state[`product-${product.id}`];
      let data = {
        ..._product,
        rate: temp.rate,
        unit: temp.unit,
        unitQty: temp.qty,
        sub_prod_id: sub_prod_id,
        qty: 1,
      }

      addToCart(data, sub_prod_id, store)
    } else {
      let data = {
        ..._product,
        rate: _product.data[0].rate,
        unit: _product.data[0].unit,
        unitQty: _product.data[0].qty,
        sub_prod_id: sub_prod_id,
        qty: 1,
      }

      addToCart(data, sub_prod_id, store)
    }

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

  const showButtons = (product) => {
    if (state && state[`product-${product.id}`]) {
      var _state_product = state[`product-${product.id}`]
      var test = cart_items.find(data => data.id === product.id && data.sub_prod_id === _state_product.sub_prod_id)

      if (test) {
        return <>{test.qty > 1 ? <RemoveRounded className={classes.qtyChangeBtn} onClick={() => updateProductQty(test.sub_prod_id, -1)} /> : <DeleteRounded className={classes.qtyChangeBtn} color={"primary"} onClick={() => confirmDelete(test.sub_prod_id)} />}
          <TextField
            disabled
            InputProps={{
              classes: {
                disabled: classes.disabled
              }
            }}
            className={classes.qtyInput}
            value={test.qty}
            id="outlined-search"
            label=""
            type="text"
            variant="outlined"
          />
          <AddRounded className={classes.qtyChangeBtn} onClick={() => updateProductQty(test.sub_prod_id, 1)} />
        </>
      } else {
        var subProd = find(_state_product.subProducts, { sub_prod_id: _state_product.sub_prod_id })
        if (subProd) {
          return <Button className={classes.addToCartBtn} color={"primary"} variant={"contained"} onClick={() => addToCartHandler(product, subProd.sub_prod_id)}>Add to cart</Button>
        } else {
          return <Button className={classes.addToCartBtn} color={"primary"} variant={"contained"} onClick={() => addToCartHandler(product, product.data[0].sub_prod_id)}>sub Add to cart</Button>
        }

      }
    } else {
      let test = cart_items.find(data => data.id === product.id && data.sub_prod_id === product.data[0].sub_prod_id)
      if (test) {
        return <>{test.qty > 1 ? <RemoveRounded className={classes.qtyChangeBtn} onClick={() => updateProductQty(test.sub_prod_id, -1)} /> : <DeleteRounded className={classes.qtyChangeBtn} color={"primary"} onClick={() => confirmDelete(test.sub_prod_id)} />}
          <TextField
            disabled
            InputProps={{
              classes: {
                disabled: classes.disabled
              }
            }}
            className={classes.qtyInput}
            value={test.qty}
            id="outlined-search"
            label=""
            type="text"
            variant="outlined"
          />
          <AddRounded className={classes.qtyChangeBtn} onClick={() => updateProductQty(test.sub_prod_id, 1)} />
        </>
      } else {
        return <Button className={classes.addToCartBtn} color={"primary"} variant={"contained"} onClick={() => addToCartHandler(product, product.data[0].sub_prod_id)}>Add to cart</Button>
      }
    }
  }
  return (
    <MyContainer style={{ margin: "0 auto 50px" }} maxWidth={"lg"} fixed={true}>
      <Grid container direction={"column"}>
        <Grid item>
          <Grid container className={classes.productCard} spacing={1} direction={"column"} >
            <Grid item className={classes.productImageWrapper} >
              <Button component={NavLink} to={`/store/maruti-general-store/test`} className={classes.productImage} style={{ backgroundImage: `url(https://placeimg.com/640/480)` }} />
            </Grid>
            <Grid item className={classes.productNameGrid}><Typography className={classes.productName} variant={"caption"} >{product.name}</Typography></Grid>
            <Grid item>
              <FormControl variant="outlined" className={classes.selectBox}>
                <Select
                  classes={{ root: classes.select }}
                  labelId={`product-${product.id}`}
                  id={`product-${product.id}`}
                  value={state && state[`product-${product.id}`] ? product.data.find(o => o.sub_prod_id === state[`product-${product.id}`].sub_prod_id) : product.data[0]}
                  onChange={(e) => handleChange(e, product.id)}
                  inputProps={{
                    name: `product-${product.id}`,
                    // id: `product-${product.id}`,
                  }}
                >
                  {
                    product.data.map((option, index) =>
                      <MenuItem key={index} value={option}>{option.qty}{option.unit} - {option.rate}Rs</MenuItem>
                    )
                  }
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <Grid container alignItems={"center"} justify={"space-between"}>
                <Grid item>
                  <Typography className={classes.priceGrid} variant={"caption"}>
                    &#8377;{state && state[`product-${product.id}`] ? state[`product-${product.id}`].rate : product.data[0].rate}/-
                            </Typography>
                </Grid>
                <Grid item>
                  {showButtons(product)}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* <Grid container className={classes.card}>
        <Grid item xs={12} sm={4} >
          <Grid container justify={"center"}>
            <Grid item>
              <img src={product.image} style={{ width: "250px", height: "250px" }} alt="aaa" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Grid container direction={"column"} spacing={1} >

            <Grid item><span className={classes.offer}>50% OFF</span></Grid>
            <Grid item><Typography variant={"h5"}>{product.name}</Typography></Grid>
            <Grid item><Typography variant={"h6"}>MRP : {product.data[0].rate}/-</Typography></Grid>
            <Grid item><Button variant={"contained"} color={"primary"} onClick={() => { addToCart(product, store); }} >Add to cart</Button></Grid>
            <Grid item>
              <Typography variant={"h6"}>{"Quick Overview"}</Typography>
              <p>Bitter Gourd is a vegetable grown in tropical climate. It is the source of several nutrients known to be the healthiest vegetable in the food kingdom. It can be taken inside the body in form of juice, vegetable or pickle. It helps in regulating blood sugar levels and lowers bad cholesterol levels, inhibits cancer fighting properties. People also use for this vegetable for glowing skin and shiny hair, helps in weight loss, intestinal problems and so on. It is low in calories, high in fiber content and includes twice the calcium of spinach. It is known to be liver friendly and rich in antioxidants, Vitamin A and C.</p>
            </Grid>
          </Grid>
        </Grid>
      </Grid> */}

    </MyContainer>
  )
}
export default ProductDetail;