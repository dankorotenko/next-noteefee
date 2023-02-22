import React, { useState } from "react";
import Wallet from "./icons/Wallet";
import termino from "../../public/termino.jpg";
import coinbase from "../../public/coinbase.png";
export default function ConnectWallet() {
  const [open, setOpen] = useState(false);

  const wallets = [
    {
      extLink: "Termino Wallet",
      name: "Termino",
      img: termino.src,
    },
    {
      extLink: "Coinbase",
      name: "Coinbase",
      img: coinbase.src,
    },
  ];
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

  function getAllExtensions(callback) {
    chrome.management.getAll(function (extensions) {
      var extensionList = [];
      for (var i = 0; i < extensions.length; i++) {
        if (extensions[i].type === "extension") {
          extensionList.push({
            id: extensions[i].id,
            name: extensions[i].name,
            version: extensions[i].version,
          });
        }
      }
      callback(extensionList);
    });
  }
  getAllExtensions(function(extensions) {
    console.log(extensions);
  });
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
