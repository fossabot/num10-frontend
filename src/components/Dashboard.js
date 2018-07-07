import { h } from "hyperapp";

const logout = () => {
  localStorage.removeItem("access_token");
};

const Dashboard = ({ match, location }) => (
  <div>
    <h1>Dashboard</h1>
    <button onclick={() => logout()}>Login</button>
  </div>
);

export default Dashboard;
