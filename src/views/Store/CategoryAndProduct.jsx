import React, { useState } from 'react'
import CarouselSlider from "react-slick";
import { Grid, Dialog, Button, DialogTitle, DialogContent, Container, IconButton, Typography, Card, CardContent, Fade, makeStyles, Select } from '@material-ui/core';
import { CloseRounded } from '@material-ui/icons';
import { NavLink, withRouter } from 'react-router-dom';
import { useAppState } from '../../context';


const settings = {
  infinite: false,
  speed: 800,
  slidesToShow: 7,
  dots: false,
  slidesToScroll: 7,
  draggable: false,
  responsive: [
    {
      breakpoint: 3000,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 2000,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1800,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
};

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
      width: "250px !important"
    }
  },
  productImage: {
    height: 120,
    width: "100%",
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
  }
}));

const CategoryAndProduct = (props) => {
  const [modalData, setModalData] = useState(null)
  const [open, setOpen] = useState(false)
  const classes = useStyles();
  const { addToCart } = useAppState("cart");
  const { store } = useAppState("store");


  const [state, setState] = React.useState(null);

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const openModal = (data) => {
    setModalData(data)
    setOpen(true)
  }
  const handleClose = () => {
    setModalData(null)
    setOpen(false)
  }
  const { category } = props;
  return (
    <Container>
      <Grid container className={classes.categoryHeading} justify={"space-between"}>
        <Grid item>
          <Typography variant={"h5"}>{category.name} </Typography>
        </Grid>
        <Grid item><NavLink to={`/store/${props.match.params.storeName}/departments/${category.category_id}`} className={classes.viewmore} >view more</NavLink></Grid>
      </Grid>
      <CarouselSlider style={{ width: "100%" }} className="slider" {...settings}>
        {
          category.products.map((product, index) =>
            <Grid container className={classes.productCard} spacing={1} direction={"column"} >
              <Grid item onClick={() => openModal({ ...product, quantity: 1 })} className={classes.productImage} style={{ backgroundImage: `url(${product.image})` }}  ></Grid>
              <Grid item className={classes.productNameGrid}><Typography className={classes.productName} variant={"caption"} >{product.name}</Typography></Grid>
              {/* <Grid item ><Typography variant={"caption"} className={classes.productDescription}>{product.name}</Typography></Grid> */}
              <Grid item>
                <Select
                  native
                  className={classes.selectBox}
                  value={state && state[`product-${product.id}`] ? state[`product-${product.id}`] : 0}
                  onChange={handleChange}
                  inputProps={{
                    name: `product-${product.id}`,
                    id: 'age-native-simple',
                  }}
                >
                  <option value={0}>1kg - 40Rs</option>
                  <option value={1}>2kg - 70Rs</option>
                  <option value={2}>3kg - 100Rs</option>
                </Select>
              </Grid>
              <Grid item>
                <Grid container alignItems={"center"} justify={"space-between"}>
                  <Grid item><Typography className={classes.priceGrid} variant={"caption"}>&#8377;{product.price}/-</Typography></Grid>
                  <Grid item><Button className={classes.addToCartBtn} color={"primary"} variant={"contained"} onClick={() => { addToCart({ ...product, quantity: 1 }, store); handleClose() }}>Add to cart</Button></Grid>
                </Grid>
              </Grid>
            </Grid>
          )
        }
      </CarouselSlider>

      {modalData && <Dialog
        maxWidth={"lg"}
        open={open}
        fullWidth
        TransitionComponent={Fade}
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
                  <img src={modalData.image} style={{ width: "250px", height: "250px" }} alt="aaa" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Grid container direction={"column"} spacing={1}>
                <Grid item><Typography variant={"h5"}>{modalData.name}</Typography></Grid>
                <Grid item><Typography variant={"h6"}>MRP : {modalData.price}/-</Typography></Grid>
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
    </Container>
  )
}

export default withRouter(CategoryAndProduct)
