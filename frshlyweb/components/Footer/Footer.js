import Link from 'next/link';
import styles from './footer.module.css';
import MailchimpSubscribe from "react-mailchimp-subscribe"

const url = "https://frshlysqueezd.us7.list-manage.com/subscribe/post?u=7f5f44f058739ef29780dca63&amp;id=628c0ddafe&amp;f_id=00a684e3f0";

// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe url={url} />

// a basic form
const MailchimpForm = ({ status, message, onValidated }) => {
    let email, name;
    const submit = () =>
        email &&
        name &&
        email.value.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email.value,
            NAME: name.value
        });

    return (
        <div className={styles.form}>
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
                className={styles.input}
                style={{}}
                ref={node => (name = node)}
                type="text"
                placeholder="First name"
            />
            <input
                className={styles.input}
                style={{}}
                ref={node => (email = node)}
                type="email"
                placeholder="Email address"
            />
            <button className={`btn btn__primary ${styles.input}`} style={{}} onClick={submit}>
                Subscribe
            </button>
        </div>
    );
};

const Footer = () => {

    return (
        <footer className={styles.footer}>
            <div className={styles.newsletter}>
                <div className="container">
                    <div className={styles.newsletter__intro}>
                        <h3>Subscribe to the Weekly Squeeze</h3>
                        <p>Be the first one to know about new features, articles and events. No spam. Ever. We promise.</p>
                    </div>
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

                    <div className={styles.copyright}><p>Copyright Ⓒ FRSHLY SQUEEZD 2022, All Rights Reserved</p></div>
                </div>
            </div>
        </footer>
    )

}

export default Footer;