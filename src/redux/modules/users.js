import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { saveUser } from "../../utils/api";

export const handleNewUser = createAsyncThunk(
  "todos/addNewUser",
  async (newUserInfo) => {
    return saveUser(newUserInfo);
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: {},
  reducers: {
    receiveUsers: (state, action) => (state = action.payload),
  },
  extraReducers: (builder) => {
    builder.addCase(handleNewUser.fulfilled, (state, action) => {
      const newUser = action.payload;
      return (state = newUser);
    });
  },
});

export const { receiveUsers, addUser } = userSlice.actions;

export const selectUsers = (state) => state.users;

export default userSlice.reducer;
