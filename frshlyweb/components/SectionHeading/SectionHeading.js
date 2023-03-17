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
            return (
                <h2 className={styles.sectionHeading__h2}>{sectionHeading.h2Heading}</h2>
            );
        }
    }
    const h3 = () => {
        if (sectionHeading.h3Heading) {
            return (
                <h3 className={styles.sectionHeading__h3}>{sectionHeading.h3Heading}</h3>
            );
        }
    }

    const description = () => {
        if (sectionHeading.description) {
            return (
                <p className={styles.sectionHeading__description}>{sectionHeading.description}</p>
            );
        }
    }

    const cta = () => {
        if (sectionHeading.ctaLink && sectionHeading.ctaText) {
            return (
                <a href={sectionHeading.ctaLink} className={`${styles.sectionHeading__ctaLink} btn btn__secondary btn__pill`}>{sectionHeading.ctaText}</a>
            );
        }
    }
    return (
        <div className="container">
            <div className={`${styles.sectionHeading} ${sectionHeading.className}`} ref={ref}>
                <div>
                    {h2()}
                    {h3()}
                    {description()}
                </div>
                {cta()}
            </div>
        </div>
    )

}

export default SectionHeading;