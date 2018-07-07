import { h, app } from "hyperapp";
import { Route, Switch, Redirect, location } from "@hyperapp/router";
import styles from "./styles/global";
import state from "./state";
import actions from "./actions";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

const PrivateRoute = ({isAuthenticated}) => {
  return isAuthenticated ? (
    <Route parent path="/" render={Dashboard} />
  ) : (
    <Redirect to="/login" />
  );
};

const LoginComponent = actions => props => <Login actions={actions} state={state}/>;

const view = (state, actions) => (
  <div id="container">
    <Switch>
      <Route path="/login" render={LoginComponent(actions)} />
      <PrivateRoute isAuthenticated={state.authenticated} />
      <Route path="/" render={Dashboard} />
      <Redirect to="/" />
    </Switch>
  </div>
);

const main = app(state, actions, view, document.body);

const unsubscribe = location.subscribe(main.location);
