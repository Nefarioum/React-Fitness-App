import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface NavSlice {
    origin: number
}

const initialState: NavSlice = {
    origin: 0
}

export const NavSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrigin: (state: any, action: PayloadAction<number>) => {
        state.origin = action.payload
    },
  },
})

export const { setOrigin } = NavSlice.actions

export const selectOrigin = (state: any) => state.nav.origin;

export default NavSlice.reducer