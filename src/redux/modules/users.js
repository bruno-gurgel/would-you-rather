import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {},
  reducers: {
    receiveUsers: (state, action) => (state = action.payload),
  },
});

export const { receiveUsers } = userSlice.actions;

export const selectUsers = (state) => state.users;

export default userSlice.reducer;
