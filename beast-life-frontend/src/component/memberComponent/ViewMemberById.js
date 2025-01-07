import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../style/ViewMemberById.css"; 

export default function ViewMemberById() {
  const { id } = useParams(); 
  const [member, setMember] = useState(null); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    fetchMemberById();
  }, [id]); 

  const fetchMemberById = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/members/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch member data");
      }
      const data = await response.json();
      setMember(data); 
    } catch (err) {
      setError(err.message); 
    }
  };

  if (error) {
    return <div className="error-message">Error: {error}</div>; 
  }

  if (!member) {
    return <div className="loading-message">Loading member details...</div>; 
  }

  return (
    <div className="card-container">
      <div className="card">
        <h1 className="card-title">Member Details</h1>
        <div className="card-body">
          <p>
            <strong>Name:</strong> {member.name}
          </p>
          <p>
            <strong>Email:</strong> {member.email}
          </p>
          <p>
            <strong>Address:</strong> {member.address}
          </p>
          <p>
            <strong>Age:</strong> {member.age}
          </p>
          <p>
            <strong>Weight:</strong> {member.weight} kg
          </p>
          <p>
            <strong>Trainer:</strong>{" "}
            {member.trainer ? member.trainer.name : "No Trainer Assigned"}
          </p>
        </div>
      </div>
    </div>
  );
}
