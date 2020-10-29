import React from 'react'
import { Button, Container, styled } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

const MyContainer = styled(Container)({
  paddingBottom: "90px",
  marginTop: "10px",
  minHeight: "calc(100vh - 200px)"
});


export default function Page404() {
  return (
    <MyContainer>
      <p>Page not found</p>
      <div><Button component={NavLink} to="/" color={"secondary"} variant={"contained"}>Go to main Page</Button></div>

    </MyContainer>
  )
}
