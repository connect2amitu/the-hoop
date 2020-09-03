import React from 'react'
import { Container, Grid, Accordion, AccordionSummary, Typography, AccordionDetails, styled, Box, Button } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ScheduleRounded, RoomRounded } from '@material-ui/icons';
import { useState } from 'react';


const MyContainer = styled(Container)({
  paddingBottom: "90px",
  marginTop: "60px",
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


export default function Checkout(props) {
  const [expanded, setExpanded] = useState("");
  const [value, setValue] = useState(0);
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     expanded: "",
  //     value: 0
  //   }
  // }
  const handleChange = (type) => {


    // this.setState({
    //   expanded: this.state.expanded !== type ? type : ""
    // })
    setExpanded(expanded !== type ? type : "")
  }

  // handleChangeTab = (evt, newValue) => {
  //   this.setState({
  //     value: newValue
  //   })
  // }
  // render() {
  // const { expanded, value } = this.state
  return (
    <MyContainer>
      <Grid container>
        <Grid item xs={8}>
          <Grid container direction={"column"}>
            <Grid item>
              <Accordion expanded={expanded === 'panel1'} onChange={() => handleChange('panel1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" >
                  <Grid container spacing={2}>
                    <Grid item>
                      <RoomRounded />
                    </Grid>
                    <Grid item>
                      <Typography>101, parimal society, varachha road surat-6
                          {/* <MoreVertRounded onClick={() => alert()} /> */}
                      </Typography>
                    </Grid>
                  </Grid>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>  </Typography>
                </AccordionDetails>
              </Accordion>
              {
                [...new Array(3)].map((o, index) =>
                  <Accordion expanded={expanded === 'panel-' + index} onChange={() => handleChange('panel-' + index)}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" >
                      <Grid container spacing={2}>
                        <Grid item>
                          <ScheduleRounded />
                        </Grid>
                        <Grid item>
                          <Typography variant={"h6"}>Safeway delivery time</Typography>
                        </Grid>
                      </Grid>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container>
                        <Grid item xs={12}>
                          {
                            [...new Array(10)].map((o, index2) =>
                              <Button>{index2}</Button>
                            )
                          }
                        </Grid>
                        <Grid item xs={12}>
                          <TabPanel value={value} index={0}> Item One </TabPanel>
                          <TabPanel value={value} index={1}> Item Two </TabPanel>
                          <TabPanel value={value} index={2}> Item Three </TabPanel>
                          <TabPanel value={value} index={3}> Item Four </TabPanel>
                          <TabPanel value={value} index={4}> Item Five </TabPanel>
                          <TabPanel value={value} index={5}> Item Size </TabPanel>
                        </Grid>
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                )
              }
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </MyContainer >
  )
}
