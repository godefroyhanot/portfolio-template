import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { GitHubProvider } from "./context/GithubContext";

ReactDOM.render(
  <React.StrictMode>
    <GitHubProvider>
      <App />
    </GitHubProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
