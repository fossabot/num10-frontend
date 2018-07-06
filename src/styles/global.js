import { injectGlobal } from "emotion";

const styles = injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Nunito:400,600,700,800,900');

  :root {
    --main-color: rgb(244, 156, 24);
    --border-radius: 4px;
    --box-shadow: 3px 3px 3px #d8d8d8;
    --button-padding: 15px;
    --button-border: 1px solid var(--main-color);
    --button-fontsize: 15px;
    --button-fontweight: bold;
    --button-color: white;
    --button-background: white;
    --button-background-hover: rgb(188, 120, 16);
    --button-background-active: rgb(188, 120, 16);
    --cursor: pointer
  }
  
  * {
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
  }

  button {
    padding: var(--button-padding);
    box-shadow: var(--box-shadow);
    border: var(--button-border);
    border-radius: var(--border-radius);
    background: var(--main-color);
    color: var(--button-color);
    font-size: var(--button-fontsize);
    font-weight: var(--button-fontweight);
  }

  button:hover {
    cursor: var(--cursor);
    background: var(--button-background-hover);
    color: var(--button-color);

    @media screen and (max-width: 600px) {
      background: var(--main-color);
    }
  }

  button:active {
    background: var(--button-background-active);
    color: var(--button-color)
  }
`;

export default styles;
