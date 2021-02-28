import { configureStore } from "@reduxjs/toolkit";
import authedUserReducer from "./modules/authedUser";
import usersReducer from "./modules/users";
import questionsReducer from "./modules/questions";
import { loadingBarReducer } from "react-redux-loading-bar";

export default configureStore({
  reducer: {
    authedUser: authedUserReducer,
    users: usersReducer,
    questions: questionsReducer,
    loadingBar: loadingBarReducer,
  },
  devTools: true,
});
