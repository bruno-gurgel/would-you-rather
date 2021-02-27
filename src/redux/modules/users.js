import { createSlice } from "@reduxjs/toolkit";
import { saveUser } from "../../utils/api";

const userSlice = createSlice({
  name: "users",
  initialState: {},
  reducers: {
    doReceiveUsers: (state, action) => (state = action.payload),
    doAddUser: (state, action) => {
      const newUser = action.payload;
      state.users[newUser.id] = newUser;
    },
  },
});

export const { doReceiveUsers, doAddUser } = userSlice.actions;

export const handleNewUser = (newUserInfo) => (dispatch) => {
  return saveUser(newUserInfo).then((user) => dispatch(doAddUser(user)));
};

export const getUsers = (state) => state.users;

export default userSlice.reducer;
