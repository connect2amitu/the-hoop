import React, { useEffect } from 'react'
import { Container, styled, Grid, Typography, CardActions, Button, CardContent, Card, CardHeader, Avatar, IconButton, Chip, Menu, MenuItem, Backdrop, CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors';
import { AddCircleRounded, HomeRounded, MoreVertRounded, WorkRounded } from '@material-ui/icons';
import AddressCard from '../../components/AddressCard';
import { useAppState } from '../../context';
import Loading from '../../components/Loading';
import { NavLink } from 'react-router-dom';
import MyContainer from '../../components/Layout/MyContainer';

const useStyles = makeStyles((theme) => ({
  addNewAddress: {
    borderColor: green[200],
    color: green[600],
    fontWeight: 600
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));



export default function Address(props) {
  const { isLoading, addresses, getAddresses } = useAppState("useAccount");
  const classes = useStyles();
  console.log('addresses =>', addresses)

  useEffect(() => {
    // getAddresses()
  }, [])
  return (
    <MyContainer>
      {
        !isLoading && addresses.map((o, index) =>
          <AddressCard id={o.id} name={o.name} phone={o.phone} address={o.address} addressType={o.addressType} />
        )
      }
      <Button className={classes.addNewAddress} component={NavLink} to="/account/addaddress" variant={"outlined"} fullWidth >Add a new address</Button>
      {isLoading &&
        <Backdrop className={classes.backdrop} open={isLoading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      }

    </MyContainer >
  )
}
