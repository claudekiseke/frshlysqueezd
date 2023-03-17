import Link from 'next/link';
import styles from './communityStats.module.css';

const CommunityStats = ({ communityStats }) => {
    const stats = communityStats.fields.communityStats;
    const stat = stats.map((item, index) => {
        const total = item.fields.communityStat;
        const title = item.fields.communityStatTitle;
        const ctaLink = item.fields.ctaLink;
        const ctaText = item.fields.ctaText;

        return (
                <div className={styles.communityStats__communityStat} key={index}>
                    <h4 className={styles.communityStats__total}>{total}</h4>
                    <p className={styles.communityStats__title}>{title}</p>
                    <Link href={ctaLink} className={styles.communityStats__ctaLink}>{ctaText}</Link>
                </div>
        )
    });

    return (
        <div className="container">
            <div className={styles.communityStats}>
                {stat}
            </div>
        </div>
    )
}

export default CommunityStats;