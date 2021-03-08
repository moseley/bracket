import Box from '@material-ui/core/Box'
import Match from './Match'
import { Conferences } from './bracketSlice'

interface WildCardsProps {
  conference: Conferences
}

const WildCards = ({ conference }: WildCardsProps) => {
  return (
    <Box>
      <Match
        round='WildCard'
        conference={conference}
        match={1}
        home={4}
        away={5}
      />
      <Match
        round='WildCard'
        conference={conference}
        match={2}
        home={3}
        away={6}
      />
      <Match
        round='WildCard'
        conference={conference}
        match={3}
        home={2}
        away={7}
      />
    </Box>
  )
}

export default WildCards
