import { configureStore } from '@reduxjs/toolkit'
import jobsReducer from '../features/jobPortalSlice'

export const store = configureStore({
  reducer: {
    jobs: jobsReducer,
  },
})