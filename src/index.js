import { h, app } from "hyperapp";
import { location, Route } from "@hyperapp/router";
import state from "./state";
import actions from "./actions";
import Login from "./components/Login"
import styles from "./styles/global";

const Home = () => <h2>Home</h2>;

const view = (state, actions) => (
  <div id="container">
    <Route render={Login} />
  </div>
);

const main = app(state, actions, view, document.body);

const unsubscribe = location.subscribe(main.location);
