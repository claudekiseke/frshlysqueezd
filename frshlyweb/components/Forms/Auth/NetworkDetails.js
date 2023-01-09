const NetworkDetails = ({ formData, setFormData }) => {
    return (
      <div className="register__network-details">
        {/* <input
          type="file"
          id="signup__profile-pic"
          name="profile-pic"
          value={formData.profilepic}
          onChange={(e) =>
            setFormData({ ...formData, profilepic: e.target.value })} /> */}
        <input
          id="signup__twitter"
          type="text"
          placeholder="Twitter"
          value={formData.twitter}
          onChange={(e) =>
            setFormData({ ...formData, twitter: e.target.value })} />
        <input
          id="signup__instagram"
          type="text"
          placeholder="Instagram"
          value={formData.instagram}
          onChange={(e) =>
            setFormData({ ...formData, instagram: e.target.value })} />
        <input
          id="signup__medium"
          type="text"
          placeholder="Medium"
          value={formData.medium}
          onChange={(e) =>
            setFormData({ ...formData, medium: e.target.value })} />
        <input
          id="signup__behance"
          type="text"
          placeholder="Behance"
          value={formData.behance}
          onChange={(e) =>
            setFormData({ ...formData, behance: e.target.value })} />
        <input
          id="signup__github"
          type="text"
          placeholder="Github"
          value={formData.github}
          onChange={(e) =>
            setFormData({ ...formData, github: e.target.value })} />
      </div>
    );
  }
  
  export default NetworkDetails;