import styles from './featuredrole.module.css';

const FeaturedRole = (featuredRole) => {

    const roles = featuredRole.featuredRole.items;
    const row1 = roles.map((item, index) => {
        const title = item.fields.featuredRole;
        if (index <= 9) {
            return (
                <>
                    <div className={styles.featuredRole__title} key={index}>
                        <span className={styles.featuredRole__text}>{title}</span>
                    </div>
                </>
            );
        }
    });
    const row2 = roles.map((item, index) => {
        const title = item.fields.featuredRole;
        if (index > 9) {
            return (
                <>
                    <div className={styles.featuredRole__title} key={index}>
                        <span className={styles.featuredRole__text}>{title}</span>
                    </div>
                </>
            );
        }
    });

    return (
        <div className={styles.featuredRole}>
            <div className={styles.featuredRole__row}>{row1} {row1} {row1}</div>
            <div className={styles.featuredRole__row}>{row2} {row2} {row2}</div>
        </div>
    );
}

export default FeaturedRole;