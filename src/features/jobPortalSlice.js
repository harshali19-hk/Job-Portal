import { createSlice } from '@reduxjs/toolkit'
import { jobData } from '../Utilities/jobData'

const initialState = {
  jobsData: jobData
}

export const jobPortalSlice = createSlice({
  name: 'job-portal',
  initialState,


})

export const { } = jobPortalSlice.actions

export default jobPortalSlice.reducer