import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  --GlPrimary: 	hsl(46, 100%, 60%);
  --GrayHS: 0, 0%;
  --fs-xxxl: rem ;
  --fs-xxl: rem ;
  --fs-xl: rem ;
  --fs-l: rem ;
  --fs-m: rem ;
  --fs-s: rem ;
  --fs-xs: rem ;
  --fs-xxs: rem ;
}

*, *::after, *::before {
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
}

html{
  font-size: 62.5%;
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
