import React, { useState } from "react";
import Link from 'next/link';
import { logIn } from "../../../firebase/clientApp";
import styles from './auth.module.css';

function Login() {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginSubmit = (e) => {
    e.preventDefault();

    const loginForm = document.querySelector('#login__form');
    const formAction = e.target.name;

    if (formAction === 'logInWithEmail') {
      logIn(email, password, setError);
      loginForm.reset();
    }
  }

  return (
    <div className="login">
      {error && <p>{error}</p>}
      <form
        id="login__form"
      >
        <input
          id="login__email"
          type="text"
          className={styles.login__textBox}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="username"
          placeholder="E-mail Address"
        />
        <input
          id="login__password"
          type="password"
          className={styles.login__textBox}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          placeholder="Password"
        />
        <input
          type="submit"
          className="btn btn__primary"
          name="logInWithEmail"
          value="Log In"
          onClick={loginSubmit}
        />
        <div>
          <Link href="/reset">Forgot Password</Link>
        </div>
      </form>
    </div>
  );
}
export default Login;