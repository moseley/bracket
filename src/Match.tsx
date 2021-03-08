import { makeStyles, Theme } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import FormControl from '@material-ui/core/FormControl'
import Legend from './Legend'
import RadioGroup from './RadioGroup'
import { Matches, Conferences, Seeds } from './bracketSlice'

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    margin: theme.spacing(1),
    border: `1px solid ${theme.palette.primary.main}`
  },
  formControl: {
    margin: theme.spacing(1)
  }
}))

interface MatchParams {
  round: 'WildCard' | 'Divisional' | 'Conference' | 'SuperBowl'
  conference: Conferences | null
  match: 1 | 2 | 3 | null
  home: Seeds | null
  away: Seeds | null
}

const Match = ({ round, conference, match, home, away }: MatchParams) => {
  const classes = useStyles()
  const matchId =
    round === 'SuperBowl'
      ? 'superBowl'
      : round === 'Conference'
      ? (`${conference}${round}` as Matches)
      : (`${conference}${round}${match}` as Matches)
  return (
    <Paper className={classes.paper}>
      <FormControl component='fieldset' className={classes.formControl}>
        <Legend title={round} />
        <RadioGroup
          conference={conference}
          matchId={matchId}
          home={home}
          away={away}
        />
      </FormControl>
    </Paper>
  )
}

export default Match
