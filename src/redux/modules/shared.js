import { getInitialData } from "../../utils/api";
import { doReceiveUsers } from "./users";
import { doReceiveQuestions } from "./questions";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(doReceiveUsers(users));
      dispatch(doReceiveQuestions(questions));
    });
  };
}
