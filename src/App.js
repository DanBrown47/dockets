import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";

function App() {
  return (
    <Router basename='/index.html'>
      <Switch>
        <Route path="/Home" component={Home} />
        <Route path="/Aboutus" component={Aboutus} />
      </Switch>
    </Router>
  );
}

export default App;
