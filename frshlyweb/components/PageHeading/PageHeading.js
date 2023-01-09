import React, { useState, useEffect } from "react";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useRouter } from 'next/router';
import Image from 'next/image';
import myImageLoader from '../../public/loader';
import { auth, onAuthStateChanged } from "../../firebase/clientApp";
import { db, doc, getDoc } from "../../firebase/clientApp";
import styles from './pageheading.module.css';

const PageHeading = ( {page} ) => {
    const [fname, setFname] = useState("");
    const router = useRouter()
    const url = router.pathname;

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

        <div className={`${styles.heading} ${styles.homeheading}`}>
            <div className="container">
                <div className={`${styles.pagemeta} ${styles.homemeta}`}>
                <div className={styles.pagetagline}>{documentToReactComponents(page.fields.pageHeading.fields.pageHeading)}</div>
                </div>
                <div className={styles.homedesc}> 
                {page.fields.pageHeading.fields.pageDescription}
                </div>
                <div className={styles.homeimg}>
                    <Image 
                    src={`https:${page.fields.pageHeading.fields.pageThumbnail.fields.file.url}`}
                    width={page.fields.pageHeading.fields.pageThumbnail.fields.file.details.image.width}
                    height={page.fields.pageHeading.fields.pageThumbnail.fields.file.details.image.height}
                    alt="test"
                    priority
                    loader={myImageLoader}
                    />
                </div>
            </div>
        </div>

      )  : (url === '/account/my-account') ? (

        <div className={styles.heading}>
        <div className="container">
            <div className={styles.pagemeta}>
                <h1 className={styles.pagetitle}>{page.fields.pageHeading.fields.pageTitle}</h1>
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
                    <h1 className={styles.pagetitle}>{page.fields.pageHeading.fields.pageTitle}</h1>
                    <div className={styles.pagetagline}>{documentToReactComponents(page.fields.pageHeading.fields.pageHeading)}</div>
                </div>
                <div className={styles.pagedesc}>
                    {page.fields.pageHeading.fields.pageDescription}
                </div>
            </div>
        </div>

      )}

export default PageHeading;