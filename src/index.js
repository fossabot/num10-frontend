import { h, app } from "hyperapp";
import { Route, Switch, Redirect, location } from "@hyperapp/router";
import styles from "./styles/global";
import state from "./state";
import actions from "./actions";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

const PrivateRoute = props => {
  console.log(props);
  return (
    <Route
      render={(props) =>
        props.isAuthenticated ? <Login {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const view = (state, actions) => (
  <div id="container">
    <Switch>
      <Route path="/login" render={Login} />
      <PrivateRoute
        isAuthenticated={state.authenticated}
        authenticate={actions.authenticate}
      />
      <Route path="/" render={Dashboard} />
      <Redirect to="/" />
    </Switch>
  </div>
);

const main = app(state, actions, view, document.body);

const unsubscribe = location.subscribe(main.location);
