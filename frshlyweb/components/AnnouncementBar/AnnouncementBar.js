import Link from 'next/link';
import styles from './announcementbar.module.css';

const AnnouncementBar = () => {

    return (
        <div className={styles.announcement}>
                <span className={styles.title}><strong>Latest:</strong> We just launched our Resources section. </span>
                <Link href="/resources" className={styles.link}>Check it out! 🎊</Link>
        </div>
    );
}

export default AnnouncementBar;