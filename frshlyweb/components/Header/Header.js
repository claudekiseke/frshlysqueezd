import { useState } from "react";
import Navigation from './Navigation/Navigation';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.css'

const Header = ({ logo, navigation }) => {
  const [isActive, setIsActive] = useState(false);
  const pageName = useRouter().pathname.slice(1);
  const logoUrl = "https:" + logo.fields.file.url;
  const navLinks = navigation.items;

  function toggleMenu() {
    setIsActive(!isActive);
  }

  return (
    <>
      <header className={`${styles.header} ${!pageName ? styles.header__homeHeader : styles.header__pageHeader}`}>
        <nav className={`${styles.nav} container`}>
          <div className={`${styles.logo}${!pageName ? ' ' + styles.nav__homeLogo : ''}`}>
            <Link href="/">
              <Image
                src={logoUrl}
                alt="Frshly Squeezd"
                width="217"
                height="24"
                priority
              />
            </Link>
          </div>
          <div className={`mobile-only ${styles.burgerMenu}${!pageName ? ' ' + styles.homeBurgerMenu : ''}`} onClick={toggleMenu}>
            <svg viewBox="0 0 40 35" width="25" height="25">
              <rect width="40" height="5" rx="3"></rect>
              <rect y="15" width="40" height="5" rx="3"></rect>
              <rect y="30" width="40" height="5" rx="3"></rect>
            </svg>
          </div>
          <div className={`mobile-only ${styles.mobileMenu}${isActive ? " " + styles.active : ""}`}>
            <span className={styles.menuClose} aria-label="Close Menu" onClick={toggleMenu}>×</span>
            <div className={styles.menuItems}>
              <Navigation navLinks={navLinks} />
            </div>
          </div>
          <Navigation navLinks={navLinks} />
        </nav>
      </header>
    </>
  );

}

export default Header;