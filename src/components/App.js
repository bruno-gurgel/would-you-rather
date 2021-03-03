import "../App.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { fetchAllData } from "../redux/modules/shared";
import { getAuthedUser } from "../redux/modules/authedUser";
import Authentication from "./Authentication";
import Navigation from "./Navigation";
import Dashboard from "./Dashboard";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";
import Poll from "./Poll";
import PageNotFound from "./PageNotFound";

function App() {
  const dispatch = useDispatch();

  const authedUser = useSelector(getAuthedUser);
  const [isPageNotFound, updateIsPageNotFound] = useState(false);

  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch]);

  return (
    <div className="App">
      <LoadingBar />
      <Route
        path="/"
        render={() => (!isPageNotFound && authedUser ? <Navigation /> : null)}
      />
      <Switch>
        <Route path="/auth" component={Authentication} />
        <PrivateRoute path="/add" component={NewQuestion} />
        <PrivateRoute path="/leaderboard" component={Leaderboard} />
        <PrivateRoute path="/questions/:id" component={Poll} />
        <PrivateRoute exact path="/" component={Dashboard} />
        <Route
          path="*"
          render={(props) => (
            <PageNotFound
              {...props}
              updateIsPageNotFound={updateIsPageNotFound}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
