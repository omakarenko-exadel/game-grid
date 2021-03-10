import * as React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "./components/redux/rootReducer";

const store = createStore(rootReducer);

const rootEl = document.getElementById("root");

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl,
);
