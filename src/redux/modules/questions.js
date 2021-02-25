import { createSlice } from "@reduxjs/toolkit";

const questionSlice = createSlice({
  name: "questions",
  initialState: {},
  reducers: {
    receiveQuestions: (state, action) => (state = action.payload),
  },
});

export const { receiveQuestions } = questionSlice.actions;

export const selectQuestions = (state) => state.questions;

export default questionSlice.reducer;
