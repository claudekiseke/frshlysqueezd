import styles from './auth.module.css';
import Link from 'next/link';
import Login from "./Login";
import Register from "./Register";
import { useRouter } from 'next/router';

const Auth = () => {

    // const url = useRouter();

    return (
        <div className="container">
            {/* <div className={styles.auth}>
                <>
                    <div className={`${styles.header} ${url.pathname === `/account/login` ? styles.login : styles.register} `}>
                        <Link href="/account/login">Log In</Link>
                        <Link href="/account/register" className={`${styles.tablinks} ${styles.title}`}>Register</Link>
                    </div>
                    {url.pathname === `/account/login` ? <Login /> : <Register />}
                </>
            </div> */}
        </div>
    );
}

export default Auth;