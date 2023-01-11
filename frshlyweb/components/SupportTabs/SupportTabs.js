import React, { useRef, useEffect } from "react";
import styles from './supporttabs.module.css';

const SupportTabs = ({ filter, supportTabs }) => {
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
    
    const tabs = supportTabs.fields.supportTabsList;
    const tab = tabs.map((item, index) => {

        return (
            <a href={item.fields.ctaLink} key={index} className={styles.supporttab}>
                <h3 className={styles.title}>{item.fields.supportTabTitle}</h3>
                <p>{item.fields.description}</p>
            </a>
        )
    });

    return (
        <div className={`container ${styles.supporttabs} ${supportTabs.fields.className}`} ref={ref}>
                {tab}
        </div>
    )

}

export default SupportTabs;