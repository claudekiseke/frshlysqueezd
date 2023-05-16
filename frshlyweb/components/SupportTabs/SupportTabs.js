import React, { useRef, useEffect } from "react";
import styles from './supporttabs.module.css';

const SupportTabs = ({ filter, supportTabs }) => {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            if (filter != null) {
            if ((filter == 'all') || (ref.current.classList.contains(filter))) {
                if (!(ref.current.classList.contains('show'))) {
                    ref.current.classList.remove('show-none');
                    ref.current.className += " " + 'show';
                }
            } else {
                ref.current.classList.remove('show');
                ref.current.className += " " + 'show-none';
            }
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
        <div className={`${styles.supporttabs} ${supportTabs.fields.className}`} ref={ref}>
                {tab}
        </div>
    )

}

export default SupportTabs;