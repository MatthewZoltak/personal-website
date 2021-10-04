import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Project from "./components/Project";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={WorkExperience} path='/work' />
        <Route component={Project} path='/project' />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
