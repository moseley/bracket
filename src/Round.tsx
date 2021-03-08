import WildCards from './WildCards'
import Divisionals from './Divisionals'
import Conference from './Conference'
import SuperBowl from './SuperBowl'
import { Conferences } from './bracketSlice'

interface RoundProps {
  conference: Conferences | null
  round: 'WildCard' | 'Divisional' | 'Conference' | 'SuperBowl'
}

const Round = ({ conference, round }: RoundProps) => {
  if (conference) {
    switch (round) {
      case 'WildCard':
        return <WildCards conference={conference} />
      case 'Divisional':
        return <Divisionals conference={conference} />
      case 'Conference':
        return <Conference conference={conference} />
    }
  }
  return <SuperBowl />
}

export default Round
