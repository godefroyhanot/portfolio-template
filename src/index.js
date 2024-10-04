import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { GitHubProvider } from "./context/GithubContext";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <GitHubProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </GitHubProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
