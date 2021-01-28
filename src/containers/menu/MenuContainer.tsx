import React, { useState } from "react";
import MenuButton from "./MenuButton";
import MenuWindow from "./MenuWindow";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BasketContainer from "../basket/BasketContainer";
import VendingMachineContainer from "../vending-machine/VendingMachineContainer";
import WalletContainer from "../wallet/WalletContainer";
import CoinSlotContainer from "../coin-slot/CoinSlotContainer";

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
        <Route path="/wallet">
          <WalletContainer />
        </Route>
        <Route exact path="/">
          <VendingMachineContainer />
        </Route>
        <Route exact path="/coin-slot">
          <CoinSlotContainer />
        </Route>
      </Switch>
      {openFull ? (
        <MenuWindow>
          <h2>Vending Machine</h2>
          <button onClick={() => setOpenFull(false)}>
            <Link to="/">Machine</Link>
          </button>
          <button onClick={() => setOpenFull(false)}>
            <Link to="/wallet">Wallet</Link>
          </button>
          <button onClick={() => setOpenFull(false)}>
            <Link to="/basket">Basket</Link>
          </button>
          <button onClick={() => setOpenFull(false)}>
            <Link to="/coin-slot">Coin Slot</Link>
          </button>
        </MenuWindow>
      ) : null}
    </Router>
  );
};

export default MenuContainer;
