import React, { useEffect, useState } from "react";
import { useNavigate , useParams } from "react-router-dom";
import "../../style/updateTrainer.css";

export default function UpdateTrainer() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [trainer, setTrainer] = useState({
    name: "",
    phoneNumber: "",
    experience : "",
  });

  useEffect(() => {
    fetch(`http://localhost:8080/api/trainers/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch data");
        return response.json();
      })
      .then((data) => {
        setTrainer({
          name: data.name || "",
          phoneNumber: data.phoneNumber || "",
          experience : data.experience || " ",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        setTrainer({
            name: "",
          phoneNumber: "",
          experience : " ",
        });
      });
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTrainer({ ...trainer, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await fetch(`http://localhost:8080/api/trainers/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(trainer),
      });
      // navigate(-1);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="update-trainer-container">
      <h2 className="update-trainer-heading">Update Trainer</h2>
      <form onSubmit={handleSubmit}>
        <div className="update-trainer-form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={trainer.name}
            onChange={handleInputChange}
            placeholder="Trainer name"
            required
          />
        </div>
        <div className="update-trainer-form-group">
          <label>Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={trainer.phoneNumber}
            onChange={handleInputChange}
            placeholder="Trainer phone"
            required
          />
        </div>
        <div className="update-trainer-form-group">
          <label>Phone Number</label>
          <input
            type="number"
            name="experience"
            value={trainer.experience}
            onChange={handleInputChange}
            placeholder="Trainer Experience"
            required
          />
        </div>
        <button type="submit" className="update-trainer-btn">
          Update 
        </button>
      </form>
    </div>
  );
}
