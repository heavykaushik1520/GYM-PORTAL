import React, { useState } from "react";
import "../../style/createTrainer.css";

export default function CreateTrainer() {
  const [trainer, setTrainer] = useState({
    name: "",
    phoneNumber: "",
    experience: "", // Add the experience field
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTrainer({ ...trainer, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/trainers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(trainer),
      });

      if (response.ok) {
        console.log("Trainer created successfully!");
        alert("Trainer created successfully!");
        setTrainer({
          name: "",
          phoneNumber: "",
          experience: "", // Reset the experience field
        });
      } else {
        console.error("Failed to create trainer. Please try again.");
      }
    } catch (err) {
      console.error("Error creating trainer:", err.message);
    }
  };

  return (
    <div className="create-trainer-container">
      <h2>CREATE TRAINER</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={trainer.name}
            onChange={handleInputChange}
            required
            placeholder="Enter trainer's name"
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={trainer.phoneNumber}
            onChange={handleInputChange}
            required
            placeholder="Enter 10-digit phone number"
          />
        </div>
        <div className="form-group">
          <label>Experience (in years)</label>
          <input
            type="number" // Use type="number" for numeric input
            name="experience"
            value={trainer.experience}
            onChange={handleInputChange}
            required
            placeholder="Enter experience in years"
            min="0" // Minimum value
            max="50" // Optional maximum value
          />
        </div>
        <button type="submit" className="create-trainer-btn btn-primary">
          CREATE
        </button>
      </form>
    </div>
  );
}
