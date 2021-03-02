import { getInitialData, saveQuestionAnswer } from "../../utils/api";
import { doReceiveUsers } from "./users";
import { doReceiveQuestions } from "./questions";
import { hideLoading, showLoading } from "react-redux-loading-bar";

export const fetchAllData = () => async (dispatch) => {
  dispatch(showLoading());
  return getInitialData().then(({ users, questions }) => {
    dispatch(doReceiveUsers(users));
    dispatch(doReceiveQuestions(questions));
    dispatch(hideLoading());
  });
};

export const handleNewAnswer = (newAnswerInfo) => async (dispatch) => {
  dispatch(showLoading);
  return saveQuestionAnswer(newAnswerInfo).then(() => dispatch(hideLoading));
};
