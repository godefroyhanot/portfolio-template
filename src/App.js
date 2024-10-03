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

    // Déplace cette fonction à l'intérieur du composant App
    const displayPage = () => {
      switch (slug) {
        case "home":
          return <Home />;
        case "projets":
          return <Projets />;
        case "contact":
          return <Contact />;
        default:
          return <Home />;
      }
    };

    return (
      <div className="App">
        {/* Appelle displayPage pour rendre la page */}
        {displayPage()}
      </div>
    );
}

export default App;
