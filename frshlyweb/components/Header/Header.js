import AnnouncementBar from '../AnnouncementBar/AnnouncementBar';
import Navigation from './Navigation/Navigation';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.css'

const Header = ({ logo, navigation }) => {

  const pageName = useRouter().pathname.slice(1);
  const logoUrl = "https:" + logo.fields.file.url;
  const navLinks = navigation.items;

  return (
    <>
      {/* <AnnouncementBar /> */}
      <header className={styles.header}>
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
            <Navigation navLinks={navLinks} />
        </nav>
      </header>
    </>
  );

}

export default Header;