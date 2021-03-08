import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Round from './Round'

const useStyles = makeStyles(() => ({
  bracket: {
    justifyContent: 'center',
    marginTop: '100px',
    '& > div': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around'
    }
  }
}))

const Bracket = () => {
  const classes = useStyles()
  return (
    <Box display='flex' className={classes.bracket}>
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
