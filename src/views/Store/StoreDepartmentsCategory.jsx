import React from 'react'
import CategoryAndProduct from './CategoryAndProduct'
import { useAppState } from '../../context';
import { useEffect } from 'react';
import { styled, Container } from '@material-ui/core';

const MyContainer = styled(Container)({
  padding: "10px",
  marginTop: "10px",
  marginBottom: "30px",
});

export default function StoreDepartmentsCategory(props) {
  const { store, getStoreBySlug } = useAppState("store");
  useEffect(() => {
    if (!props.match.params.storeName) {
      props.history.push("/store/thehoop");
    } else {
      getStoreBySlug(props.match.params.storeName)
    }
  }, [props.match.params.storeName, props.history])
  return (
    <MyContainer>
      {store && store.categories.map((category, index) =>
        <CategoryAndProduct key={index} category={category} />
      )}
    </MyContainer>
  )
}
