import Head from 'next/head';
import Image from 'next/image';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import styles from './Home.module.css';

const url = "https://frshlysqueezd.us7.list-manage.com/subscribe/post?u=7f5f44f058739ef29780dca63&amp;id=628c0ddafe&amp;f_id=00a684e3f0";

// a basic form
const MailchimpForm = ({ status, message, onValidated }) => {
    let email, fname, lname, city, occupation;
    const submit = () =>
        email &&
        fname &&
        lname &&
        city &&
        occupation &&
        email.value.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email.value,
            FNAME: fname.value,
            LNAME: lname.value,
            CITY: city.value,
            OCCUPATION: occupation.value
        });

    return (
        <div className={styles.mcfieldgroup}>
            {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
            {status === "error" && (
                <div
                    style={{ color: "red" }}
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            {status === "success" && (
                <div
                    style={{ color: "green" }}
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            <input
                style={{}}
                ref={node => (fname = node)}
                type="text"
                placeholder="First name"
            />
            <input
                style={{}}
                ref={node => (lname = node)}
                type="text"
                placeholder="Last name"
            />
            <input
                style={{}}
                ref={node => (email = node)}
                type="email"
                placeholder="Email address"
            />
            <input
                style={{}}
                ref={node => (city = node)}
                type="text"
                placeholder="Location (city, country)"
            />
            <input
                style={{}}
                ref={node => (occupation = node)}
                type="text"
                placeholder="Occupation"
            />
            <button className={`btn btn__primary ${styles.btn} ${styles.btn__primary} ${styles.btnsubmit}`} style={{}} onClick={submit}>
                Subscribe
            </button>
        </div>
    );
};

export default function Landing() {
    return (
        <>
            <Head>
                <title>Frshly Squeezd</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" user-scalable="no" />
            </Head>
            <div className={`container ${styles.container}`}>
                <header className={styles.header}>
                    <a href="mailto:hello@frshlysqueezd.com" class={`btn btn__secondary ${styles.btn} ${styles.btn__secondary}`}>Get in touch</a>
                    <a href="https://www.linkedin.com/company/frshlysqueezd" target="_blank" rel="noreferrer" class={`btn btn__primary ${styles.btn} ${styles.btn__primary}`}>Follow us on LinkedIn</a>
                </header>

                <main div className={styles.main}>
                    <Image
                    src="https://images.ctfassets.net/xa1los3yndi8/2l3wsP2lZPMo8hartismIj/9cff6775c0ad42379acd83b56290af46/Logo.png"
                    width="274"
                    height="30" 
                    alt="Frshly Squeezd"
                    />
                    <p className={styles.p}>We’re an open collective of designers of design and tech creatives, professionals, students and grads, cultivating
                        a culture of education, growth and collaboration through virtual and in-person events, projects and research.
                    </p>
                    <p className={styles.p}><strong>Be the first one to find out about our launch. No spam. Ever. We promise.</strong></p>

                    <MailchimpSubscribe
                        url={url}
                        render={({ subscribe, status, message }) => (
                            <MailchimpForm
                                status={status}
                                message={message}
                                onValidated={formData => subscribe(formData)}
                            />
                        )}
                    />
                </main>
                <footer className={styles.footer}>
                    <p className={styles.p}>Copyright Ⓒ FRSHLY SQUEEZD 2022, All Rights Reserved</p>
                </footer>
            </div>
        </>
    )
}
