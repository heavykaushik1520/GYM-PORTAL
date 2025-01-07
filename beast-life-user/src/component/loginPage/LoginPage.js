import React, { useState } from "react";
import "./loginPage.css";

export default function LoginPage() {
  const [credentials, setCredentials] = useState({
    userName: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Reset error message
    setLoading(true); // Start loading

    try {
      const response = await fetch("http://localhost:8080/api/admins/2");
      if (!response.ok) {
        throw new Error("Failed to fetch admin data");
      }

      const adminData = await response.json();

      // Check credentials
      if (
        credentials.userName.trim() === adminData.data.userName &&
        credentials.password === adminData.data.password
      ) {
        console.log("Logged In");
        alert("You have successfully logged in!");
      } else {
        setErrorMessage("Invalid username or password");
      }
    } catch (err) {
      console.error("Error:", err.message);
      setErrorMessage("Something went wrong. Please try again later.");
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="login-title">Login</h1>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="form-group">
          <label htmlFor="userName">Username</label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={credentials.userName}
            onChange={handleInputChange}
            placeholder="Enter your username"
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
            required
            className="form-control"
          />
        </div>
        <button type="submit" className="login-button">
          {loading ? "Logging In..." : "Login"}
        </button>
      </form>
    </div>
  );
}
