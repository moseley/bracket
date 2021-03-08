import { createMuiTheme } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: blue,
    type: 'light'
  },
  typography: {
    fontFamily: [
      'IBM Plex Sans',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700
  },
  shape: {
    borderRadius: 4
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          background: 'url(grass.jpg) no-repeat center center fixed',
          backgroundSize: 'cover'
        }
      }
    }
  }
})

export default theme
