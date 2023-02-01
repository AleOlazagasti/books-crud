import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*,*::before,*::after{
  margin:0;
  padding: 0;
}
html{
  height: 100%;
}
body{
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  overflow-x: hidden;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #956016;
}
h1,h2,h3,h4,h5,h6{
  margin:0;
  padding: 0;
}
a{
  color:inherit;
  text-decoration:none;
}
ul{
  list-style: none;
}
`
export default GlobalStyles