import React, { useState } from "react";
import { GitHubProvider, useGitHub } from "../../context/GithubContext";

const UsernameChanger = () => {
  const { username, setUsername } = useGitHub();
  const [newUsername, setNewUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(newUsername);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
          placeholder="Nouveau nom d'utilisateur"
        />
        <button type="submit">Changer le nom d'utilisateur</button>
      </form>
      <p>Nom d'utilisateur actuel : {username}</p>
    </div>
  );
};

export default UsernameChanger;
