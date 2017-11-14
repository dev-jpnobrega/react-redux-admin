import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue600, grey900} from 'material-ui/styles/colors';

const themeDefault = getMuiTheme({
  palette: {
    primary1Color: "#1690DB",
    primary2Color: "#2173B3",
    primary3Color: "#A9D2EB",
    accent1Color: "#ED3B3B",
    accent2Color: "#ED2B2B",
    accent3Color: "#F58C8C"
  },
  appBar: {
    height: 57,
    color: blue600
  },
  drawer: {
    width: 230,
    color: grey900
  },
  raisedButton: {
    primaryColor: blue600,
  }
});


export default themeDefault;