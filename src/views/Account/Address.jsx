import React, { useEffect } from 'react'
import { Container, styled, Grid, Typography, CardActions, Button, CardContent, Card, CardHeader, Avatar, IconButton, Chip, Menu, MenuItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { AddCircleRounded, HomeRounded, MoreVertRounded, WorkRounded } from '@material-ui/icons';
import AddressCard from '../../components/AddressCard';
import { useAppState } from '../../context';
import Loading from '../../components/Loading';
import { NavLink } from 'react-router-dom';
import MyContainer from '../../components/Layout/MyContainer';

const useStyles = makeStyles((theme) => ({
  addNewAddress: {
    display: "flex",
    alignItems: "center"
  }
}));



export default function Address(props) {
  const { isLoading, addresses, getAddresses } = useAppState("useAccount");
  const classes = useStyles();

  useEffect(() => {
    getAddresses()
  }, [])
  return (
    <MyContainer>
      <Typography variant={"h6"} className={classes.addNewAddress} component={NavLink} to="/account/addaddress" ><AddCircleRounded /> Add a new address</Typography>
      {
        !isLoading && addresses.map((o, index) =>
          <AddressCard name={o.name} phone={o.phone} address={o.address} addressType={o.addressType} />
        )
      }
      {isLoading && <Loading />}

    </MyContainer >
  )
}
