import React from 'react'
import { Container, styled } from '@material-ui/core'

const MyContainer = styled(Container)({
  padding: "10px",
  marginTop: "10px",
});
export default function Account() {
  return (
    <MyContainer>
      Account
    </MyContainer>
  )
}
