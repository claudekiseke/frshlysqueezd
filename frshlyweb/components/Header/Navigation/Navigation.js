import React, { useRef, useEffect } from "react";
import Link from 'next/link';
import { auth, signOut, onAuthStateChanged } from "../../../firebase/clientApp";
import styles from './navigation.module.css';

const Navigation = ({ Nav }) => {

    const ref = useRef();

    const handleClick = (e) => {
        if (e.currentTarget.classList.contains('logoutbtn')) {
            e.preventDefault();
            signOut(auth).then(() => {
            }).catch((err) => {
                // An error happened.
                console.log(err)
            });;
        }
    };

    const listItems = Object.values(Nav);
    const listItem = listItems.map((item, index) => {

        // useEffect(() => {
        //     onAuthStateChanged(auth, (user) => {
        //         if (user) {
        //             if ((item.className) && (item.className.includes('logged-out'))) {
        //                 item.display = 'none';
        //             } if ((item.className) && (item.className.includes('logged-in'))) {
        //                 item.display = 'block';
        //             }
        //         } else {
        //             if ((item.className) && (item.className.includes('logged-out'))) {
        //                 item.display = 'block';
        //             } if ((item.className) && (item.className.includes('logged-in'))) {
        //                 item.display = 'none';
        //             }
        //         }
        //     });
        // });

        return (
            <li
                className={`${styles.nav__item}${item.className ? ' ' + item.className : ''}`}
                key={index}
                ref={ref}
                style={{ display: item.display }}
                onClick={handleClick}>
                <Link href={item.href}>{item.title}</Link>
            </li>
        )
    });

    return (
        <nav>
            <ul className={styles.nav__list}>
                {listItem}
            </ul>
        </nav>
    );
}

export default Navigation;