import { injectGlobal } from "emotion";

const styles = injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Nunito:400,600,700,800,900');

  :root {
    --main-color: rgb(244,156,24);
  }
  
  * {
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
    margin: 0;
  }
`;

export default styles
