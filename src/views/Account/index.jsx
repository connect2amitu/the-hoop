import React, { useEffect, useState } from 'react'
import { Container, styled, Grid, Card, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { FilterNoneRounded, SettingsRounded, PowerSettingsNewRounded, HelpOutlineRounded, LocationOnRounded, EditAttributesRounded, EditRounded } from '@material-ui/icons';
import { useAppState } from '../../context';
import { useCookies } from 'react-cookie';
import FullScreenDialog from '../../components/FullScreenDialog';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const MyContainer = styled(Container)({
  padding: "10px",
  marginTop: "10px",
});

export default function Account(props) {
  const classes = useStyles();
  const { logout } = useAppState("useAuth");
  const [open, setOpen] = useState(false);
  const [heading, setHeading] = useState("");
  const handleOpen = (heading = "") => {
    setOpen(!open);
    setHeading(heading)
  };

  return (
    <MyContainer>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <List
            fullWidth
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Account
        </ListSubheader>
            }
            className={classes.root}
          >
            <ListItem button onClick={() => handleOpen("Orders")}>
              <ListItemIcon>
                <FilterNoneRounded />
              </ListItemIcon>
              <ListItemText primary="Orders" />
            </ListItem>
            <ListItem button onClick={() => handleOpen("Address")}>
              <ListItemIcon>
                <LocationOnRounded />
              </ListItemIcon>
              <ListItemText primary="Addresses" secondary={<Grid container justify={"space-between"} alignItems={"center"}><Grid item>101, parimal society, varachha road</Grid><Grid item><EditRounded /></Grid></Grid>} />
            </ListItem>
            <ListItem button onClick={() => handleOpen("Help")}>
              <ListItemIcon>
                <HelpOutlineRounded />
              </ListItemIcon>
              <ListItemText primary="Help" />
            </ListItem>
            <ListItem button onClick={() => handleOpen("Settings")}>
              <ListItemIcon>
                <SettingsRounded />
              </ListItemIcon>
              <ListItemText primary="Your account settings" />
            </ListItem>
            <ListItem button onClick={() => logout()}>
              <ListItemIcon>
                <PowerSettingsNewRounded />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>

        </Grid>
        <Grid item xs={12} sm={8}><Card>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, corrupti officiis. Dolores reiciendis dignissimos rem aspernatur placeat ab similique at modi? Culpa iusto maxime voluptates error reprehenderit velit voluptatum omnis.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, corrupti officiis. Dolores reiciendis dignissimos rem aspernatur placeat ab similique at modi? Culpa iusto maxime voluptates error reprehenderit velit voluptatum omnis.</p>
        </Card></Grid>
      </Grid>
      <FullScreenDialog open={open} heading={heading} handleOpen={handleOpen} >
        <Container>
          <Grid container>
            {heading}
          </Grid>
        </Container>
      </FullScreenDialog>
    </MyContainer>
  )
}
