import React from "react";
import MenuBar from "../atoms/Containers/MenuBar";
import ButtonMenu from "../atoms/Buttons/Menu";

const Menu = ({ configs, changePage }) => {
  return (
    <MenuBar>
      {configs.map((config, i) => (
        <ButtonMenu onClick={() => changePage(config.slug)} key={i}>
          {config.title}
        </ButtonMenu>
      ))}
    </MenuBar>
  );
};

export default Menu;
