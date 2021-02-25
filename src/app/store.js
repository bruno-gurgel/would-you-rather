import { configureStore } from "@reduxjs/toolkit";
import authedUserReducer from "../redux/modules/authedUser";
import usersReducer from "../redux/modules/users";
import questionsReducer from "../redux/modules/questions";
import logger from "../redux/middleware/logger";

export default configureStore({
  reducer: {
    authedUser: authedUserReducer,
    users: usersReducer,
    questions: questionsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
