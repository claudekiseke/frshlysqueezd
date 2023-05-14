import React, { useRef, useEffect } from "react";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import styles from './resources.module.css';

const Resource = ({ resourceFields, overlay, filter, access }) => {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            if ((filter == 'all') || (ref.current.classList.contains(filter))) {
                ref.current.className += " " + styles.resource__show;
            } else {
                ref.current.classList.remove(styles.resource__show);
            }
        }
    });

    const title = resourceFields.resourceTitle;
    const url = resourceFields.url;
    const desc = resourceFields.description;
    const topic = resourceFields.topic.join(" ").toLowerCase();
    const audience = resourceFields.audience.join(" ").toLowerCase();

    const image = () => {
        if (resourceFields.image) {
            const image = resourceFields.image.fields.file.url;
            const width = resourceFields.image.fields.file.details.image.width;
            const height = resourceFields.image.fields.file.details.image.height;

            return (
                <Image
                    src={`https:${image}`}
                    width={width}
                    height={height}
                    alt={title}
                />
            );
        } else {
            const image = overlay.fields.file.url;
            const width = overlay.fields.file.details.image.width;
            const height = overlay.fields.file.details.image.height;

            return (
                <Image
                    src={`https:${image}`}
                    width={width}
                    height={height}
                    alt={title}
                />
            );
        }
    }
    
    if (access) {
        return (
            <div className={`${styles.resource} ${topic} ${audience}`} ref={ref}>
                <div className={styles.resource__img}>
                    {image()}
                </div>
                <div className={styles.resource__body}>
                    <h3 className={styles.resource__title}>{title}</h3>
                    <div className={styles.resource__text}>{documentToReactComponents(desc)}</div>
                    <a className={styles.resource__url} href={url} target="_blank" rel="noreferrer">Visit Site {`>`}</a>
                </div>
            </div>
        );
    } else {
        return (
            <div className={`${styles.resource} ${topic} ${audience} ${styles.blockText}`} ref={ref}>
                <div className={styles.resource__img}>
                    {image()}
                </div>
                <div className={styles.resource__body}>
                    <h3 className={styles.resource__title}>Log in to view</h3>
                    <div className={styles.resource__text}>You need to be logged in to access this resource!</div>
                </div>
            </div>
        );
    }


}

export default Resource;