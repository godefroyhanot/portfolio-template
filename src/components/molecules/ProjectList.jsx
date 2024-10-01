import React, { useState, useEffect } from 'react';
import ProjectCard from '../atoms/Containers/ProjectCard'; // Assurez-vous que le chemin correspond

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const username = 'LewisEMO'; // Remplace par ton pseudo GitHub

    fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Erreur:', error));
  }, []);

  return (
    <div>
      <h1>Mes Projets GitHub</h1>
      <div id="github-projects">
        {projects.map(repo => (
          <ProjectCard
            key={repo.id}
            name={repo.name}
            description={repo.description}
            url={repo.html_url}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
