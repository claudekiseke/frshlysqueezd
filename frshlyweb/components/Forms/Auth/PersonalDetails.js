const PersonalDetails = ({ formData, setFormData, styles }) => {
    return (
      <div className="register__personal-details">
        <input
          className={styles.login__textBox}
          id="signup__fname"
          type="text"
          placeholder="First name"
          value={formData.fname}
          onChange={(e) =>
            setFormData({ ...formData, fname: e.target.value })} />
        <input
          className={styles.login__textBox}
          id="signup__lname"
          type="text"
          placeholder="Last name"
          value={formData.lname}
          onChange={(e) =>
            setFormData({ ...formData, lname: e.target.value })} />
        <input
          className={styles.login__textBox}
          id="signup__email"
          type="email"
          placeholder="Email address"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })} />
        <input
          className={styles.login__textBox}
          id="signup__password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })} />
      </div>
    );
  }
  
  export default PersonalDetails;