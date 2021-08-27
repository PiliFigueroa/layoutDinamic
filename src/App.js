import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Blog, Contacto, Error404 } from './screens'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Contacto" component={Contacto} />
          <Route path="/Blog" component={Blog} />
          <Route path="*" component={Error404} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
