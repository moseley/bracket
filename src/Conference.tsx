import * as React from 'react'
import { useSelector } from 'react-redux'
import Box from '@material-ui/core/Box'
import Match from './Match'
import { Matches, Seeds, selectPicks, Conferences } from './bracketSlice'
import { teamById } from './Seeds'

interface ConferenceProps {
  conference: Conferences
}

const Conference = ({ conference }: ConferenceProps) => {
  const [home, setHome] = React.useState<Seeds | null>(null)
  const [away, setAway] = React.useState<Seeds | null>(null)
  const picks = useSelector(selectPicks)

  React.useEffect(() => {
    const divisional1 = `${conference}Divisional1` as Matches
    const divisional2 = `${conference}Divisional2` as Matches

    const d1Id = picks[divisional1]
    const d2Id = picks[divisional2]

    const d1Team = d1Id ? teamById(d1Id) : null
    const d2Team = d2Id ? teamById(d2Id) : null
    if (d1Team && d2Team) {
      const advancing = [d1Team.seed, d2Team.seed]
      advancing.sort((a, b) => a - b)
      setHome(advancing[0] as Seeds)
      setAway(advancing[1] as Seeds)
    } else if (d1Team) {
      if (d1Team.seed === 1) {
        setHome(1)
        setAway(null)
      } else {
        setAway(d1Team.seed as Seeds)
        setHome(null)
      }
    }
  }, [picks, conference])
  return (
    <Box>
      <Match
        round='Conference'
        conference={conference}
        match={null}
        home={home}
        away={away}
      />
    </Box>
  )
}

export default Conference
