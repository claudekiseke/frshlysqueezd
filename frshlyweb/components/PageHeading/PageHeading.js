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
                    setFname((fname) => fname = docSnap.data().fname + "!");

                } catch (e) {
                    console.log("friend!:", e);
                }
            } else {
                // User is signed out
                // ...
            }
        })
    });

    return (url === '/') ? (
        <>
            <div className={`${styles.heading} ${styles.homeheading}`}>
                <div className="container">
                    <AnnouncementBar />
                    <div className={`${styles.pagemeta} ${styles.homemeta}`}>
                        <div className={`${styles.pagetagline} mobile-only`}>{documentToReactComponents(page.fields.pageHeading.fields.pageHeading)}</div>
                        <div className={`${styles.pagetagline} desktop-only`}>{documentToReactComponents(page.fields.pageHeading.fields.pageHeading2)}</div>
                    </div>
                    <div className={styles.homedesc}>
                        <p>{page.fields.pageHeading.fields.pageDescription}</p>
                    </div>
                </div>
            </div>
            <FeaturedRole featuredRole={featuredRole} />
        </>
    ) : (url === '/account/my-account') ? (

        <div className={`${styles.heading} ${porker.className}`}>
            <div className="container">
                <div className={styles.pagemeta}>
                    <span className={styles.pagetitle}>

                        {page.fields.pageHeading.fields.pageTitle}</span>
                    <div className={styles.pagetagline}>{documentToReactComponents(page.fields.pageHeading.fields.pageHeading)} <h2>{fname}</h2></div>
                </div>
                <div className={styles.pagedesc}>
                    {page.fields.pageHeading.fields.pageDescription}
                </div>
            </div>
        </div>

    ) : (

        <div className={styles.heading}>
            <div className="container">
                <div className={styles.pagemeta}>
                    <Breadcrumb parentLink={parentLink} link={link} styles={styles} />
                    <div className={styles.pagetagline}>{documentToReactComponents(page.fields.pageHeading.fields.pageHeading)}</div>
                </div>
                <div className={styles.pagedesc}>
                    {page.fields.pageHeading.fields.pageDescription}
                </div>
            </div>
        </div>

    )
}

export default PageHeading;