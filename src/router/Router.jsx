import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Component } from "react"
import { GlobalStyle } from "../utils/GlobalStyle"
import Home from "../pages/Home"
import Housing from "../pages/Housing"
import About from "../pages/About"
import Error from "../pages/Error"

class App extends Component {
  render() {
    return (
      <React.StrictMode>
        <Router>
          <GlobalStyle />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route
              path="/Logement/:id"
              render={(props) => <Housing {...props} />}
            ></Route>
            <Route path="/About">
              <About />
            </Route>
            <Route>
              <Error />
            </Route>
          </Switch>
        </Router>
      </React.StrictMode>
    )
  }
}

export default App
