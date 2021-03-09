import FormControlLabel from '@material-ui/core/FormControlLabel'
import MuiRadio from '@material-ui/core/Radio'
import Label from './Label'
import { Conferences, Seeds } from './bracketSlice'
import { teamByConferenceSeed } from './Seeds'

interface RadioProps {
  conference: Conferences
  seed: Seeds | null
}

const Radio = ({ conference, seed }: RadioProps) => {
  const team = seed ? teamByConferenceSeed(conference, seed) : null
  return (
    <FormControlLabel
      value={team ? team.id : ''}
      control={<MuiRadio disabled={!team} />}
      label={<Label conference={conference} seed={seed} />}
    />
  )
}

export default Radio
