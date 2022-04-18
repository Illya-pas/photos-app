import React from "react";
import ReactDOM from "react-dom/client";
import { compose, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./App/App";
import reportWebVitals from "./reportWebVitals";
import { rootReducer } from "./redux/reducers/rootReducer";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk)
    // (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
