import styles from './contactform.module.css';

const ContactForm = ({ contactForm }) => {
    return(
        <div className={`${styles.contact} container`}>
            <div className={styles.contactform}>
                <form action="" method="get" className={styles.contactform__form}>
                        <input type="text" className={styles.contactform__input} name="name" id="name" placeholder={contactForm.fullNamePlaceholder} required />
                        <input type="text" className={styles.contactform__input} name="company" id="company" placeholder={contactForm.companyPlaceholder}  />
                        <input type="email" className={styles.contactform__input} name="email" id="email" placeholder={contactForm.emailPlaceholder} required />
                        <textarea id="story" name="story" placeholder={contactForm.messagePlaceholder} required rows="5" />
                        <input type="submit" className="btn btn__primary" value={contactForm.submitValue} />
                </form>
            </div>
            <div className={styles.contacttext}>
                <h3 className={styles.contacttext__title}>{contactForm.generalEnquiriesTitle}</h3>
                <a href={`mailto:${contactForm.generalEnquiriesEmail}`} className={styles.contacttext__email}>{contactForm.generalEnquiriesEmail}</a>
                <h3 className={styles.contacttext__title}>{contactForm.techSupportTitle}</h3>
                <a href={`mailto:${contactForm.techSupportEmail}`} className={styles.contacttext__email}>{contactForm.techSupportEmail}</a>
            </div>
        </div>
    )

}

export default ContactForm;