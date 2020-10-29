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
      About us
    </MyContainer>
  )
}