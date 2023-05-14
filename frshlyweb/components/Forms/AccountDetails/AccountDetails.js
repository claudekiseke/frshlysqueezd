import { useState, useEffect, useRef } from "react";
import { getUserDetails, auth, updateAccount } from "../../../firebase/clientApp";
import styles from "./accountdetails.module.css";

export default function AccountDetails({ accountDetails, filter }) {
    const { user } = auth;
    const ref = useRef();
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
        occupation: "",
        industry: "",
        industryother: "",
        level: "",
        city: "",
        country: "",
        profilepic: "",
        twitter: "",
        instagram: "",
        medium: "",
        behance: "",
        github: "",
        portfolio: ""
    });

    const populateForm = () => {
        const isEmpty = Object.values(formData).every(x => x === null || x === '');

        if (isEmpty) {
            getUserDetails(setFormData);
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
        if (user) {
            const docRef = db.collection("users").doc(user.uid);
            docRef.update({ [name]: value });
        }
    };

    const formSubmit = async (e) => {
        e.preventDefault();

        updateAccount(formData);
        setSubmitted(true);
    }

    useEffect(() => {
        if (ref.current) {
            if ((filter == 'all') || (ref.current.classList.contains(filter))) {
                if (!(ref.current.classList.contains('show'))) {
                    ref.current.className += " " + 'show';
                }
            } else {
                ref.current.classList.remove('show');
            }
        }
    });

    populateForm();

    return (
        <div
            className={`${styles.accountdetails} ${accountDetails.className}`}
            ref={ref}>
            {submitted && <p className="formSubmitedText">Form submitted successfully!</p>}

            <form
                className={`${styles.form} ${accountDetails.className}`}
                id="contact__form"
                onSubmit={formSubmit}
            >
                <fieldset className={styles.fieldset}>
                    <label className={styles.label}>Personal Details</label>
                    <div className={styles.input_group}>
                        <input
                            className={styles.input}
                            id="account__fname"
                            type="text"
                            value={formData.fname}
                            onChange={handleInputChange}
                            name="fname"
                            placeholder="First name" />
                        <input
                            className={styles.input}
                            id="account__lname"
                            type="text"
                            value={formData.lname}
                            onChange={handleInputChange}
                            name="lname"
                            placeholder="Last name" />
                        <input
                            className={styles.input}
                            id="account__email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            name="email"
                            placeholder="Email address" />
                        <input
                            className={styles.input}
                            id="account__password"
                            type="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            name="password"
                            placeholder="Password" />
                        <input
                            className={styles.input}
                            id="account__city"
                            type="text"
                            value={formData.city}
                            onChange={handleInputChange}
                            name="city"
                            placeholder="City" />
                        <input
                            className={styles.input}
                            id="account__country"
                            type="text"
                            value={formData.country}
                            onChange={handleInputChange}
                            name="country"
                            placeholder="Country" />
                    </div>
                </fieldset>
                <fieldset className={styles.fieldset}>
                    <label className={styles.label}>Career Details</label>
                    <div className={styles.input_group}>
                        <input
                            className={styles.input}
                            id="account__occupation"
                            type="text"
                            value={formData.occupation}
                            onChange={handleInputChange}
                            name="occupation"
                            placeholder="Occupation" />
                        <select
                            className={styles.select}
                            onChange={handleInputChange}
                            name="industry"
                            value={formData.industry}
                            id="account__industry">
                            <option value="">Select industry</option>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                        <select
                            className={styles.select}
                            onChange={handleInputChange}
                            name="level"
                            value={formData.level}
                            id="account__level">
                            <option value="">Select level</option>
                            <option value="student">Student/Enthusiast</option>
                            <option value="entry">Entry Level</option>
                            <option value="mid">Mid Level</option>
                            <option value="senior">Senior Level</option>
                        </select>
                        <input
                            className={styles.input}
                            id="account__industryother"
                            value={formData.industryother}
                            type="text"
                            onChange={handleInputChange}
                            name="industryother"
                            placeholder="Enter industry" />
                    </div>
                </fieldset>
                <fieldset className={styles.fieldset}>
                    <label className={styles.label}>Network Details</label>
                    <div className={styles.input_group}>
                        <input
                            className={styles.input}
                            id="account__twitter"
                            value={formData.twitter}
                            type="text"
                            onChange={handleInputChange}
                            name="twitter"
                            placeholder="Twitter" />
                        <input
                            className={styles.input}
                            id="account__instagram"
                            value={formData.instagram}
                            type="text"
                            onChange={handleInputChange}
                            name="instagram"
                            placeholder="Instagram" />
                        <input
                            className={styles.input}
                            id="account__medium"
                            value={formData.medium}
                            type="text"
                            onChange={handleInputChange}
                            name="medium"
                            placeholder="Medium" />
                        <input
                            className={styles.input}
                            id="account__behance"
                            value={formData.behance}
                            type="text"
                            onChange={handleInputChange}
                            name="behance"
                            placeholder="Behance" />
                        <input
                            className={styles.input}
                            id="account__github"
                            value={formData.github}
                            type="text"
                            onChange={handleInputChange}
                            name="github"
                            placeholder="Github" />
                        <input
                            className={styles.input}
                            id="account__portfolio"
                            value={formData.portfolio}
                            type="text"
                            onChange={handleInputChange}
                            name="portfolio"
                            placeholder="Portfolio site" />
                    </div>
                </fieldset>
                <div className={styles.input_group}>
                    <input
                        id="account_save"
                        type="submit"
                        className="btn btn__primary"
                        value="Save Changes" />
                </div>
            </form>
        </div>
    );
}
