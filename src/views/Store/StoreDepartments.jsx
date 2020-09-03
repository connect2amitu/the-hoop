import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Button, styled, Grid } from '@material-ui/core'
import Departments from '../../components/Departments';
import { useEffect } from 'react';
import useAppState from '../../context/useAppState';

const MyContainer = styled(Container)({
  paddingBottom: "90px",
  marginTop: "10px",
});


const StoreDepartments = (props) => {
  const { getStoreDepartment, departments } = useAppState("store");

  useEffect(() => {
    getStoreDepartment(props.match.params.storeName)
  }, [])


  return (
    <React.Fragment>
      {/* <AppBar position="sticky" color="default"> */}
      <Grid container justify={"center"}>
        <Grid item>
          <img src={require("../../assets/images/logo/thehooplogo.svg")} alt="" />
        </Grid>
        <Grid item>
          <Button component={NavLink} to={`/store/${props.match.params.storeName}/storefront`}>Home</Button>
          <Button component={NavLink} color={"secondary"} to={`/store/${props.match.params.storeName}/departments`}>Departments</Button>
        </Grid>
      </Grid>
      {/* </AppBar> */}
      <MyContainer fixed={true}>
        <h1>Departments</h1>
        <Grid container spacing={1} justify={"flex-start"}>

          {
            departments.map((department, index) =>
              <Grid item key={index}>
                <Departments category_id={department.category_id} category_name={department.category_name} image={department.image} products_categories={department.products_categories} category={`category-${index}`} />
              </Grid>
            )
          }
        </Grid>
      </MyContainer>

    </React.Fragment >
  )
}

export default StoreDepartments