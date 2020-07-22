import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import reducer from "./store/reducer";
import { Provider } from "react-redux";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(reducer, composeWithDevTools());
ReactDOM.render(
  <ThemeProvider>
    <Provider store={store}>
      <CSSReset />
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
