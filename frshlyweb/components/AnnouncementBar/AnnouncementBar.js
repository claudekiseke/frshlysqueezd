// import Close from './close.js'
import logo from '../Header/Logo.png';
import Link from 'next/link';
import styles from './announcementbar.module.css';
import Image from 'next/image';

const AnnouncementBar = () => {

    return (
        <div className={styles.announcement}>
            <div className={styles.text}>
                <span className={styles.title}><strong>Clamp Digital</strong> presents Frshly London Launch Whatever</span>
                <Link href="/" className={styles.link}>Get your free tickets ￫</Link>
            </div>
        </div>
    );
}

export default AnnouncementBar;