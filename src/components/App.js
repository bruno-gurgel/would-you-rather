import React, { useEffect } from "react";
import "../App.css";
import { useDispatch } from "react-redux";
import { handleInitialData } from "../redux/modules/shared";
import Authentication from "./Authentication";
import Dashboard from "./Dashboard";
import Navigation from "./Navigation";

function App() {
  const dispatch = useDispatch();

  const authedUser = "John Doe";

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);
  return (
    <div className="App">
      <Navigation authedUser={authedUser} />
      <Dashboard />
    </div>
  );
}

export default App;
