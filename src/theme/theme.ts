import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0030a2',
    },
    secondary: {
      main: '#002171',
      contrastText: '#fff',
    },
  },
  typography: {
    h2: {
      fontSize: 30,
      marginBlock: 15,
    },
    h3: {
      fontSize: 26,
      marginBlock: 15,
    },
    h4: {
      fontSize: 18,
      marginBlock: 15,
    },
  },
});
export default theme;
