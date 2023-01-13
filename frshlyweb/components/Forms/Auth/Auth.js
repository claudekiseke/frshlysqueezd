import React, { useState, useEffect } from "react";
import Link from 'next/link';
import Login from "./Login";
import Register from "./Register";
import styles from './auth.module.css';
import { useRouter } from 'next/router';

export default function Auth() {

    const url = useRouter();
    const page = url.pathname.substr(9);
    const [isForm, setForm] = useState('login');

    useEffect(() => {
        setForm(page)
    });

    return (
        <div className="container">
            <div className={styles.auth}>
                <>
                    <div className={`${styles.header} ${url.pathname === `/account/login` ? styles.login : styles.register} `}>
                        <Link href="/account/login" className={`${(isForm == 'login') ? styles.active : ''}`}>Log In</Link>
                        <Link href="/account/register" className={`${(isForm == 'register') ? styles.active : ''}`}>Register</Link>
                    </div>
                    {url.pathname === `/account/login` ? <Login /> : <Register />}
                </>
            </div>
        </div>
    );
}