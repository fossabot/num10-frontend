import { h, app } from "hyperapp";
import { Route, Switch, Redirect, location } from "@hyperapp/router";
import styles from "./styles/global";
import state from "./state";
import actions from "./actions";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Page404 from "./components/Page404";

const PrivateRoute = () => {
  return localStorage.getItem("access_token") ? (
    <Route path="/" render={Dashboard} />
  ) : (
    <Redirect to="/login" />
  );
};

const view = (state, actions) => (
  <div id="container">
    <Switch>
      <Route path="/" render={Dashboard} />
      <Route path="/login" render={Login} />
      <PrivateRoute />
      <Redirect to="/" />
    </Switch>
  </div>
);

const main = app(state, actions, view, document.body);

const unsubscribe = location.subscribe(main.location);
