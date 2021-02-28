import React, { useEffect } from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllData } from "../redux/modules/shared";
import Authentication from "./Authentication";
import Dashboard from "./Dashboard";
import Navigation from "./Navigation";
import NewQuestion from "./NewQuestion";
import { Redirect, Route } from "react-router-dom";
import { getAuthedUser } from "../redux/modules/authedUser";
import LoadingBar from "react-redux-loading-bar";

function App() {
  const dispatch = useDispatch();

  const authedUser = useSelector(getAuthedUser);

  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch]);

  return (
    <div className="App">
      <LoadingBar />
      <Route exact path="/" component={Authentication} />
      {authedUser === null ? (
        <Redirect to="/" />
      ) : (
        <div>
          <Navigation authedUser={authedUser} />
          <Route path="/home" component={Dashboard} />
          <Route path="/add" component={NewQuestion} />
        </div>
      )}
    </div>
  );
}

export default App;
