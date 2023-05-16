import React, { useState } from "react";
import Link from 'next/link';
import { sendPasswordReset } from "../../../firebase/clientApp";
import styles from './auth.module.css';

export default function ForgotPassword() {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  const loginSubmit = (e) => {
    e.preventDefault();

    const forgotForm = document.querySelector('#forgot__form');
    const formAction = e.target.name;

    if (formAction === 'logInWithEmail') {
        sendPasswordReset(email, setError);
      forgotForm.reset();
    }
  }

  return (
    <div className={styles.auth}>
      {error ? <p>{error}</p> : <p>Enter your email below to reset your password. You'll receive an email with further steps if your account</p>}
      <form
        id="forgot__form"
        className={styles.loginForm}
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
          type="submit"
          className="btn btn__primary"
          name="logInWithEmail"
          value="Log In"
          onClick={loginSubmit}
        />
        <div>
          <Link className={styles.login__forgot} href="/account/forgot-password">Forgot Password</Link>
        </div>
      </form>
    </div>
  );
}
