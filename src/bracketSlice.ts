import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  // AppThunk,
  RootState
} from './store'

export type Matches =
  | 'superBowl'
  | 'afcConference'
  | 'nfcConference'
  | 'afcDivisional1'
  | 'afcDivisional2'
  | 'nfcDivisional1'
  | 'nfcDivisional2'
  | 'afcWildCard1'
  | 'afcWildCard2'
  | 'afcWildCard3'
  | 'nfcWildCard1'
  | 'nfcWildCard2'
  | 'nfcWildCard3'

export type Seeds = 1 | 2 | 3 | 4 | 5 | 6 | 7

export type Conferences = 'afc' | 'nfc'

interface PicksParams {
  superBowl: string | null
  afcConference: string | null
  nfcConference: string | null
  afcDivisional1: string | null
  afcDivisional2: string | null
  nfcDivisional1: string | null
  nfcDivisional2: string | null
  afcWildCard1: string | null
  afcWildCard2: string | null
  afcWildCard3: string | null
  nfcWildCard1: string | null
  nfcWildCard2: string | null
  nfcWildCard3: string | null
}

interface BracketState {
  points: number
  picks: PicksParams
}

const initialState: BracketState = {
  points: 0,
  picks: {
    superBowl: null,
    afcConference: null,
    nfcConference: null,
    afcDivisional1: null,
    afcDivisional2: null,
    nfcDivisional1: null,
    nfcDivisional2: null,
    afcWildCard1: null,
    afcWildCard2: null,
    afcWildCard3: null,
    nfcWildCard1: null,
    nfcWildCard2: null,
    nfcWildCard3: null
  }
}

export const bracketSlice = createSlice({
  name: 'bracket',
  initialState,
  reducers: {
    pick: (
      state,
      action: PayloadAction<{
        matchId: Matches
        teamId: string
      }>
    ) => {
      state.picks[action.payload.matchId] = action.payload.teamId
    },
    score: (state, action: PayloadAction<number>) => {
      state.points = action.payload
    }
  }
})

export const { pick, score } = bracketSlice.actions

// export const scoreAsync = (): AppThunk => dispatch => {
//   dispatch(score(points))
// }

export const selectPicks = (state: RootState) => state.bracket.picks

export default bracketSlice.reducer
