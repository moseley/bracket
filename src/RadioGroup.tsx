import { useSelector, useDispatch } from 'react-redux'
import MuiRadioGroup from '@material-ui/core/RadioGroup'
import Radio from './Radio'
import { Conferences, Matches, Seeds, selectPicks, pick } from './bracketSlice'
import React from 'react'

interface RadioGroupProps {
  conference: Conferences | null
  matchId: Matches
  home: Seeds | null
  away: Seeds | null
}

const RadioGroup = ({ conference, matchId, home, away }: RadioGroupProps) => {
  const dispatch = useDispatch()
  const picks = useSelector(selectPicks)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist()
    dispatch(
      pick({
        matchId: matchId,
        teamId: event.target.value
      })
    )
  }

  return (
    <MuiRadioGroup
      aria-label={matchId}
      name={matchId}
      value={picks[matchId]}
      onChange={handleChange}>
      <Radio conference={conference ? conference : 'nfc'} seed={home} />
      <Radio conference={conference ? conference : 'afc'} seed={away} />
    </MuiRadioGroup>
  )
}

export default RadioGroup
