// import React, { useState } from 'react'
// import CarouselSlider from "react-slick";
// import { Grid, Dialog, Button, DialogTitle, DialogContent, Container, IconButton, Typography, Card, CardContent, Fade, makeStyles, Select } from '@material-ui/core';
// import { CloseRounded } from '@material-ui/icons';
// import { NavLink, withRouter } from 'react-router-dom';
// import { useAppState } from '../../context';


// const settings = {
//   infinite: false,
//   speed: 800,
//   slidesToShow: 7,
//   dots: false,
//   slidesToScroll: 7,
//   draggable: false,
//   responsive: [
//     {
//       breakpoint: 3000,
//       settings: {
//         slidesToShow: 4,
//         slidesToScroll: 4,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 2000,
//       settings: {
//         slidesToShow: 5,
//         slidesToScroll: 5,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 1800,
//       settings: {
//         slidesToShow: 4,
//         slidesToScroll: 4,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 1500,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         initialSlide: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     }
//   ]
// };

// const useStyles = makeStyles((theme) => ({
//   productTitle: {
//     [theme.breakpoints.down(768)]: {
//       // fontSize: "12px",
//       width: "300px"
//     }
//   },
//   addToCartBtn: {
//     padding: "4px 10px",
//     fontSize: "12px",
//     textTransform: "capitalize",
//   },
//   selectBox: {
//     width: "100%",
//     fontSize: 12
//   },
//   productCard: {
//     padding: "10px",
//     [theme.breakpoints.up(1000)]: {
//       width: "250px !important"
//     }
//   },
//   productImage: {
//     height: 120,
//     width: "100%",
//     margin: "auto",
//     cursor: "pointer",
//     borderRadius: 10,
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "center",
//     backgroundSize: "cover",
//     objectFit: "contain",
//   },
//   productNameGrid: {
//     fontSize: 13,
//     fontWeight: 600,
//     height: 42,
//     maxHeight: 42,
//     overflow: "hidden",
//     textOverflow: "ellipsis"
//   },
//   productName: {
//     fontWeight: 600
//   },
//   productDescription: {
//     fontSize: 11,
//     opacity: 0.7,
//     minHeight: 40
//   },
//   categoryHeading: {
//     margin: "10px 0"
//   },
//   priceGrid: {
//     fontSize: 15,
//     fontWeight: 600
//   },
//   viewmore: {
//     color: theme.palette.primary.main
//   }
// }));

// const CategoryAndProduct = (props) => {
//   const [modalData, setModalData] = useState(null)
//   const [open, setOpen] = useState(false)
//   const classes = useStyles();
//   const { addToCart } = useAppState("cart");
//   const { store } = useAppState("store");


//   const [state, setState] = React.useState(null);

//   const handleChange = (event) => {
//     const name = event.target.name;
//     setState({
//       ...state,
//       [name]: event.target.value,
//     });
//   };

//   const openModal = (data) => {
//     setModalData(data)
//     setOpen(true)
//   }
//   const handleClose = () => {
//     setModalData(null)
//     setOpen(false)
//   }
//   const { category } = props;
//   return (
//     <Container>
//       <Grid container className={classes.categoryHeading} justify={"space-between"}>
//         <Grid item>
//           <Typography variant={"h5"}>{category.name} </Typography>
//         </Grid>
//         <Grid item><NavLink to={`/store/${props.match.params.storeName}/departments/${category.category_id}`} className={classes.viewmore} >view more</NavLink></Grid>
//       </Grid>
//       <CarouselSlider style={{ width: "100%" }} className="slider" {...settings}>
//         {
//           category.products.map((product, index) =>
//             <Grid container className={classes.productCard} spacing={1} direction={"column"} >
//               <Grid item onClick={() => openModal({ ...product, quantity: 1 })} className={classes.productImage} style={{ backgroundImage: `url(${product.image})` }}  ></Grid>
//               <Grid item className={classes.productNameGrid}><Typography className={classes.productName} variant={"caption"} >{product.name}</Typography></Grid>
//               {/* <Grid item ><Typography variant={"caption"} className={classes.productDescription}>{product.name}</Typography></Grid> */}
//               <Grid item>
//                 <Select
//                   native
//                   className={classes.selectBox}
//                   value={state && state[`product-${product.id}`] ? state[`product-${product.id}`] : 0}
//                   onChange={handleChange}
//                   inputProps={{
//                     name: `product-${product.id}`,
//                     id: 'age-native-simple',
//                   }}
//                 >
//                   <option value={0}>1kg - 40Rs</option>
//                   <option value={1}>2kg - 70Rs</option>
//                   <option value={2}>3kg - 100Rs</option>
//                 </Select>
//               </Grid>
//               <Grid item>
//                 <Grid container alignItems={"center"} justify={"space-between"}>
//                   <Grid item><Typography className={classes.priceGrid} variant={"caption"}>&#8377;{product.price}/-</Typography></Grid>
//                   <Grid item><Button className={classes.addToCartBtn} color={"primary"} variant={"contained"} onClick={() => { addToCart({ ...product, quantity: 1 }, store); handleClose() }}>Add to cart</Button></Grid>
//                 </Grid>
//               </Grid>
//             </Grid>
//           )
//         }
//       </CarouselSlider>

