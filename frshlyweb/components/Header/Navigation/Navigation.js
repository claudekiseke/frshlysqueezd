import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { auth, signOut, onAuthStateChanged } from "../../../firebase/clientApp";
import styles from './navigation.module.css';

const Navigation = ({ navLinks }) => {

    const pageName = useRouter().pathname.slice(1);
    const [isUser, setUser] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            (user) ? setUser(true) : setUser(false)
        });
    });

    const handleClick = (e) => {
        if (e.currentTarget.classList.contains('logoutbtn')) {
            e.preventDefault();
            signOut(auth).then(() => {
            }).catch((err) => {
                // An error happened.
            });;
        }
    };

    const navLink = navLinks.map((item, index) => {

        const mainMenu = item.fields.mainMenu;

        if (mainMenu) {
            const nav = item.fields.navigationItems;
            const navItems = nav.map((item, index) => {
                if (item.fields) {
                    const fields = item.fields;
                    const linkTitle = fields.linkTitle;
                    const linkUrl = fields.linkUrl;
                    const className = fields.className;

                    const loginLinks = () => {
                        if (className) {
                            if (className.includes('logged-in')) {
                                return ('btn ' + className + ' ' + styles.loginLinks + (isUser ? ' ' + styles.show : ''));
                            } else if (className.includes('logged-out')) {
                                return ('btn ' + className + ' ' + styles.loginLinks + (!isUser ? ' ' + styles.show : ''));
                            } else
                                return (className);
                        }
                    }

                    return (
                        <li
                            key={index}
                            className={`${styles.nav__item}${className ? ' ' + loginLinks() : ''}${!pageName ? ' ' + styles.nav__homeItem : ''}`}
                            onClick={handleClick}>
                            <Link
                                href={linkUrl}
                                className={`${styles.nav__link}`}>
                                {linkTitle}
                            </Link>
                        </li>
                    );
                }
            });

            return (
                    <ul className={styles.nav__list} key={index}>{navItems}</ul>
            );
        }
    }
    );

    return (
        <>
            {navLink}
        </>
    );
}

export default Navigation;