import React, { useState, useEffect } from "react";
import { CardRepoGitHub, BgColor } from "../atoms/Containers/";
import { Heading, Hyperlien, Paragraph } from "../atoms/Typo";
import { GitHubProvider, useGitHub } from "../../context/GithubContext";

const ListRepoGitHub = () => {
  const [projects, setProjects] = useState([]);
  const { username } = useGitHub();

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Erreur:", error));
  }, [username]);

  return (
    <div>
      <Heading level={1}>Mes Projets GitHub</Heading>
      <BgColor id="github-projects">
        {projects.map((repo) => (
          <CardRepoGitHub
            key={repo.id}
            name={repo.name}
            description={repo.description}
            url={repo.html_url}
          />
        ))}
      </BgColor>
    </div>
  );
};

export default ListRepoGitHub;