//       {modalData && <Dialog
//         maxWidth={"lg"}
//         open={open}
//         fullWidth
//         TransitionComponent={Fade}
//         onClose={handleClose}
//         scroll={"paper"}
//         aria-labelledby="scroll-dialog-title"
//         aria-describedby="scroll-dialog-description"
//       >
//         <DialogTitle id="scroll-dialog-title" >
//           <Grid container justify={"space-between"} alignItems={"center"}>
//             <Grid item className={classes.productTitle}>{modalData.name}</Grid>
//             <Grid item> <IconButton onClick={handleClose} ><CloseRounded /></IconButton></Grid>

//           </Grid>
//         </DialogTitle>
//         <DialogContent dividers>
//           <Grid container>
//             <Grid item xs={12} sm={4}>
//               <Grid container justify={"center"}>
//                 <Grid item>
//                   <img src={modalData.image} style={{ width: "250px", height: "250px" }} alt="aaa" />
//                 </Grid>
//               </Grid>
//             </Grid>
//             <Grid item xs={12} sm={8}>
//               <Grid container direction={"column"} spacing={1}>
//                 <Grid item><Typography variant={"h5"}>{modalData.name}</Typography></Grid>
//                 <Grid item><Typography variant={"h6"}>MRP : {modalData.price}/-</Typography></Grid>
//                 <Grid item><Button variant={"contained"} color={"primary"} onClick={() => { addToCart(modalData, store); handleClose() }} >Add to cart</Button></Grid>
//                 <Grid item>
//                   <Card>
//                     <CardContent>
//                       <Typography variant={"h6"}>{"Quick Overview"}</Typography>
//                       <p>Bitter Gourd is a vegetable grown in tropical climate. It is the source of several nutrients known to be the healthiest vegetable in the food kingdom. It can be taken inside the body in form of juice, vegetable or pickle. It helps in regulating blood sugar levels and lowers bad cholesterol levels, inhibits cancer fighting properties. People also use for this vegetable for glowing skin and shiny hair, helps in weight loss, intestinal problems and so on. It is low in calories, high in fiber content and includes twice the calcium of spinach. It is known to be liver friendly and rich in antioxidants, Vitamin A and C.</p><p><br />
//                         <font><b>Features:</b></font>
//                         <font> Dark green coloured, narrow in shape with pointed ends and surface covered with jagged, triangular teeth and ridges.</font></p><p><font><br />
//                         </font><font><b>Usage:</b> </font><font>Wash Bitter Gourd in Water, make the surface smooth with the help of a peeler. Slice the bitter gourd and remove big seeds before cooking.<br />
//                           <br />
//                         </font></p>
//                     </CardContent>
//                   </Card>
//                 </Grid>
//               </Grid>
//             </Grid>
//           </Grid>
//         </DialogContent>
//       </Dialog>}
//     </Container>
//   )
// }

// export default withRouter(CategoryAndProduct)


import React, { useState } from 'react'
import { Grid, Dialog, Button, DialogTitle, DialogContent, Container, IconButton, Typography, Card, CardContent, makeStyles, Select, FormControl, MenuItem, TextField } from '@material-ui/core';
import { CloseRounded, AddRounded, RemoveRounded, DeleteRounded } from '@material-ui/icons';
import { withRouter } from 'react-router-dom';
import { useAppState } from '../../context';
import { findIndex, find } from 'lodash';
import { confirmAlert } from 'react-confirm-alert'; // Import


