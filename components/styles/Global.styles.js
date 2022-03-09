import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  //Colors
  --primary: 	hsl(46, 100%, 60%);
  --dark-bg: hsl(0,0%,20%);
  --white: hsl(0, 0% , 100%);
  --gradient-dark-blue: hsl(198, 100%, 24%);
  --gradient-light-blue: hsl(186, 100%, 29%);
  --secondry-gradient: linear-gradient(to right bottom, #00567c, #008494);

  //Font-size
  --fs-xxxl: 4.0rem ;
  --fs-xxl: 3.0rem ;
  --fs-xl: 2.0rem ;
  --fs-l: 1.8rem ;
  --fs-m: 1.6rem ;
  --fs-s: 1.4rem ;
  --fs-xs: 1.2rem ;
  --fs-xxs: 1.0rem ;

  //sizes
  --layout-width: 1320px;
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
  justify-content: space-between;
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
