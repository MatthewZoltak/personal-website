import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import WorkExperience from "./components/WorkExperience";
import Project from "./components/Project";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills"

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={WorkExperience} path='/work' />
        <Route component={Project} path='/project' />
        <Route component={Skills} path='/skills' />

      </Switch>
    </BrowserRouter>
  )
}

export default App;
