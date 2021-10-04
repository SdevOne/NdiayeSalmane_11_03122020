import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Component } from "react"
import Home from "../pages/Home"
import Housing from "../pages/Housing"
import About from "../pages/About"
import Error from "../pages/Error"
import "../styles/Base.css"

class App extends Component {
  render() {
    return (
      <React.StrictMode>
        <Router>
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
