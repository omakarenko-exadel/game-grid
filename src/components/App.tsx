import * as React from "react";
import { Lines } from "react-preloaders";
import "./../assets/scss/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Board from "./Board";

const App: React.FC = (): JSX.Element => {
  return (
    <React.Fragment>
      <div className="testClass">
        <Board />
      </div>
      <Lines background="#7c9eb2" animation="fade" time={3000} />
    </React.Fragment>
  );
};

export default App;
