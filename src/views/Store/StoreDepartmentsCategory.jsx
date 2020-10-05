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
  const { store, getStoreCategory } = useAppState("useStore");

  useEffect(() => {
    getStoreCategory(props.match.params.storeName, props.match.params.categoryId)
  }, [props.match.params.storeName])


  console.log('123store =>', store)

  return (
    <MyContainer>
      {store && store.categories.map((category, index) =>
        <CategoryAndProduct key={index} category={category} />
      )}
    </MyContainer>
  )
}
