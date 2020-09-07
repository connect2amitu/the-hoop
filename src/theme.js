
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

import {
  green, purple, amber, blue, blueGrey, brown, common, cyan, deepOrange, deepPurple, grey, indigo,
  teal, orange, red
} from '@material-ui/core/colors';

var darkTheme = createMuiTheme({
  palette: {
    primary: red,
    secondary: orange,
    type: "dark"
  },
});
var theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: grey
  },

});
darkTheme = responsiveFontSizes(darkTheme);
theme = responsiveFontSizes(theme);

export { darkTheme, theme }