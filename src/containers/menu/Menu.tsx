import React, { useState } from "react";
import MenuButton from "./MenuButton";
import MenuWindow from "./MenuWindow";

const Menu = () => {
  const [openFull, setOpenFull] = useState(false);

  return (
    <>
      <MenuButton
        onClick={() => setOpenFull(!openFull)}
        id={openFull ? "open" : "close"}
      >
        {!openFull ? (
          <i className="fas fa-bars fa-lg" />
        ) : (
          <i className="fas fa-times fa-lg" />
        )}
      </MenuButton>
      {openFull ? (
        <MenuWindow>
          <p>Vending Machine</p>
          
        </MenuWindow>
      ) : null}
    </>
  );
};

export default Menu;
