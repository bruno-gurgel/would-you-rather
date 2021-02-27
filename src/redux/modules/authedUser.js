import { createSlice } from "@reduxjs/toolkit";

const authedUserSlice = createSlice({
  name: "authedUser",
  initialState: null,
  reducers: {
    doAuthedUser: (state, action) => (state = action.payload),
  },
});

export const { doAuthedUser } = authedUserSlice.actions;

export const getAuthedUser = (state) => state.authedUser;

export default authedUserSlice.reducer;
