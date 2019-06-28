/**
 * @format
 */

import React from "react";
import { AppRegistry } from "react-native";
import App from "./App";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { name as appName } from "./app.json";
import reducers from "./src/store/reducers";
const store = createStore(reducers, applyMiddleware(thunk));
const appWithStore = (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => App);
