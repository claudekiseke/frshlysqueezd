import { useState, useEffect, useRef } from "react";
import { getUserDetails, onAuthStateChanged, auth, doc, db } from "../../../firebase/clientApp";
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

    getUserDetails(formData.fname, formData.lname, formData.email, formData.password, formData.occupation, formData.industry, formData.industryother, formData.level, formData.city, formData.country, formData.profilepic, formData.twitter, formData.instagram, formData.medium, formData.behance, formData.github, formData.portfolio);

    const inputValue = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
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
                            id="account__fname"
                            type="text"
                            value={formData.fname}
                            onChange={inputValue}
                            name="fname"
                            placeholder="First name" />
                        <input
                            id="account__lname"
                            type="text"
                            value={formData.lname}
                            onChange={inputValue}
                            name="lname"
                            placeholder="Last name" />
                        <input
                            id="account__email"
                            type="email"
                            value={formData.email}
                            onChange={inputValue}
                            name="email"
                            placeholder="Email address" />
                        <input
                            id="account__password"
                            type="password"
                            value={formData.password}
                            onChange={inputValue}
                            name="password"
                            placeholder="Password" />
                        <input
                            id="account__city"
                            type="text"
                            value={formData.city}
                            onChange={inputValue}
                            name="city"
                            placeholder="City" />
                        <input
                            id="account__country"
                            type="text"
                            value={formData.country}
                            onChange={inputValue}
                            name="country"
                            placeholder="Country" />
                    </div>
                </fieldset>
                <fieldset className={styles.fieldset}>
                    <label className={styles.label}>Career Details</label>
                    <div className={styles.input_group}>
                        <input
                            id="account__occupation"
                            type="text"
                            value={formData.occupation}
                            onChange={inputValue}
                            name="occupation"
                            placeholder="Occupation" />
                        <select
                            name="industry"
                            value={formData.industry}
                            onChange={inputValue}
                            id="account__industry">
                            <option value="">Select industry</option>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                        <select
                            name="level"
                            value={formData.level}
                            onChange={inputValue}
                            id="account__level">
                            <option value="">Select level</option>
                            <option value="student">Student/Enthusiast</option>
                            <option value="entry">Entry Level</option>
                            <option value="mid">Mid Level</option>
                            <option value="senior">Senior Level</option>
                        </select>
                        <input
                            id="account__industryother"
                            value={formData.industryother}
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
                            id="account__twitter"
                            value={formData.twitter}
                            onChange={inputValue}
                            type="text"
                            name="twitter"
                            placeholder="Twitter" />
                        <input
                            id="account__instagram"
                            value={formData.instagram}
                            onChange={inputValue}
                            type="text"
                            name="instagram"
                            placeholder="Instagram" />
                        <input
                            id="account__medium"
                            value={formData.medium}
                            onChange={inputValue}
                            type="text"
                            name="medium"
                            placeholder="Medium" />
                        <input
                            id="account__behance"
                            value={formData.behance}
                            onChange={inputValue}
                            type="text"
                            name="behance"
                            placeholder="Behance" />
                        <input
                            id="account__github"
                            value={formData.github}
                            onChange={inputValue}
                            type="text"
                            name="github"
                            placeholder="Github" />
                        <input
                            id="account__portfolio"
                            value={formData.portfolio}
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