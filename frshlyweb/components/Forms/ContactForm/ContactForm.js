import { useState } from "react";
import styles from './contactform.module.css';

const ContactForm = ({ contactForm }) => {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        message: ""
    });

    const contactSubmit = (e) => {
        const form = document.getElementById('contact__form');
        e.preventDefault();

        let name = formData.name;
        const company = formData.company;
        const email = formData.email;
        const message = formData.message;

        name = '';
        form.reset();
        console.log('email: ' + contactForm.generalEnquiriesEmail + ' name: ' + name + ' company: ' + company + ' email: ' + email + ' message: ' + message)
    }

    return(
        <div className={`${styles.contact} container`}>
            <div className={styles.contactform}>
                <form
                    className={styles.contactform__form}
                    id="contact__form"
                    onSubmit={contactSubmit}
                >
                        <input 
                            type="text"
                            className={styles.contactform__input}
                            value={formData.name}
                            onChange={(e) => setFormData(e.target.value)}
                            name="name"
                            id="name"
                            placeholder={contactForm.fullNamePlaceholder}
                            required
                        />
                        <input
                            type="text"
                            className={styles.contactform__input}
                            value={formData.company}
                            onChange={(e) =>
                                setFormData({ ...formData, company: e.target.value})}
                            name="company"
                            id="company"
                            placeholder={contactForm.companyPlaceholder}
                        />
                        <input
                            type="email"
                            className={styles.contactform__input}
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value})}
                            name="email"
                            id="email"
                            placeholder={contactForm.emailPlaceholder}
                            required
                        />
                        <textarea 
                            id="message"
                            value={formData.message}
                            onChange={(e) =>
                                setFormData({ ...formData, message: e.target.value})}
                            name="message"
                            placeholder={contactForm.messagePlaceholder}
                            required
                            rows="5" />
                        <input
                            type="submit"
                            className="btn btn__primary"
                            value={contactForm.submitValue}
                        />
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