const useStyles = makeStyles((theme) => ({
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
  productImage: {
    height: 120,
    width: 150,
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

const CategoryAndProduct = (props) => {
  const [modalData, setModalData] = useState(null)
  const [open, setOpen] = useState(false)
  const classes = useStyles();
  const { addToCart, cart_items, updateProductQty } = useAppState("cart");
  const { store } = useAppState("store");


  const [state, setState] = React.useState(null);

  const handleClose = () => {
    setModalData(null)
    setOpen(false)
  }


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

      addToCart(data, sub_prod_id)
    } else {
      let data = {
        ..._product,
        rate: _product.data[0].rate,
        unit: _product.data[0].unit,
        unitQty: _product.data[0].qty,
        sub_prod_id: sub_prod_id,
        qty: 1,
      }

      addToCart(data, sub_prod_id)
    }

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

  const confirmDelete = (sub_prod_id) => {
    console.log('sub_prod_id =>', sub_prod_id)

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

  const { products = [] } = props;

  const { category } = props;
  console.log('category.products[0] =>', category.products[0]);
  console.log('category =>', category);

  return (
    <>
      <Grid container className={classes.categoryHeading} justify={"space-between"}>
        <Grid item xs={12}>
          <Typography variant={"h4"} className={classes.categoryName}>{category.name} </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container >
            {
              category.products.map((product, index) =>
                <Grid item xs={6} sm={4} md={3} ld={3} key={index}>
                  <Grid container className={classes.productCard} spacing={1} direction={"column"} >
                    <Grid item
                      // onClick={() => openModal({ ...product, quantity: 1 })} 
                      className={classes.productImage} style={{ backgroundImage: `url(https://picsum.photos/300/100?random=${index})` }}  ></Grid>
                    <Grid item className={classes.productNameGrid}><Typography className={classes.productName} variant={"caption"} >{product.name}</Typography></Grid>
                    <Grid item>
                      <FormControl variant="outlined" className={classes.selectBox}>
                        <Select
                          classes={{ root: classes.select }}
                          labelId={`product-${product.id}`}
                          id={`product-${product.id}`}
                          defaultValue={product.data[0]}
                          // value={state && state[`product-${product.id}`] && state[`product-${product.id}`]}
                          onChange={(e) => handleChange(e, product.id)}
                          inputProps={{
                            name: `product-${product.id}`,
                            id: `product-${product.id}`,
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
              )
            }
          </Grid>
        </Grid>

        {/* <Grid item><NavLink to={`/store/${props.match.params.storeName}/departments/${category.category_id}`} className={classes.viewmore} >view more</NavLink></Grid> */}
      </Grid>
      {/* <CarouselSlider style={{ width: "100%" }} className="slider" {...settings}> */}
      <Grid container spacing={1}>

      </Grid>
      {/* </CarouselSlider> */}

      {modalData && <Dialog
        maxWidth={"lg"}
        open={open}
        fullWidth
        // TransitionComponent={Fade}
        onClose={handleClose}
        scroll={"paper"}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title" >
          <Grid container justify={"space-between"} alignItems={"center"}>
            <Grid item className={classes.productTitle}>{modalData.name}</Grid>
            <Grid item> <IconButton onClick={handleClose} ><CloseRounded /></IconButton></Grid>

          </Grid>
        </DialogTitle>
        <DialogContent dividers>
          <Grid container>
            <Grid item xs={12} sm={4}>
              <Grid container justify={"center"}>
                <Grid item>
                  <img src={`https://thehoop.in/admin/${modalData.image}`} style={{ width: "250px", height: "250px" }} alt="aaa" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Grid container direction={"column"} spacing={1}>
                <Grid item><Typography variant={"h5"}>{modalData.name}</Typography></Grid>
                <Grid item><Typography variant={"h6"}>MRP : {modalData.data[0].rate}/-</Typography></Grid>
                <Grid item><Button variant={"contained"} color={"primary"} onClick={() => { addToCart(modalData, store); handleClose() }} >Add to cart</Button></Grid>
                <Grid item>
                  <Card>
                    <CardContent>
                      <Typography variant={"h6"}>{"Quick Overview"}</Typography>
                      <p>Bitter Gourd is a vegetable grown in tropical climate. It is the source of several nutrients known to be the healthiest vegetable in the food kingdom. It can be taken inside the body in form of juice, vegetable or pickle. It helps in regulating blood sugar levels and lowers bad cholesterol levels, inhibits cancer fighting properties. People also use for this vegetable for glowing skin and shiny hair, helps in weight loss, intestinal problems and so on. It is low in calories, high in fiber content and includes twice the calcium of spinach. It is known to be liver friendly and rich in antioxidants, Vitamin A and C.</p><p><br />
                        <font><b>Features:</b></font>
                        <font> Dark green coloured, narrow in shape with pointed ends and surface covered with jagged, triangular teeth and ridges.</font></p><p><font><br />
                        </font><font><b>Usage:</b> </font><font>Wash Bitter Gourd in Water, make the surface smooth with the help of a peeler. Slice the bitter gourd and remove big seeds before cooking.<br />
                          <br />
                        </font></p>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>}
    </>
  )
}

export default withRouter(CategoryAndProduct)