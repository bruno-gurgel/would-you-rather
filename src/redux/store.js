import { configureStore } from "@reduxjs/toolkit";
import authedUserReducer from "./modules/authedUser";
import usersReducer from "./modules/users";
import questionsReducer from "./modules/questions";

export default configureStore({
  reducer: {
    authedUser: authedUserReducer,
    users: usersReducer,
    questions: questionsReducer,
  },
  devTools: true,
});
