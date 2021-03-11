import * as React from "react";
import "./../assets/scss/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import StarterPage from "./StarterPage";
import Board from "./Board";
import ResultModal from "./ResultModal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App: React.FC = (): JSX.Element => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={StarterPage} />
          <Route path="/board" component={Board} />
          <Route path="/result" component={ResultModal} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
