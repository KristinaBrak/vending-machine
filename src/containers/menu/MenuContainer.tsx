import React, { useEffect, useState } from "react";
import MenuButton from "./MenuButton";
import MenuWindow from "./MenuWindow";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BasketContainer from "../basket/BasketContainer";
import VendingMachineContainer from "../vending-machine/VendingMachineContainer";
import WalletContainer from "../wallet/WalletContainer";
import CoinSlotContainer from "../coin-slot/CoinSlotContainer";
import MenuLink from "./MenuLink";
import Subtitle from "../../components/main/Subtitle";
import Title from "../../components/main/Title";

const MenuContainer = () => {
  const [openFull, setOpenFull] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    timeout = setTimeout(() => {}, 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, [openFull]);

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
          <Title>Vending Machine</Title>
          <MenuLink onClick={() => setOpenFull(false)}>
            <Link to="/">Machine</Link>
          </MenuLink>
          <MenuLink onClick={() => setOpenFull(false)}>
            <Link to="/wallet">Wallet</Link>
          </MenuLink>
          <MenuLink onClick={() => setOpenFull(false)}>
            <Link to="/basket">Basket</Link>
          </MenuLink>
          <MenuLink onClick={() => setOpenFull(false)}>
            <Link to="/coin-slot">Coin Slot</Link>
          </MenuLink>
        </MenuWindow>
      ) : null}
    </Router>
  );
};

export default MenuContainer;
