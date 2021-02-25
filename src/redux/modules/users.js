import { createSlice } from "@reduxjs/toolkit";
import { hideLoading, showLoading } from "react-redux-loading";
import { saveUser } from "../../utils/api";

const userSlice = createSlice({
  name: "users",
  initialState: {},
  reducers: {
    receiveUsers: (state, action) => (state = action.payload),
    addUser: (state, action) => {
      const payload = action.payload;
      return { ...state, payload };
    },
  },
});

export function handleNewUser(name, username) {
  return (dispatch) => {
    dispatch(showLoading());
    console.log("redux user");
    return saveUser({ name, username })
      .then((newUserInfo) => dispatch(addUser(newUserInfo)))
      .then(() => dispatch(hideLoading()));
  };
}

export const { receiveUsers, addUser } = userSlice.actions;

export const selectUsers = (state) => state.users;

export default userSlice.reducer;
