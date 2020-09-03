import React, { useState, useEffect } from 'react'
import StoreBanner from '../../components/StoreBanner';
import { styled, Container, Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import CategoryAndProduct from './CategoryAndProduct';
import { useAppState } from '../../context';

const MyContainer = styled(Container)({
  paddingBottom: "90px",
  marginTop: "210px",
});


const Store = (props) => {
  const { store, getStoreBySlug } = useAppState("store");
  console.log('store =>', store);

  useEffect(() => {
    if (!props.match.params.storeName) {
      props.history.push("/store/thehoop");
    } else {
      getStoreBySlug(props.match.params.storeName)
    }
  }, [props.match.params.storeName, props.history])
  return (
    <React.Fragment>
      {
        store && store !== null && <>
          <StoreBanner storeLogo={store.image} storeName={store.name} storeInfo={store.tags.join(" · ")} />
          <MyContainer maxWidth={false} fixed={true}>
            <Button component={NavLink} color={"secondary"} to={`/store/${store.slug}/storefront`}>Home</Button>
            <Button component={NavLink} to={`/store/${store.slug}/departments`}>Departments</Button>
            {store.categories.map((category, index) =>
              <CategoryAndProduct key={index} category={category} />
            )}
          </MyContainer>
        </>
      }

    </React.Fragment>
  )
}
export default Store;