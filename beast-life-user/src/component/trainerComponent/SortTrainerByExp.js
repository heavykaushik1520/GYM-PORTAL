import React, { useState, useEffect } from "react";
import "../../style/trainersSortedByExperience.css"; 

export default function GetTrainersSortedByExperience() {
  const [trainers, setTrainers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSortedTrainers = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/trainers/sorted-by-experience",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setTrainers(data.data); // Assuming your backend wraps the data inside `responseWrapper.data`
        } else {
          const errorData = await response.json();
          setError(errorData.message || "Failed to fetch trainers.");
        }
      } catch (err) {
        setError("Error fetching trainers. Please try again later.");
        console.error(err);
      }
    };

    fetchSortedTrainers();
  }, []);

  return (
    <div className="trainers-container">
      <h2 className="trainers-header">EXPERIENCED</h2>
      {error && <p className="error-message">{error}</p>}
      {trainers.length > 0 ? (
        <table className="trainers-table">
          <thead>
            <tr>
              <th className="table-header">Name</th>
              <th className="table-header">Phone Number</th>
              <th className="table-header">Experience (Years)</th>
            </tr>
          </thead>
          <tbody>
            {trainers.map((trainer) => (
              <tr key={trainer.id} className="table-row">
                <td className="table-data">{trainer.name}</td>
                <td className="table-data">{trainer.phoneNumber}</td>
                <td className="table-data">{trainer.experience}  years</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        !error && <p className="loading-message">Loading trainers...</p>
      )}
    </div>
  );
}
