import { useState } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { BgColor } from "./components/atoms/Containers";
import { Home, Projets, Contact, Github } from "./components/pages";
import Menu from "./components/molecules/Menu";
import theme from "./components/Settings/Style/theme";

const App = () => {
  const [slug, setSlug] = useState("home");

  let tableauMenu = [
    { slug: "home", title: "Accueil", component: <Home /> },
    { slug: "projets", title: "Projets", component: <Projets /> },
    { slug: "contact", title: "Contact", component: <Contact /> },
    { slug: "github", title: "Github", component: <Github /> },
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
      case "github":
        return <Github />;
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
      </BgColor>
    </ThemeProvider>
  );
};

export default App;
