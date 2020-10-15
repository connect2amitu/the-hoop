import { Card, CardContent, CardHeader, Chip, Grid, IconButton, makeStyles, Menu, MenuItem, Typography } from '@material-ui/core'
import { HomeRounded, MoreVertRounded, WorkRounded } from '@material-ui/icons';
import React from 'react'

const useStyles = makeStyles((theme) => ({
  userWrapper: {
    margin: "15px 0",
  },
  cart: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));



export default function AddressCard({ name, phone, address, addressType }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Grid container className={classes.userWrapper} alignItems={"center"}>
      <Card className={classes.cart}>
        <CardHeader
          action={
            <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              <MoreVertRounded />
            </IconButton>
          }
          title={name}
          subheader={address}
        />
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Edit</MenuItem>
          <MenuItem onClick={handleClose}>Delete</MenuItem>
        </Menu>
        <CardContent>
          <Typography variant="body2" component="p">
            {phone}
          </Typography>
          <Typography variant="body2" component="p">
            <Chip icon={addressType === "Home" ? <HomeRounded /> : <WorkRounded />} label={addressType} />
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}
