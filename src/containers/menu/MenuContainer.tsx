import React, { useState } from "react";
import MenuButton from "./MenuButton";
import MenuWindow from "./MenuWindow";

const MenuContainer = () => {
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
          <h2>Vending Machine</h2>
          <button>Machine</button>
          <button>Wallet</button>
          <button>Basket</button>
        </MenuWindow>
      ) : null}
    </>
  );
};

export default MenuContainer;
