import { createSlice } from "@reduxjs/toolkit";

const questionSlice = createSlice({
  name: "questions",
  initialState: {},
  reducers: {
    doReceiveQuestions: (state, action) => (state = action.payload),
  },
});

export const { doReceiveQuestions } = questionSlice.actions;

export const getQuestions = (state) => state.questions;

export default questionSlice.reducer;
