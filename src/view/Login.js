// src/view/Login.jsx
import React from "react";

export default function Login() {
  return (
    <main className="page page--login">
      <header className="page__header">
        <h1>Login</h1>
        <p>Access your account to manage reservations & orders.</p>
      </header>

      <section className="loginWrap">
        <div className="loginCard" role="form" aria-label="Login form">
          <form onSubmit={(e)=>e.preventDefault()}>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" required />
            <label htmlFor="password">Password</label>
            <input id="password" type="password" required />
            <button type="submit" className="btn btn--primary btn--block">Sign in</button>
          </form>
        </div>
      </section>
    </main>
  );
}
