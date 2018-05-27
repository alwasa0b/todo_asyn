import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import createSagaMiddleware from "redux-saga";
import saga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(saga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
