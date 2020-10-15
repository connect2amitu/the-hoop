import React from 'react'
import { Container, styled, Grid, Card, Divider, Avatar, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import MyContainer from '../../components/Layout/MyContainer';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  btnMenu: {
    height: 90,
    width: 90,
    textTransform: "capitalize",
    fontSize: 12
  },
  menuWrapper: {
    marginTop: 15
  },
  avatar: {
    height: 70,
    width: 70,
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
  },
  userName: {
    fontSize: 16,
    fontWeight: 600
  },
  userDetail: {
    fontSize: 12,
  },
  userWrapper: {
    margin: "15px 0",
  },
}));


export default function Payments(props) {
  const classes = useStyles();
  return (
    <MyContainer>
      <Grid container className={classes.userWrapper} alignItems={"center"}>
        <Grid item>Payments</Grid>
        <Grid item>
        </Grid>
      </Grid>
      <Divider />
    </MyContainer >
  )
}
