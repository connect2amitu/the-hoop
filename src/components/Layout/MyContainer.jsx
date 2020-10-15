import React from 'react'
import { Container, styled } from '@material-ui/core';

const Wrapper = styled(Container)({
  padding: "10px",
  marginTop: "10px",
});

export default function MyContainer({ children }) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}
