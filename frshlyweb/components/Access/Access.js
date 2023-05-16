import Link from 'next/link';
import styles from './access.module.css';

export default function Access({ access }) {

    if (!access) {
        return (
            <div className={styles.noAccess}>
                <div className="container">
                    <div className={styles.noAccessContent}>
                        <h3>Register or log in to access exclusive content (it’s free!)</h3>
                        <p>We’re open collective of designers of UXUI designers, developers and engineers; interior designers and architects.</p>
                        <div className={styles.noAccessContent__cta}>
                            <Link
                                href="/account/register"
                                className="btn__primary btn__pill btn">
                                Join today
                            </Link>
                            <Link
                                href="/account/login"
                                className="btn__secondary btn__pill btn">
                                Log in
                            </Link>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}