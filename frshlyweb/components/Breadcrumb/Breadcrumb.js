import Link from "next/link";

export default function Breadcrumb({ parentLink, link, styles }) {

    if (parentLink) {
        return (
            <span className={styles.pagetitle}>
                <Link href={`/${parentLink.toLowerCase()}`} className={styles.pageParent}>{parentLink.toLowerCase()}</Link> / {link}</span>
        );
    } else {
        return (
            <span className={styles.pagetitle}>{link}</span>
        );
    }
}