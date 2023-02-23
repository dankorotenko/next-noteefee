import React, { useState } from "react";
import Wallet from "./icons/Wallet";
import { wallets } from "../data/dummy";

export default function ConnectWallet({handleChildErrorProps}) {
  const [open, setOpen] = useState(false);

  
  const checkTermino = () => {
    if (!window.termino) {
      handleChildErrorProps({termino: false});
      setTimeout(() => {
        handleChildErrorProps({termino: true});
      }, 5000);
    } 
    setOpen(false);
  };

  return (
    <div className={`wallet ${open ? "opened" : ""}`}>
      <div className="wallet__main" onClick={() => setOpen(!open)}>
        <Wallet />
        <p className="wallet__id">Connect</p>
      </div>
      {open && (
        <ul className="wallet__list">
          {wallets.map((wallet) => (
            <li key={wallet.name} onClick={() => checkTermino()}>
              <img src={wallet.img} alt={wallet.name} />
              {wallet.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
