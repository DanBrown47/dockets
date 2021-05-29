import { BrowserRouter as Switch, Route, Redirect }
  from "react-router-dom";

//Pages
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";

function App() {
  return (
    <>
      <main>
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Aboutus" component={Aboutus} />
          <Redirect to="/" />
        </Switch>
      </main>
    </>
  );
}

export default App;
