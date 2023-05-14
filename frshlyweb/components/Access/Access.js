import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useState } from 'react';
import { auth, onAuthStateChanged } from "../../firebase/clientApp";
import styles from './access.module.css';

export default function Access({ navigation }) {
    const [access, setAccess] = useState(false);

    onAuthStateChanged(auth, async (user) => {
        if (!user) {
            setAccess(false);
        } else {
            setAccess(true);
        }
    });

    if (!access) {
        return (
            <div className={styles.noAccess}>
                <div className="container">
                    <div className={styles.noAccessContent}>
                        <h3>Register or log in to access exclusive content (it’s free!)</h3>
                        <p>We’re open collective of designers of UXUI designers, developers and engineers; interior designers and architects.</p>
                        <div className=""></div>
                    </div>
                </div>
            </div>
        );
    }
}