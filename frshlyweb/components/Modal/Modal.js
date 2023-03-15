import React, { useState } from "react";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { resourceSubmit } from "../../firebase/clientApp"
import sidebarStyles from "../Sidebar/sidebar.module.css";
import formStyles from "../Forms/ContactForm/contactform.module.css";
import styles from './modal.module.css';

const Modal = ({ modal, showModal, setShowModal, className, linkTitle, submitResource }) => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        url: ""
    });
    
    Modal.defaultProps = {
        className: "",
        linkTitle: "",
        submitResource: {}
    };
    
    const inputValue = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const formSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        await resourceSubmit(formData.title, formData.url);
        setLoading(false);
        setFormData({
            title: "",
            url: ""
        });
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleShowModal = () => {
        setShowModal(true);
    };

    return (
        <>
            <button className={`${sidebarStyles.sidebar__link} ${className}`} onClick={handleShowModal}>{linkTitle}</button>

            {showModal && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <span className={styles.modalClose} onClick={handleCloseModal} aria-label="Close Modal">
                            &times;
                        </span>
                        <h3 className={styles.modalTitle}>{modal.fields.modalTitle}</h3>
                        <div className={styles.modalText}>{documentToReactComponents(modal.fields.modalContent)}</div>
                        {/* <form
                            className={formStyles.contactform__form}
                            id="contact__form"
                            onSubmit={formSubmit}
                        >
                        <label className={formStyles.contactForm__label} htmlFor="title">{submitResource.fields.resourceTitlePlaceholder}</label>
                    <input
                        type="text"
                        className={formStyles.contactform__input}
                        value={formData.title}
                        onChange={inputValue}
                        name="title"
                        placeholder={submitResource.fields.resourceTitlePlaceholder}
                        id="title"
                        required
                    />
                    <label className={formStyles.contactForm__label} htmlFor="url">{submitResource.fields.resourceUrlPlaceholder}</label>
                    <input
                        type="text"
                        className={formStyles.contactform__input}
                        value={formData.url}
                        onChange={inputValue}
                        name="url"
                        placeholder={submitResource.fields.resourceUrlPlaceholder}
                        id="url"
                        required
                    />

                    <input
                        type="submit"
                        className="btn btn__primary"
                        value={submitResource.fields.submitValue}
                        disabled={loading}
                    />
                        </form> */}
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;
