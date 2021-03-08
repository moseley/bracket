import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Box from '@material-ui/core/Box'
import Round from './Round'

const useStyles = makeStyles(() => ({
  bracket: {
    justifyContent: 'left',
    marginTop: '100px',
    '& > div': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around'
    }
  },
  center: {
    justifyContent: 'center'
  }
}))

const Bracket = () => {
  const classes = useStyles()
  const theme = useTheme()
  const centerBrackets = useMediaQuery(theme.breakpoints.up('lg'))
  return (
    <Box
      display='flex'
      className={clsx(classes.bracket, {
        [classes.center]: centerBrackets
      })}>
      <Round round='WildCard' conference='afc' />
      <Round round='Divisional' conference='afc' />
      <Round round='Conference' conference='afc' />
      <Round round='SuperBowl' conference={null} />
      <Round round='Conference' conference='nfc' />
      <Round round='Divisional' conference='nfc' />
      <Round round='WildCard' conference='nfc' />
    </Box>
  )
}

export default Bracket
