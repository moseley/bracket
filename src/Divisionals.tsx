import * as React from 'react'
import { useSelector } from 'react-redux'
import Box from '@material-ui/core/Box'
import Match from './Match'
import { Matches, Seeds, Conferences, selectPicks } from './bracketSlice'
import { teamById } from './Seeds'

interface DivisionalsProps {
  conference: Conferences
}

const Divisionals = ({ conference }: DivisionalsProps) => {
  const [away1, setAway1] = React.useState<Seeds | null>(null)
  const [home2, setHome2] = React.useState<Seeds | null>(null)
  const [away2, setAway2] = React.useState<Seeds | null>(null)
  const picks = useSelector(selectPicks)

  React.useEffect(() => {
    const wildCard1 = `${conference}WildCard1` as Matches
    const wildCard2 = `${conference}WildCard2` as Matches
    const wildCard3 = `${conference}WildCard3` as Matches
    const wc1Id = picks[wildCard1]
    const wc2Id = picks[wildCard2]
    const wc3Id = picks[wildCard3]

    const wc1Team = wc1Id ? teamById(wc1Id) : null
    const wc2Team = wc2Id ? teamById(wc2Id) : null
    const wc3Team = wc3Id ? teamById(wc3Id) : null
    if (wc1Team && wc2Team && wc3Team) {
      const advancing = [wc1Team.seed, wc2Team.seed, wc3Team.seed]
      advancing.sort((a, b) => a - b)
      setHome2(advancing[0] as Seeds)
      setAway2(advancing[1] as Seeds)
      setAway1(advancing[2] as Seeds)
    } else if (wc3Team) {
      if (wc3Team.seed === 7) {
        setAway1(7)
        setHome2(null)
      } else {
        setHome2(2)
        setAway1(null)
      }
    }
  }, [picks, conference])

  return (
    <Box>
      <Match
        round='Divisional'
        conference={conference}
        match={1}
        home={1}
        away={away1}
      />
      <Match
        round='Divisional'
        conference={conference}
        match={2}
        home={home2}
        away={away2}
      />
    </Box>
  )
}

export default Divisionals
