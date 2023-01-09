import React, { useRef, useEffect } from "react";
import styles from './sectionheading.module.css';

const SectionHeading = ({ sectionHeading, filter }) => {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            if ((filter == 'all') || (ref.current.classList.contains(filter))) {
                ref.current.classList.remove('show-grid');
                ref.current.className += " " + 'show-grid';
            } else {
                ref.current.classList.remove('show-grid');
            }
        }
    });

    const h2 = () => {
        if (sectionHeading.h2Heading) {
            return(
                <h2 className={styles.titleH2}>{sectionHeading.h2Heading}</h2>
            );
        }
    }
    const h3 = () => {
        if (sectionHeading.h3Heading) {
            return(
                <h3 className={styles.titleH3}>{sectionHeading.h3Heading}</h3>
            );
        }
    }

    const p = () => {
        if (sectionHeading.description) {
            return(
                <p className={styles.desc}>{sectionHeading.description}</p>
            );
        }
    }

    const a = () => {
        if (sectionHeading.ctaLink && sectionHeading.ctaText) {
            return(
                <a href={sectionHeading.ctaLink} className={`${styles.ctaLink} btn btn__secondary btn__pill`}>{sectionHeading.ctaText}</a>
            );
        }
    }
    return (
        <div className={`container ${styles.sectionHeading} ${sectionHeading.className}`} ref={ref}>
                {h2()}
                {h3()}
                {p()}
                {a()}
            </div>
    )

}

export default SectionHeading;