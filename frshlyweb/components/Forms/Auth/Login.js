import React, { useState } from "react";
import Link from 'next/link';
import { useRouter } from "next/router";
import { logIn, signInWithGoogle } from "../../../firebase/clientApp";
import styles from './auth.module.css';

function Login() {
  const router = useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginSubmit = (e) => {
    e.preventDefault();
    
    const loginForm = document.querySelector('#login__form');
    const formAction = e.target.name;

   if (formAction === 'logInWithEmail') {
    logIn(email, password).then(cred => {
      router.push('/account/my-account')
    })
    loginForm.reset();
  }
   } 

  return (
        <div className="login">
      <form 
        id="login__form"
      >
        <input
          id="login__email"
          type="text"
          className={styles.login__textBox}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          id="login__password"
          type="password"
          className={styles.login__textBox}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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