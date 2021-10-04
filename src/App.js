import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Details from "./components/Details/Details";
import Error from "./components/Error/Error";
import Courses from "./components/Courses/Courses";
import About from "./components/About/About";



function App() {
 
  return (
    <div className="App">
      
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/details">
              <Details></Details>
            </Route>
            <Route path="/courses">
              <Courses></Courses>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
        </Router>
      
    </div>
  );
}

export default App;
