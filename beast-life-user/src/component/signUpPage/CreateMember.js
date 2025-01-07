import React, { useState } from "react";
import "../../style/CreateMember.css"

const CreateMember = () => {
  const createMemberApi = "http://localhost:8080/api/members";
  const [member, setMember] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    age: "",
    weight: "",
    phoneNumber: "",
    trainerId: "",
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMember({ ...member, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(createMemberApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(member),
      });

      if (response.ok) {
        console.log("Member created successfully!");
        setSuccessMessage("Member created successfully!");
        setMember({
          name: "",
          email: "",
          password: "",
          address: "",
          age: "",
          weight: "",
          phoneNumber: "",
          trainerId: "",
        });
      } else {
        console.error("Failed to create member..");
        setError("Failed to create member. Please try again.");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="background-img">
    <div className="create-member-container">
      {/* <h2 className="form-heading">Register Member</h2> */}
      {successMessage && <p className="success">{successMessage}</p>}
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit} className="member-form">
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={member.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={member.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={member.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <textarea
            name="address"
            value={member.address}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div className="form-group-row">
          <div className="form-group">
            <label>Age</label>
            <input
              type="number"
              name="age"
              value={member.age}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Weight (kg)</label>
            <input
              type="number"
              name="weight"
              value={member.weight}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        {/* <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={member.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div> */}
        <div className="form-group">
          <label>Trainer ID (Optional)</label>
          <input
            type="text"
            name="trainerId"
            value={member.trainerId}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn-submit">
          {isLoading ? "Registering..." : "Register Member"}
        </button>
      </form>
    </div>
    </div>
  );
};

export default CreateMember;
