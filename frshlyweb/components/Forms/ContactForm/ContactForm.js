import React, { useState } from "react";
import { contactSubmit } from "../../../firebase/clientApp";
import styles from './contactform.module.css';

const ContactForm = ({ contactForm }) => {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        message: ""
    });

    const inputValue = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const formSubmit = async (e) => {
        e.preventDefault();

        const name = formData.name;
        const company = formData.company;
        const email = formData.email;
        const message = formData.message;

        contactSubmit(name, company, email, message);

        setFormData({
            name: "",
            company: "",
            email: "",
            message: "",
          });
      };

    return (
        <div className={`${styles.contact} container`}>
            <div className={styles.contactform}>
                <form
                    className={styles.contactform__form}
                    id="contact__form"
                    onSubmit={formSubmit}
                >
                    <label className={styles.contactForm__label} htmlFor="name">{contactForm.fullNamePlaceholder}</label>
                    <input
                        type="text"
                        className={styles.contactform__input}
                        value={formData.name}
                        onChange={inputValue}
                        name="name"
                        placeholder={contactForm.fullNamePlaceholder}
                        id="name"
                        required
                    />

                    <label className={styles.contactForm__label} htmlFor="company">{contactForm.companyPlaceholder}</label>
                    <input
                        type="text"
                        className={styles.contactform__input}
                        value={formData.company}
                        onChange={inputValue}
                        name="company"
                        placeholder={contactForm.companyPlaceholder}
                        id="company"
                    />

                    <label className={styles.contactForm__label} htmlFor="email">{contactForm.emailPlaceholder}</label>
                    <input
                        type="email"
                        className={styles.contactform__input}
                        value={formData.email}
                        onChange={inputValue}
                        name="email"
                        placeholder={contactForm.emailPlaceholder}
                        id="email"
                        required
                    />

                    <label className={styles.contactForm__label} htmlFor="message">{contactForm.messagePlaceholder}</label>
                    <textarea
                        id="message"
                        value={formData.message}
                        onChange={inputValue}
                        name="message"
                        placeholder={contactForm.messagePlaceholder}
                        required
                        rows="5"
                    />

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