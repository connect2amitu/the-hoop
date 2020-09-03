import React from 'react'
import { Paper, Tabs, Tab, Grid, AppBar } from '@material-ui/core'

export default function CategoryBar(props) {

  const { value, handleChange } = props;

  return (
    <Grid container justify={"center"}>
      <Grid item >
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            {/* <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChange}
              aria-label="disabled tabs example"
            > */}
            <Tab label="Green Vegetables" />
            <Tab label="Beans" />
            <Tab label="Chillies" />
            <Tab label="Leafy Vegetables" />
            <Tab label="Brinjals" />
            <Tab label="Tubers" />
            <Tab label="Special" />
            <Tab label="Fruits" />
          </Tabs>
        </AppBar>
      </Grid>
    </Grid>
  );
}
