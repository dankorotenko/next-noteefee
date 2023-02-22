import React, { useEffect, useState } from "react";

import Link from 'next/link'
import { useRouter } from "next/router";
import ConnectWallet from "../ConnectWallet";
import logo from '../../../public/logo.svg'
import user from '../../../public/icons/user.svg'

export default function Header() {
  const [auth, setAuth] = useState("");
  const [openedMobileMenu, setOpenedMobileMenu] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setAuth(
      router.pathname.split("/")[router.pathname.split("/").length - 1] ===
        "login" ||
        router.pathname.split("/")[
          router.pathname.split("/").length - 1
        ] === "signup"
        ? "log"
        : ""
    );
  }, [router]);
  return (
    <header className={`${auth}`}>
      <nav className="container">
        <div className="logo">
          <Link href="/notifications">
            <img src={logo.src} alt="noteefee" />
          </Link>
        </div>
        <div className="right">
          <ConnectWallet />
          <div className="dropdown">
            <button className="dropdown-button">
              <img src={user.src} alt="E" />
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
