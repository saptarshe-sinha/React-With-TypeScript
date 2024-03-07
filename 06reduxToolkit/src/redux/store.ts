import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

// Now we can make slices
// In Context of Redux Slices are different types of features