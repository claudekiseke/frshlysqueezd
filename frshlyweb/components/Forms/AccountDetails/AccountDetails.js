import React, { useState, useEffect, useRef } from "react";
import { auth, onAuthStateChanged } from "../../../firebase/clientApp";
import { db, doc, getDoc } from "../../../firebase/clientApp";
import styles from "./accountdetails.module.css"

const AccountDetails = ({ accountDetails, filter }) => {
    const ref = useRef(null);

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
        github: ""
      });

        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const docRef = doc(db, "users", user.uid);

                try {
                    const docSnap = await getDoc(docRef);
                    setFormData(
                        { ...formData, 
                            fname: docSnap.data().fname, 
                            lname: docSnap.data().lname,
                            email: docSnap.data().email,
                            password: docSnap.data().password,
                            city: docSnap.data().city, 
                            country: docSnap.data().country,
                            occupation: docSnap.data().occupation,
                            industry: docSnap.data().industry, 
                            level: docSnap.data().level, 
                            industryother: docSnap.data().industryother,
                            twitter: docSnap.data().twitter, 
                            instagram: docSnap.data().instagram, 
                            medium: docSnap.data().medium, 
                            behance: docSnap.data().behance, 
                            github: docSnap.data().github, 
                        })

                } catch (e) {
                }
            } else {
            // User is signed out
            // ...
            }
        });

    return (
        <div
        className={`${styles.accountdetails} ${accountDetails.className}`}
        ref={ref}>
        <form 
        className={`${styles.form} ${accountDetails.className}`}
        autoComplete="off">
            <fieldset className={styles.fieldset}>
                <label className={styles.label}>Personal Details</label>
                <div className={styles.input_group}>
                    <input
                    id="account__fname"
                    type="text"
                    value={formData.fname}
                    onChange={(e) =>
                        setFormData({ ...formData, fname: e.target.value })}
                    placeholder="First name" />
                    <input
                    id="account__lname"
                    type="text"
                    value={formData.lname}
                    onChange={(e) =>
                        setFormData({ ...formData, lname: e.target.value })}
                    placeholder="Last name" />
                    <input
                    id="account__email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })}
                    placeholder="Email address" />
                    <input
                    id="account__password"
                    type="password"
                    value={formData.password}
                    onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })}
                    placeholder="Password" />
                    <input
                    id="account__city"
                    type="text"
                    value={formData.city}
                    onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })}
                    placeholder="City" />
                    <input
                    id="account__country"
                    type="text"
                    value={formData.country}
                    onChange={(e) =>
                        setFormData({ ...formData, country: e.target.value })}
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
                    onChange={(e) =>
                        setFormData({ ...formData, occupation: e.target.value })}
                    placeholder="Occupation" />
                    <select
                    name="industry"
                    value={formData.industry}
                    onChange={(e) =>
                        setFormData({ ...formData, industry: e.target.value })}
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
                    onChange={(e) =>
                        setFormData({ ...formData, level: e.target.value })}
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
                    onChange={(e) =>
                        setFormData({ ...formData, industryother: e.target.value })}
                    type="email"
                    placeholder="Enter industry" />
                    </div>
            </fieldset>
            <fieldset className={styles.fieldset}>
                <label className={styles.label}>Network Details</label>
                <div className={styles.input_group}>
                    <input
                    id="account__twitter"
                    value={formData.twitter}
                    onChange={(e) =>
                        setFormData({ ...formData, twitter: e.target.value })}
                    type="text"
                        placeholder="Twitter" />
                    <input
                    id="account__instagram"
                    value={formData.instagram}
                    onChange={(e) =>
                        setFormData({ ...formData, instagram: e.target.value })}
                    type="text"
                    placeholder="Instagram" />
                    <input
                    id="account__medium"
                    value={formData.medium}
                    onChange={(e) =>
                        setFormData({ ...formData, medium: e.target.value })}
                    type="text"
                    placeholder="Medium" />
                    <input
                    id="account__behance"
                    value={formData.behance}
                    onChange={(e) =>
                        setFormData({ ...formData, behance: e.target.value })}
                    type="text"
                    placeholder="Behance" />
                    <input
                    id="account__github"
                    value={formData.github}
                    onChange={(e) =>
                        setFormData({ ...formData, github: e.target.value })}
                    type="text"
                    placeholder="Github" />
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