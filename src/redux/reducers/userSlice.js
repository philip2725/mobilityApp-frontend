import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isSignedIn: false,
    skipLogin: false
  },
  reducers: {
    updateAuthStatus: state => {
      state.isSignedIn = !state.isSignedIn
    },
    skipLogin: state => {
      state.skipLogin = !state.skipLogin
    },
  }
})

export const { updateAuthStatus , skipLogin } = userSlice.actions

export default userSlice.reducer