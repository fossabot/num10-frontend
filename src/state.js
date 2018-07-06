import { location } from "@hyperapp/router";

const state = {
  location: location.state,
  authenticated: !!localStorage.getItem("access_token")
};

export default state;
