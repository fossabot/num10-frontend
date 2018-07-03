import { h, app } from "hyperapp"
import state from "./state"
import actions from "./actions";

const view = (state, actions) => (
  <div id="container">
    <h1>Hello World</h1>
  </div>
)

app(state, actions, view, document.body)