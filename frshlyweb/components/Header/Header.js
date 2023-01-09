import logo from './Logo.png';
import AnnouncementBar from '../AnnouncementBar/AnnouncementBar';
import myImageLoader from '../../public/loader';
import Navigation from './Navigation/Navigation';
import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.css'

const Header = () => {

  const navLeft = {
    0: {
      title: 'Mission',
      href: '/about'
    },
    1: {
      title: 'Magazine',
      href: '/magazine'
    },
    2: {
      title: 'Resources',
      href: '/resources'
    },
    // 4: {
    //   title: 'Events',
    //   className: 'coming-soon',
    //   href: '/events'
    // },
    3: {
      title: 'Community',
      className: 'coming-soon',
      href: '/'
    },
    5: {
      title: 'Support',
      href: '/support'
    }
  }

  const navRight = {
    0: {
      title: 'My Account',
      className: 'logged-in',
      href: '/account/my-account'
    },
    1: {
      title: 'Log In/Register',
      className: 'logged-out',
      href: '/account/login'
    },
    2: {
      title: 'Log Out',
      className: 'logged-in logoutbtn',
      href: '/account/login'
    }
  }

  return (
    <div>
    <AnnouncementBar />
    <header className={styles.header}>
      {/* <AnnouncementBar /> */}
      <div className="container">
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <Image 
              src={logo} 
              alt="Frshly Squeezd" 
              layout="responsive" 
              loader={myImageLoader}
              />
            </a>
          </Link>
        </div>
        <div className={styles.nav__left}>
          <Navigation Nav={navLeft} />
        </div>
        <div className={styles.nav__right}>
          <Navigation Nav={navRight} />
        </div>
      </div>
    </header>
    </div>
  );

}

export default Header;