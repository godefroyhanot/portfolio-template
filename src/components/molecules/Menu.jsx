import React from "react";
import { Button, Container } from "../atoms";

const Menu = ({ configs, changePage }) => {
  return (
    <Container.MenuBar>
      {configs.map((config, i) => {

        return <Button.Menu onClick={() => changePage(config.slug)} key={i}>{config.name}</Button.Menu>;
      })}
    </Container.MenuBar>
  );
};

export default Menu;