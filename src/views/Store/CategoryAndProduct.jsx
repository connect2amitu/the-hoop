import React, { useState } from 'react'
import CarouselSlider from "react-slick";
import { Grid, Dialog, Button, DialogTitle, DialogContent, Container, IconButton, Typography, Card, CardContent, Fade } from '@material-ui/core';
import { CloseRounded } from '@material-ui/icons';


const settings = {
  infinite: false,
  speed: 800,
  slidesToShow: 7,
  dots: false,
  slidesToScroll: 7,
  draggable: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
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


const CategoryAndProduct = (props) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     open: false,
  //     modalData: null
  //   }
  //   this.myRef = React.createRef();

  // }
  const [modalData, setModalData] = useState(null)
  const [open, setOpen] = useState(false)

  const openModal = (data) => {
    setModalData(data)
    setOpen(true)
  }
  const handleClose = () => {
    setModalData(null)
    setOpen(false)
  }
  // render() {
  //   const { open, modalData } = this.state
  //   console.log('category =>', category);

  const { category } = props;

  return (
    <div>
      <Container>
        <Typography variant={"h5"}>{category.name}</Typography>
        <CarouselSlider style={{ width: "100%" }} className="slider" {...settings}>
          {
            category.products.map((product, index) =>
              <Grid container direction={"column"} onClick={() => openModal(product)}>
                <Grid item style={{ cursor: "pointer" }} ><img src={product.image} height={150} width={150} alt="testing " /></Grid>
                <Grid item style={{ cursor: "pointer" }} >{product.name}</Grid>
                <Grid>{product.price}</Grid>
                <Grid>{product.discount}</Grid>
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
          <DialogTitle id="scroll-dialog-title">
            <Grid container justify={"space-between"} alignItems={"center"}>
              <Grid item>{modalData.name}</Grid>
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
                  <Grid item><Button variant={"contained"} color={"primary"}>Add to cart</Button></Grid>
                  <Grid item>
                    <Card>
                      <CardContent>
                        <Typography variant={"h6"}>{"Quick Overview"}</Typography>
                        <p>Bitter
                        Gourd is a vegetable grown in tropical climate. It is the source of several
                        nutrients known to be the healthiest vegetable in the food kingdom. It can be
                        taken inside the body in form of juice, vegetable or pickle. It helps in
                        regulating blood sugar levels and lowers bad cholesterol levels, inhibits
                        cancer fighting properties. People also use for this vegetable for glowing
                        skin and shiny hair, helps in weight loss, intestinal problems and so on. It
                        is low in calories, high in fiber content and includes twice the calcium of
                        spinach. It is known to be liver friendly and rich in antioxidants, Vitamin A
  and C.</p><p><br />
                          <font><b>Features:</b></font>
                          <font> Dark green
                          coloured, narrow in shape with pointed ends and surface covered with jagged,
  triangular teeth and ridges.</font></p><p><font><br />
                        </font><font><b>Usage:</b> </font><font>Wash Bitter
                        Gourd in Water, make the surface smooth with the help of a peeler. Slice the
  bitter gourd and remove big seeds before cooking.<br />
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
    </div>
  )
  // }

}

export default CategoryAndProduct
