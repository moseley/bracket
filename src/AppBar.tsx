import MuiAppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

interface AppBarProps {
  title: string
}

const AppBar = ({ title }: AppBarProps) => {
  return (
    <MuiAppBar color='default'>
      <Toolbar>
        <Typography variant='h5' color='secondary'>
          {title}
        </Typography>
      </Toolbar>
    </MuiAppBar>
  )
}

export default AppBar
