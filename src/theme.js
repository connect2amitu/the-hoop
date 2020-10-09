
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

import { grey, orange, red } from '@material-ui/core/colors';

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