import React, { useState } from "react";
import MenuButton from "./MenuButton";
import MenuWindow from "./MenuWindow";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BasketContainer from "../basket/BasketContainer";
import VendingMachineContainer from "../vending-machine/VendingMachineContainer";

const MenuContainer = () => {
  const [openFull, setOpenFull] = useState(false);

  return (
    <Router>
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
      <Switch>
        <Route path="/basket">
          <BasketContainer />
        </Route>
        <Route exact path="/">
          <VendingMachineContainer />
        </Route>
      </Switch>
      {openFull ? (
        <MenuWindow>
          <h2>Vending Machine</h2>
          <nav>
            <button onClick={() => setOpenFull(false)}>
              <Link to="/">Machine</Link>
            </button>
            <button onClick={() => setOpenFull(false)}>
              Wallet
              {/* <Link to="/">Wallet</Link> */}
            </button>
            <button onClick={() => setOpenFull(false)}>
              <Link to="/basket">Basket</Link>
            </button>
          </nav>
        </MenuWindow>
      ) : null}
    </Router>
  );
};

export default MenuContainer;
