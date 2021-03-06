import "./App.css";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Resume from "./components/Resume";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <div>
                <About />
                <Skills />
                {/* <Projects /> */}
                {/* <Resume /> */}
              </div>
            );
          }}
        />
        <Route
          exact
          path="/projects"
          render={() => {
            return (
              <div>
                <Projects />
              </div>
            );
          }}
        />
        <Route
          exact
          path="/resume"
          render={() => {
            return (
              <div>
                <Resume />
              </div>
            );
          }}
        />
        <Route
          exact
          path="/about"
          render={() => {
            return (
              <div>
                <About />
              </div>
            );
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
