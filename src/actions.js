import { location } from "@hyperapp/router";

const actions = {
  location: location.actions,
  authenticate: value => state => ({ authenticated: !state }),
};

export default actions;
