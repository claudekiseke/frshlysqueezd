import { useState, useEffect, useRef } from "react";
import { getUserDetails, onAuthStateChanged, auth, doc, db, getDoc } from "../../../firebase/clientApp";
import styles from "./accountdetails.module.css";

const AccountDetails = ({ accountDetails, filter }) => {
    const ref = useRef(null);

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

    const [formValue, setFormValue] = useState({
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

    getUserDetails(setFormData);
    
    const inputValue = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
    };

    const formSubmit = async (e) => {
        e.preventDefault();
    };    
    
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

    return (
        <div
            className={`${styles.accountdetails} ${accountDetails.className}`}
            ref={ref}>
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
                            value={formValue.fname}
                            onChange={inputValue}
                            name="fname"
                            placeholder="First name" />
                        <input
                            className={styles.input}
                            id="account__lname"
                            type="text"
                            value={formValue.lname}
                            onChange={inputValue}
                            name="lname"
                            placeholder="Last name" />
                        <input
                            className={styles.input}
                            id="account__email"
                            type="email"
                            value={formValue.email}
                            onChange={inputValue}
                            name="email"
                            placeholder="Email address" />
                        <input
                            className={styles.input}
                            id="account__password"
                            type="password"
                            value={formValue.password}
                            onChange={inputValue}
                            name="password"
                            placeholder="Password" />
                        <input
                            className={styles.input}
                            id="account__city"
                            type="text"
                            value={formValue.city}
                            onChange={inputValue}
                            name="city"
                            placeholder="City" />
                        <input
                            className={styles.input}
                            id="account__country"
                            type="text"
                            value={formValue.country}
                            onChange={inputValue}
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
                            value={formValue.occupation}
                            onChange={inputValue}
                            name="occupation"
                            placeholder="Occupation" />
                        <select
                            className={styles.select}
                            name="industry"
                            value={formValue.industry}
                            onChange={inputValue}
                            id="account__industry">
                            <option value="">Select industry</option>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                        <select
                            className={styles.select}
                            name="level"
                            value={formValue.level}
                            onChange={inputValue}
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
                            value={formValue.industryother}
                            onChange={inputValue}
                            type="text"
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
                            value={formValue.twitter}
                            onChange={inputValue}
                            type="text"
                            name="twitter"
                            placeholder="Twitter" />
                        <input
                            className={styles.input}
                            id="account__instagram"
                            value={formValue.instagram}
                            onChange={inputValue}
                            type="text"
                            name="instagram"
                            placeholder="Instagram" />
                        <input
                            className={styles.input}
                            id="account__medium"
                            value={formValue.medium}
                            onChange={inputValue}
                            type="text"
                            name="medium"
                            placeholder="Medium" />
                        <input
                            className={styles.input}
                            id="account__behance"
                            value={formValue.behance}
                            onChange={inputValue}
                            type="text"
                            name="behance"
                            placeholder="Behance" />
                        <input
                            className={styles.input}
                            id="account__github"
                            value={formValue.github}
                            onChange={inputValue}
                            type="text"
                            name="github"
                            placeholder="Github" />
                        <input
                            className={styles.input}
                            id="account__portfolio"
                            value={formValue.portfolio}
                            onChange={inputValue}
                            type="text"
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
    )
}

export default AccountDetails;