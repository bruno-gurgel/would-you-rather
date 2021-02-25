import { createSlice } from "@reduxjs/toolkit";

const authedUserSlice = createSlice({
  name: "authedUser",
  initialState: null,
  reducers: {
    setAuthedUser: (state, action) => (state = action.payload),
  },
});

export const { setAuthedUser } = authedUserSlice.actions;

export const selectAuthedUser = (state) => state.authedUser;

export default authedUserSlice.reducer;
