import { createSlice } from "@reduxjs/toolkit";
import { saveQuestion } from "../../utils/api";

const questionSlice = createSlice({
  name: "questions",
  initialState: {},
  reducers: {
    doReceiveQuestions: (state, action) => (state = action.payload),
    doNewQuestion: (state, action) => {
      const newQuestion = action.payload;
      state[newQuestion.id] = newQuestion;
    },
  },
});

export const { doReceiveQuestions, doNewQuestion } = questionSlice.actions;

export const handleNewQuestion = (newQuestionInfo) => async (dispatch) => {
  return saveQuestion(newQuestionInfo).then((question) =>
    dispatch(doNewQuestion(question))
  );
};

export const getQuestions = (state) => state.questions;
export const getSortedQuestionsIDs = (state) => {
  return Object.keys(state.questions).sort(
    (a, b) => state.questions[b].timestamp - state.questions[a].timestamp
  );
};

export default questionSlice.reducer;
