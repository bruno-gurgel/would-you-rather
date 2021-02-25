import React, { useEffect } from "react";
import "../App.css";
import { useDispatch } from "react-redux";
import { handleInitialData } from "../redux/modules/shared";
import Authentication from "./Authentication";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);
  return (
    <div className="App">
      <Authentication />
    </div>
  );
}

export default App;
