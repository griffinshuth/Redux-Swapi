import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';


const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
 
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
