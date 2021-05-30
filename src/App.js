import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Aboutus" component={Aboutus} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
