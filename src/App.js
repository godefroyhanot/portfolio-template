import { useState } from "react";
import "./App.css";
import Button from "./components/atoms/Buttons/Button";
import {
  CardRepoGitHub,
  CouleurBG,
  Avatar,
} from "./components/atoms/Containers";
import { Heading, Paragraph, Hyperlien } from "./components/atoms/Typo";
import ListRepoGitHub from "./components/molecules/ListRepoGitHub";
import UsernameChanger from "./components/Settings/UsernameChanger";
import { GitHubProvider, useGitHub } from "./context/GithubContext";
import { Home, Projets, Contact } from "./components/pages";

const App = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };
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
    <CouleurBG color="#1e2124">
      <Heading color="#FFF">Mon Portfolio</Heading>
      <Paragraph>Voici un exemple de paragraphe dans mon portfolio.</Paragraph>

      <Hyperlien href="#" color="#7289da">
        Pls Help Me
      </Hyperlien>
      <div className="App">{displayPage()}</div>
      <Button
        label="Voir mes projets"
        onClick={handleClick}
        className="primary"
      />
      <UsernameChanger />
      <ListRepoGitHub />
    </CouleurBG>
  );
};

export default App;
