import { createGlobalStyle } from "styled-components"

const StyledGlobalStyle = createGlobalStyle`
    * {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}

html {
  font-family: "Montserrat", sans-serif;
  font-size: 62.5%;
}
a {
  text-decoration: none;
  color: inherit;
}
li {
  list-style: none;
}
main{
  max-width:100%;
  margin-left:10rem;
  margin-right:10rem;
  color: #ff6060;
}
@media screen and (max-width: 425px) {
  main{
    margin-left:2rem;
    margin-right:2rem;
  }
}

`

export function GlobalStyle() {
  return <StyledGlobalStyle />
}
