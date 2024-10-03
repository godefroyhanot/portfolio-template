import React, { createContext, useState, useContext } from "react";

const GitHubContext = createContext();

export const GitHubProvider = ({ children }) => {
  const [username, setUsername] = useState("ClementCastex");

  return (
    <GitHubContext.Provider value={{ username, setUsername }}>
      {children}
    </GitHubContext.Provider>
  );
};

export const useGitHub = () => useContext(GitHubContext);
