import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Barre de navigation */}
      <nav style={styles.navbar}>
        <h1>Mon Portfolio</h1>
        <ul style={styles.navLinks}>
          <li><a href="#about">À propos</a></li>
          <li><a href="#projects">Projets</a></li>
          <li><a href="#skills">Compétences</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Section d'accueil */}
      <section style={styles.heroSection}>
        <h2>Bienvenue dans mon Portfolio</h2>
        <p>Je suis un développeur web passionné, spécialisé en React et en développement full-stack.</p>
      </section>

      {/* Section Projets */}
      <section id="projects" style={styles.section}>
        <h2>Projets</h2>
        <div style={styles.projectsContainer}>
          <div style={styles.projectCard}>
            <h3>Projet 1</h3>
            <p>Description du projet 1.</p>
          </div>
          <div style={styles.projectCard}>
            <h3>Projet 2</h3>
            <p>Description du projet 2.</p>
          </div>
        </div>
      </section>

      {/* Section Compétences */}
      <section id="skills" style={styles.section}>
        <h2>Compétences</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      </section>

      {/* Section Contact */}
      <section id="contact" style={styles.section}>
        <h2>Contact</h2>
        <p>Vous pouvez me contacter à l'adresse suivante : <a href="mailto:email@example.com">email@example.com</a></p>
      </section>

      {/* Pied de page */}
      <footer style={styles.footer}>
        <p>© 2024 Mon Portfolio. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

// Styles en ligne pour simplifier
const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: '#333',
    color: '#fff',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '15px',
  },
  heroSection: {
    padding: '100px 20px',
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
  },
  section: {
    padding: '50px 20px',
  },
  projectsContainer: {
    display: 'flex',
    gap: '20px',
  },
  projectCard: {
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    width: '45%',
  },
  footer: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#333',
    color: '#fff',
  },
};

export default Home;
