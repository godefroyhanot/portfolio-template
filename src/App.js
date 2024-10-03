import './App.css';
import { Home, Projets, Contact } from './components/pages';
import React, { useState } from "react";
import { Containers, Typo } from "./components/atoms";

function App() {

    const [slug, setSlug] = useState("home");
    let tableauMenu = [
      {
        slug: "home",
        title: "Accueil",
        component: <Home />,
      },
      {
        slug: "projets",
        title: "Projets",
        component: <Projets />,
      },
      {
        slug: "contact",
        title: "Contact",
        component: <Contact />,
      },
    ];

    // Fonction pour afficher la page en fonction du slug
    const displayPage = () => {
      const currentPage = tableauMenu.find(page => page.slug === slug);
      return currentPage ? currentPage.component : <Home />;
    };

    return (
      <div className="App">
        {/* Barre de menu */}
        <nav>
          <ul>
            {tableauMenu.map((item) => (
              <li key={item.slug}>
                <button onClick={() => setSlug(item.slug)}>
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Affichage du contenu de la page */}
        {displayPage()}
      </div>
    );
}

export default App;
