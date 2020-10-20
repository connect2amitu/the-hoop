import { Button, Card, CardContent, CardHeader, Chip, Divider, Grid, IconButton, makeStyles, Menu, MenuItem, Typography } from '@material-ui/core'
import { HomeRounded, MoreVertRounded, WorkRounded } from '@material-ui/icons';
import React from 'react'
import { NavLink } from 'react-router-dom';
import { useAppState } from '../context';

const useStyles = makeStyles((theme) => ({
  userWrapper: {
    margin: "15px 0",
  },
  cart: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  actionBtn: {
    padding: 5,
  }
}));



export default function AddressCard({ id, name, phone, address, addressType }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { isLoading, editAddress, deleteAddress } = useAppState("useAccount");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Grid container className={classes.userWrapper} alignItems={"flex-start"}>
      <Grid item xs={1}>{addressType === "home" ? <HomeRounded /> : <WorkRounded />}</Grid>
      <Grid item xs={11}>
        <Grid container direction={"column"}>
          <Grid item><Typography variant={"h6"} >{addressType}</Typography></Grid>
          <Grid item>{address}</Grid>
          <Grid item>
            <Grid container justify={"flex-end"}>
              <Grid item>
                <Button className={classes.actionBtn} component={NavLink} to={`/account/addaddress/${id}`} >Edit</Button>
              </Grid>
              <Grid item>
                <Button className={classes.actionBtn} color={"primary"} onClick={() => deleteAddress(id)}>Delete</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
      </Grid>
    </Grid>
  )
}
