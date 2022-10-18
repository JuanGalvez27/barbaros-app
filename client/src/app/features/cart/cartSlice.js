import { createSlice } from "@reduxjs/toolkit"

export const cartSlice = createSlice({

  name: 'cart',
  initialState: [],
  reducers: {
    addTradicional: (state, action) => {
      console.log(state, action)
    }
  }
})

export const { addTradicional } = cartSlice.actions;

export default cartSlice.reducer;