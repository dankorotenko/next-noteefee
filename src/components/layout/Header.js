import React, { useEffect, useState } from "react";
import Link from 'next/link'
export default function Header() {
  const [openedMobileMenu, setOpenedMobileMenu] = useState(false);
  return (
    // <header className={`${auth}`}>
    <header className={`auth`}>
      <nav className="container">
        <div className="logo">
          <Link href="/notifications">
            <img src="logo.svg" alt="noteefee" />
          </Link>
        </div>
        <div className="right">
          <div className="wallet">
            {/* <Wallet /> */}
            <p className="wallet__id">Connect</p>
          </div>
          <div className="dropdown">
            <button className="dropdown-button">
              <img src="icons/user.svg" alt="E" />
              Account
            </button>
            <div className="dropdown-content">
              <Link href="/login">Log In</Link>
              <Link href="/signup">Sign Up</Link>
              <hr className="divider" />
              <Link href="/notifications">Notify</Link>
              <a href="#">Billing</a>
              <a href="#">Settings</a>
            </div>
          </div>

          <div className="dropdown-mobile">
            <button
              className={`dropdown-button ${openedMobileMenu ? "open" : ""}`}
              onClick={() => setOpenedMobileMenu((prev) => !prev)}
              id="nav-icon"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div
              className={`dropdown-content ${openedMobileMenu ? "opened" : ""}`}
            >
              <Link href="/login">Log In</Link>
              <Link href="/signup">Sign Up</Link>
              <hr className="divider" />
              <Link href="/notifications">Notify</Link>
              <a href="#">Billing</a>
              <a href="#">Settings</a>
            </div>
          </div>
        </div>
      </nav>
      <div className="line"></div>
    </header>
  );
}
