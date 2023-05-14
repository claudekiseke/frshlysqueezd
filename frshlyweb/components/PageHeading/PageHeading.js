import React, { useState, useEffect } from "react";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useRouter } from 'next/router';
import AnnouncementBar from '../AnnouncementBar/AnnouncementBar';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { auth, onAuthStateChanged } from "../../firebase/clientApp";
import { db, doc, getDoc } from "../../firebase/clientApp";
import styles from './pageheading.module.css';
import FeaturedRole from "../FeaturedRole/FeatureRole";

const PageHeading = ({ page, featuredRole }) => {
    const [fname, setFname] = useState("");
    const router = useRouter()
    const url = router.pathname;
    const parentLink = page.fields.pageHeading.fields.pageType;
    const link = page.fields.pageHeading.fields.pageTitle;

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const docRef = doc(db, "users", user.uid);

                try {
                    const docSnap = await getDoc(docRef);
                    setFname((fname) => fname = docSnap.data().fname);

                } catch (e) {
                }
            }
        })
    });

    return (url === '/') ? (
        <>
            <div className={styles.homeHeading}>
                <div className="container">
                    <AnnouncementBar />
                    <div className={styles.homeContent}>
                        <div className={`${styles.pageTitle} mobile-only`}>{documentToReactComponents(page.fields.pageHeading.fields.pageHeading)}</div>
                        <div className={`${styles.pageTitle} desktop-only`}>{documentToReactComponents(page.fields.pageHeading.fields.pageHeading2)}</div>
                        <div className={`${styles.pageDescription} mobile-only`}>{documentToReactComponents(page.fields.pageHeading.fields.pageDescription)}</div>
                    </div>
                </div>
            </div>
            <FeaturedRole featuredRole={featuredRole} />
        </>
    ) : (url === '/account/my-account') ? (

        <div className="container">
            <div className={styles.heading}>
                <div className="container">
                    <div className={styles.pageMeta}>
                        <span className={styles.pageTitle}>
                            {page.fields.pageHeading.fields.pageTitle}
                        </span>
                        <div className={styles.pageTagline}>{documentToReactComponents(page.fields.pageHeading.fields.pageHeading)} <h2><b>{fname}</b>!</h2></div>
                    </div>
                    <div className={styles.pageDescription}>{documentToReactComponents(page.fields.pageHeading.fields.pageDescription)}</div>
                </div>
            </div>
        </div>

    ) : (

        <div className="container">
            <div className={styles.heading}>
                <div className="container">
                    <div className={styles.pageMeta}>
                        <Breadcrumb parentLink={parentLink} link={link} styles={styles} />
                        <div className={styles.pageTagline}>{documentToReactComponents(page.fields.pageHeading.fields.pageHeading)}</div>
                    </div>
                    <div className={styles.pageDescription}>{documentToReactComponents(page.fields.pageHeading.fields.pageDescription)}</div>
                </div>
            </div>
        </div>
    )
}

export default PageHeading;