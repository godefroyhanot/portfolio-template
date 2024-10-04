import './App.css';
import { Home, Projets, Contact } from './components/pages';
import React, { useState } from "react";
import { Containers, Typo } from "./components/atoms";
import Menu from "./components/molecules/Menu";


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

    // Fonction displayPage déplacée à l'intérieur du composant App
    const displayPage = () => {
      const foundPage = tableauMenu.find(menuItem => menuItem.slug === slug);
      return foundPage ? foundPage.component : <Home />;
    };

    return (
      <div className="App">
        {/* Appelle displayPage pour rendre la page */}
        {displayPage()}
      </div>
    );
}

export default App;
