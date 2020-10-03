import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useAppState } from '../context';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function FormDialog() {
  const { locations, location, getLocations, toggleLocation, locationBox, setLocation } = useAppState("global");

  useEffect(() => {
    getLocations()
    if (location) {
      setLocation(location)
    }

  }, [])

  return (
    <Dialog fullWidth open={locationBox} onClose={toggleLocation} style={{ marginBottom: 0 }} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Location</DialogTitle>
      <DialogContent>
        <Autocomplete

          style={{ width: "100%", outline: "none" }}
          id="combo-box-demo"
          options={locations}
          getOptionLabel={(option) => `${option.area_pincode} - ${option.area_name}`}
          onChange={(event, newValue) => {
            setLocation(newValue);
            toggleLocation()
          }}
          renderInput={(params) => <TextField
            {...params}
            required
            fullWidth
            label="Select Area"
            style={{ background: "#fff", borderColor: "#fff", }}
            variant="outlined" />
          }
        />
      </DialogContent>
      <DialogActions>
      </DialogActions>
    </Dialog>
  );
}