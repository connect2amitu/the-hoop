import { Container, styled } from '@material-ui/core';
import React from 'react'

const MyContainer = styled(Container)({
  paddingBottom: "0px",
  marginTop: "20px",
  minHeight: "calc(100vh - 200px)"
});


export default function AboutUs() {
  return (
    <MyContainer>
      <h1><strong>About us</strong></h1>

      <div class="col-sm-12">
        <p>In this fast-paced, heavy-scheduled life, most people do not get enough time to shop for fruits and vegetables. We, at Hoop, are here to make your life much simpler by providing fresh, exotic, and organic fruits and vegetables in Pune. With a vision to make quality products available at affordable prices, we aim to provide fresh, best-quality, branded products to customers easily. This is made possible by sourcing directly from our network of farms supplying vegetables and fruits to your doorsteps.</p>
        <p>&nbsp;</p>
        <p>We do not compromise when it comes to quality. Hoop associates with farmers who grow fruits and vegetables in natural environment and organically. We also offer hydro phonic fruits and vegetables, thereby offering customers the best quality products. In this way, we proceed towards serving customers with chemical-free products and a better health. This helps us in contributing indirectly towards a beautiful pollution free environment as well. Our ultimate aim is to suffice the nutritional needs of our customers through fresh vegetable and fruits.</p>
        <p>&nbsp;</p>
        <p>Hoop delivers farm fresh fruits and vegetables daily at your doorstep so that you eat fresh daily. Whether you are at home or office, you can order at your convenience and leave the task on us. Our Xpress delivery and different delivery slots allow you to buy and get the products delivered at your doorstep whenever you want.</p>
        <p>&nbsp;</p>
        <p>Hoop completely alters your experience of purchasing fruits and vegetables. With few clicks, you can order online thereby avoiding traffic jams on your way to the store along with carrying heavy bags back to home. In addition to this, you also save time spent in the billing lines. We save not only your precious time, but also your hard-earned money by offering you products at the lowest rates possible. In addition to this, we also provide our products with occasional deals, offers, and discounts. Simply put, we care for your budget and it is reflected in our pricing.</p>
        <p>&nbsp;</p>
        <p>Reap the benefits of ordering fruits and vegetables from Hoop as you stay safe within your home as well as enjoy the goodness of farm fresh products. Don’t worry about the freshness or quality either; we deliver only the freshest of products. In simple words, Hoop is the only way to guarantee that you sacrifice neither the quality of your fruits and vegetables nor the money in your wallet!</p>
        <p>&nbsp;</p>
      </div>
    </MyContainer>
  )
}