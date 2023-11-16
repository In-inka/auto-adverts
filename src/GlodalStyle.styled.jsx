import 'modern-normalize';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
&.hidden {
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
}
&.overflow-hidden{
    overflow:hidden;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


*::-webkit-scrollbar {
  width: 8px;
}


/* Track */
*::-webkit-scrollbar-track {
  
  background-color: rgba(18, 20, 23, 0.5);
  border-radius: 10px;
}

/* Handle */
*::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
}

/* Handle on hover */
*::-webkit-scrollbar-thumb:hover {
  background-color:rgba(18, 20, 23, 0.5); 
}

body {
  font-weight: 400;
  font-style: normal;
  width: 100%;
  height: 100vh;
  margin: 0;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
a {
  text-decoration: none;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
button {
  cursor: pointer;
}
html {
  scroll-behavior: smooth;
}

`;

export const ContainerStyled = styled.div`
  padding: 115px 150px;
  margin-left: auto;
  margin-right: auto;

  font-family: 'Manrope';
`;
