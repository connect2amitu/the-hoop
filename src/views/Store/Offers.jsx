import React from 'react'
import { useEffect } from 'react';
import useAppState from '../../context/useAppState';
import MyContainer from '../../components/Layout/MyContainer';

const Offers = (props) => {

  const { getStoreBySlug } = useAppState("useStore");


  useEffect(() => {
    getStoreBySlug(props.match.params.storeName)
  }, [props.match.params.storeName])
  return (
    <React.Fragment>
      <MyContainer fixed={true}>
        <h1>Offers</h1>
      </MyContainer>

    </React.Fragment >
  )
}

export default Offers