import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme'
import AppBar from './AppBar'
import Bracket from './Bracket'
import SourceCode from './SourceCode'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar title='Bracket Challenge' />
      <Bracket />
      <SourceCode />
    </ThemeProvider>
  )
}

export default App
