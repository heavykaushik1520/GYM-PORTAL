import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../style/updatemember.css";

export default function UpdateMember() {
  const { id } = useParams(); // get ID from route
  const navigate = useNavigate(); // to navigate after success operation

  const [member, setMember] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    age: 0,
    weight: 0,
  });

  const [showPassword, setShowPassword] = useState(false); // state to control password visibility

  useEffect(() => {
    fetch(`http://localhost:8080/api/members/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch data");
        return response.json();
      })
      .then((data) => {
        setMember({
          name: data.name || "",
          email: data.email || "",
          password: data.password || "", // Initialize password as well
          address: data.address || "",
          age: data.age || 0,
          weight: data.weight || 0,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        setMember({
          name: "",
          email: "",
          password: "",
          address: "",
          age: 0,
          weight: 0,
        });
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMember({ ...member, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`http://localhost:8080/api/members/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(member),
      });
      navigate("/member-dashboard");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle password visibility
  };

  return (
    <div className="update-member-container">
      <h2>Update Member</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
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
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={member.address}
            onChange={handleInputChange}
            required
          />
        </div>

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
          <label>Weight</label>
          <input
            type="number"
            name="weight"
            value={member.weight}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Add Password Input with Show/Hide toggle */}
        <div className="form-group">
          <label>Password</label>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"} // Toggle between text and password types
              name="password"
              value={member.password}
              onChange={handleInputChange}
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="show-password-toggle"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Update Member
        </button>
      </form>
    </div>
  );
}
