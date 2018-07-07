import { h } from "hyperapp";
import { css } from "emotion";
import logoNum10 from "../assets/num10-logo.png";

const style = css`
  text-align: center;

  img[alt="Logo"] {
    width: 250px;
    margin-top: 2.5em;
  }

  button {
    margin-top: 30px;

    i {
      margin-right: 10px;
    }
  }
`;

const login = actions => {
  localStorage.setItem("access_token", "abc");
};

const Login = props => {
  const actions = props.actions;

  return (
    <div class={style}>
      <div class="logo">
        <img src={logoNum10} alt="Logo" />
      </div>
      <div class="sign-in">
        <button onclick={() => login(actions)}>
          <i class="fab fa-google" />Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
