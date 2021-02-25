import React, { useEffect } from "react";
import logo from "../logo.svg";
import { Counter } from "../features/counter/Counter";
import "../App.css";
import { useDispatch } from "react-redux";
import { handleInitialData } from "../redux/modules/shared";
import { receiveUsers } from "../redux/modules/users";
import { receiveQuestions } from "../redux/modules/questions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);
  return <div className="App">test</div>;
}

export default App;
