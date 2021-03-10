import * as React from "react";
import "./../assets/scss/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Starter from "./Starter";
import Board from "./Board";
import Final from "./Final";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App: React.FC = (): JSX.Element => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Starter} />
          <Route path="/board" component={Board} />
          <Route path="/final" component={Final} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
