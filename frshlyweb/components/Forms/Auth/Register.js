import styles from "./auth.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import { signUp } from "../../../firebase/clientApp";
import PersonalDetails from './PersonalDetails';
import CareerDetails from './CareerDetails';
import NetworkDetails from './NetworkDetails';

const Register = () => {

  const router = useRouter()
  const [step, setStep] = useState(0);
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

  const signUpTabs = () => {
    if (step === 0) {
      return (
        <PersonalDetails formData={formData} setFormData={setFormData} styles={styles} />
      );
    } else if (step === 1) {
      return (
        <CareerDetails formData={formData} setFormData={setFormData} styles={styles} />
      );
    } else {
      return (
        <NetworkDetails formData={formData} setFormData={setFormData} styles={styles} />
      )
    }
  }

  const signupSubmit = (e) => {
    const signupForm = document.querySelector('#signup__form');
    e.preventDefault();

    // Get user info
    const fname = formData.fname;
    const lname = formData.lname;
    const email = formData.email;
    const password = formData.password;
    const occupation = formData.occupation;
    const industry = formData.industry;
    const industryother = formData.industryother;
    const level = formData.level;
    const city = formData.city;
    const country = formData.country;
    const profilepic = formData.profilepic;
    const twitter = formData.twitter;
    const instagram = formData.instagram;
    const medium = formData.medium;
    const behance = formData.behance;
    const github = formData.github;
    const portfolio = formData.portfolio;

    signUp(fname, lname, email, password, occupation, industry, industryother, level, city, country, profilepic, twitter, instagram, medium, behance, github, portfolio).then(cred => {
      router.push('/account/my-account')
      signupForm.reset();
    })
  }

  return (
    <div className="signup">
      <form id="signup__form" onSubmit={signupSubmit}>
        {signUpTabs()}
      <div className={styles.progress}>
        <div className={styles.progress__bar}
        style={{width: step === 0 ? "33.3%" : step === 1 ? "66.6%" : "100%"}}></div>
      </div>
        <div className={styles.nav}>
          <input type="button"
            onClick={() => { setStep((currentStep) => currentStep - 1) }}
            className="btn btn__primary"
            value="Prev"
            disabled={step === 0} />
          <input 
            onClick={() => { setStep((currentStep) => currentStep + 1) }}
            className="btn btn__primary"
            type={step === 3 ? "submit" : "button"}
            value={step >= 2 ? "Register" : "Next"}
             />
        </div>
      </form>
    </div>
  );
}

export default Register;
