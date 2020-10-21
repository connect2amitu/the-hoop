import React from 'react'
import { Container, styled, Grid, Card, Divider, Avatar, Button, Typography, List, ListItem, ListItemAvatar, ListItemText, Paper, Tabs, Tab } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import MyContainer from '../../components/Layout/MyContainer';

const useStyles = makeStyles((theme) => ({

  orderCard: {
    padding: 10
  },
  btns: {
    padding: "0 3px",
    fontSize: 12,
    textTransform: "inherit"
  },
  tCenter: {
    textAlign: "center",
    margin: "10px 0"
  },
}));

export default function Orders(props) {
  const classes = useStyles();

  return (
    <MyContainer>
      <Grid container direction={"column"} spacing={1}>
        {
          [...new Array(5)].map((o, index) =>
            <Grid item>
              <Card className={classes.orderCard}>
                <Grid item>
                  <Grid container justify={"space-between"}>
                    <Grid item><Typography>Order #1010123</Typography></Grid>
                    <Grid item>View</Grid>
                  </Grid>
                </Grid>
                <Grid item>Items:10</Grid>
                <Grid item>
                  <Grid container justify={"space-between"}>
                    <Grid item>02-10-2020 | 02:12 PM</Grid>
                    <Grid item><Button variant={"outlined"} className={classes.btns}>Repeat Order</Button> <Button variant={"outlined"} className={classes.btns}>Rate Order</Button></Grid>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          )
        }
      </Grid>
    </MyContainer >
  )
}
