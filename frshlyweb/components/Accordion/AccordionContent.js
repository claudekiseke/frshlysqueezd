import React, { useState } from "react";
import styles from './accordion.module.css';

export default function AccordionContent({ category, title, content }) {
    const [isActive, setActive] = useState(false);

    const accordionHeader = () => {
        return (
        <div className={styles.accordionHeader}>
            <span>{category}</span>
            <h3>{title}</h3>
        </div>
        );
    }

    const accordionBody = () => {
        if (isActive) {
            return (
                <div className={styles.accordionContent}>
                    {content}
                </div>
            );
        }
    }
    
    return (
            
        <div className={styles.accordionItem} onClick={() => setActive(isActive ? false : true)}>
            {accordionHeader()}
            {accordionBody()}
        </div>
    );

}