import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");


:root {
  
}

*, *::after, *::before {
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
}
html,
body {
  height: 100%;
}

/* scroll bar styles */
::-webkit-scrollbar {
  width: 10px;
}
/* Track */
::-webkit-scrollbar-track {
  background: #f0f0f0;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #cecece;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #a7a7a7;
}

#__next {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

body,
input {
  font-family: "Poppins", sans-serif;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  color: black;
}
`;

export default GlobalStyles;
