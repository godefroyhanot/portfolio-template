import { useState } from "react";
import { ThemeProvider } from "styled-components"; // Import du ThemeProvider de styled-components
import "./App.css";
import Button from "./components/atoms/Buttons/Button";
import { CardRepoGitHub, BgColor, Avatar } from "./components/atoms/Containers";
import { Heading, Paragraph, Hyperlien } from "./components/atoms/Typo";

import UsernameChanger from "./components/Settings/UsernameChanger";
import { Home, Projets, Contact } from "./components/pages";
import Menu from "./components/molecules/Menu";
import theme from "./components/Settings/Style/theme";

const App = () => {
  const [slug, setSlug] = useState("home");

  let tableauMenu = [
    { slug: "home", title: "Accueil", component: <Home /> },
    { slug: "projets", title: "Projets", component: <Projets /> },
    { slug: "contact", title: "Contact", component: <Contact /> },
  ];

  const changePage = (slug) => {
    setSlug(slug);
  };

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
    <ThemeProvider theme={theme}>
      <BgColor>
        <div className="App">
          <Menu changePage={changePage} configs={tableauMenu} />
          {displayPage()}
        </div>
        <Paragraph>
          Voici un exemple de paragraphe dans mon portfolio.
        </Paragraph>

        <Hyperlien href="#">Pls Help Me</Hyperlien>
        <Button
          label="Voir mes projets"
          onClick={() => alert("Button clicked!")}
          className="primary"
        />
      </BgColor>
    </ThemeProvider>
  );
};

export default App;
