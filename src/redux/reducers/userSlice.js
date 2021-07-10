import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isSignedIn: false,
    skipLogin: false,
    data: {}
  },
  reducers: {
    updateAuthStatus: (state,action) => {
      if (!action.payload) {
        state.data = {}
      }
      state.isSignedIn = action.payload
    },
    skipLogin: (state,action) => {
      state.skipLogin = action.payload
    },
    updateUser: (state, action) => {
      state.data = { ...state.data, ...action.payload }
    },
  }
})

export const { updateAuthStatus, skipLogin, updateUser } = userSlice.actions

export default userSlice.reducer