import React, { useRef, useEffect, useState } from "react";
import styles from './accordion.module.css';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function Accordion({ accordion }) {

    const accordionContent = accordion.fields.accordionContent;
    const accordionItem = accordionContent.map((item, index) => {

        const [isActive, setActive] = useState(false);
        const category = item.fields.category;
        const title = item.fields.title;
        const content = documentToReactComponents(item.fields.content);

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
            <div className={styles.accordionItem} key={index} onClick={() => setActive(isActive ? false : true)}>
                <div className={styles.accordionHeader}>
                    <span>{category}</span>
                    <h3>{title}</h3>
                </div>
                {accordionBody()}
            </div>
        );
    });

    return (
        <div className="container">
            <div className={styles.accordion}>
                {accordionItem}
            </div>
        </div>
    );
}