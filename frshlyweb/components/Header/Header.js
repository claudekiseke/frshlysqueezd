import AnnouncementBar from '../AnnouncementBar/AnnouncementBar';
import Navigation from './Navigation/Navigation';
import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.css'

const Header = ({ logo, navigation }) => {
  const logoUrl = "https:" + logo.fields.file.url;
  const navLinks = navigation.items;

  return (
    <>
      <AnnouncementBar />
      <header className={styles.header}>
        <nav>
          <div className="container">
            <div className={`${styles.logo} ${styles.navItem}`}>
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
          </div>
        </nav>
      </header>
    </>
  );

}

export default Header;