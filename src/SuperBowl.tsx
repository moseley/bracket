import * as React from 'react'
import { useSelector } from 'react-redux'
import Box from '@material-ui/core/Box'
import Match from './Match'
import { Seeds, selectPicks } from './bracketSlice'
import { teamById } from './Seeds'

const SuperBowl = () => {
  const [nfc, setNfc] = React.useState<Seeds | null>(null)
  const [afc, setAfc] = React.useState<Seeds | null>(null)
  const picks = useSelector(selectPicks)

  React.useEffect(() => {
    const afcId = picks.afcConference
    const nfcId = picks.nfcConference

    const afcTeam = afcId ? teamById(afcId) : null
    const nfcTeam = nfcId ? teamById(nfcId) : null
    if (afcTeam) {
      setAfc(afcTeam.seed)
    }
    if (nfcTeam) {
      setNfc(nfcTeam.seed)
    }
  }, [picks])
  return (
    <Box>
      <Match
        round='SuperBowl'
        conference={null}
        match={null}
        home={nfc}
        away={afc}
      />
    </Box>
  )
}

export default SuperBowl
