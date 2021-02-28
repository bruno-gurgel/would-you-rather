import { getInitialData } from "../../utils/api";
import { doReceiveUsers } from "./users";
import { doReceiveQuestions } from "./questions";
import { hideLoading, showLoading } from "react-redux-loading";

export function fetchAllData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(doReceiveUsers(users));
      dispatch(doReceiveQuestions(questions));
      dispatch(hideLoading());
    });
  };
}
