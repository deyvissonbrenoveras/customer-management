import { configureStore } from '@reduxjs/toolkit'
import customerReducer from './customer/customerSlice'


export const store = configureStore({
  reducer: {
    customer: customerReducer,
  },
})

// Infer types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
