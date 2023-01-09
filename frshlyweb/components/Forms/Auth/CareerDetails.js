const CareerDetails = ({ formData, setFormData }) => {
    return (
      <div className="register__career-details">
        <input
          id="signup__occupation"
          type="text"
          placeholder="Occupation"
          value={formData.occupation}
          onChange={(e) =>
            setFormData({ ...formData, occupation: e.target.value})} />
        <select
          name="industry"
          id="signup__industry"
          value={formData.industry}
          onChange={(e) =>
            setFormData({ ...formData, industry: e.target.value })}>
          <option value="">Select industry</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <input
          id="signup__other"
          type="text"
          placeholder="Please specify"
          value={formData.industryother}
          onChange={(e) =>
            setFormData({ ...formData, industryother: e.target.value })} />
        <select
          name="level"
          id="signup__level"
          value={formData.level}
          onChange={(e) =>
            setFormData({ ...formData, level: e.target.value })}>
          <option value="">Select level</option>
          <option value="">Select level</option>
          <option value="student">Student/Enthusiast</option>
          <option value="entry">Entry Level</option>
          <option value="mid">Mid Level</option>
          <option value="senior">Senior Level</option>
        </select>
        <input
          id="signup__city"
          type="text"
          placeholder="City"
          value={formData.city}
          onChange={(e) =>
            setFormData({ ...formData, city: e.target.value })} />
        <input
          id="signup__country"
          type="text"
          placeholder="Country"
          value={formData.country}
          onChange={(e) =>
            setFormData({ ...formData, country: e.target.value })} />
      </div>
    );
  }
  
  export default CareerDetails;