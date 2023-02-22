import React, { useState } from "react";
import Wallet from "./icons/Wallet";


import { wallets } from '../data/dummy'

export default function ConnectWallet() {
  const [open, setOpen] = useState(false);

  //   const checkExtension = (extLink) => {
  //     if (typeof chrome !== 'undefined' && typeof chrome.extension !== 'undefined') {
  //       if (chrome.extension.getURL(extLink)) {
  //         console.log('Extension installed!');
  //       } else {
  //         console.log('Extension not installed.');
  //       }
  //     } else {
  //       console.log('Chrome extension API not available.');
  //     }
  //   };


  return (
    <div className={`wallet ${open ? "opened" : ""}`}>
      <div className="wallet__main" onClick={() => setOpen(!open)}>
        <Wallet />
        <p className="wallet__id">Connect</p>
      </div>
      {open && (
        <ul className="wallet__list">
          {wallets.map((wallet) => (
            <li key={wallet.name} onClick={() => checkExtension()}>
              <img src={wallet.img} alt={wallet.name} />
              {wallet.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
