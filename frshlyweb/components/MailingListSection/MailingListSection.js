import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import AnnouncementBar from '../AnnouncementBar/AnnouncementBar';
import styles from './mailingListSection.module.css';

const url = "https://frshlysqueezd.us7.list-manage.com/subscribe/post?u=7f5f44f058739ef29780dca63&amp;id=628c0ddafe&amp;f_id=00a684e3f0";

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

const MailingListSection = ({ mailingListSection }) => {
    return (
        <div className={styles.weekly}>
        <div className="container">
            <div className={styles.title}>{documentToReactComponents(mailingListSection.mailingTitle)}</div>
            <p className={styles.desc}>{mailingListSection.description}</p>
            <div className={styles.mail}>
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
            </div>
            </div>
            </div>
    )

}

export default MailingListSection;