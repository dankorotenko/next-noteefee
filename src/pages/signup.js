import React, { useState } from "react";
import Link from 'next/link'

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section className="sign">
      <div className="sign__wrapper">
        <img className="logo-img" src='logo.svg' alt="logo" width="370" />
        <div className="underline"></div>
        <div className="sign__inner">
          <h2 className="sign__title">Create an account</h2>
          <p className="sign__desc">
            Already have an account?
            <Link href="/login">Log in</Link>
          </p>
          <form className="sign__form">
            <div>
              <input type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div>
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
              />
              <img
                src="icons/eye.svg"
                alt="eye"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
            <button className="btn filled">Register</button>
          </form>
        </div>
      </div>
      <div className="sign__smartphone">
        <div className="sign__tip">
          <span>Don’t miss</span> a thing about events that happen on the
          blockchain!
        </div>
        <img src="smartphone.png" alt="smartphone" />
      </div>
    </section>
  );
}
