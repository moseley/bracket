import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import bracketReducer from './bracketSlice'

export const store = configureStore({
  reducer: {
    bracket: bracketReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
