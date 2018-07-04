import { h } from "hyperapp";
import { css } from "emotion";
import logoNum10 from "../assets/num10-logo.png";

const style = css`
  text-align: center;

  img[alt="Logo"] {
    width: 250px;
    margin-top: 5em;
  }

  button {
    border: none;
    font-weight: bold;
    background: white;
  }
`;

const Login = () => (
  <div class={style}>
    <div class="logo">
      <img src={logoNum10} alt="Logo" />
    </div>
    <div class="sign-in">
      <button>Sign in with Google</button>
    </div>
  </div>
);

export default Login;
