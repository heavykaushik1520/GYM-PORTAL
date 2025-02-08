import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./getByIdMember.css";

export default function MemberDashboard2() {
  const { id } = useParams(); // Member ID from the route
  const [member, setMember] = useState(null); // State for member data
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for errors

  useEffect(() => {
    const fetchMemberData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/members/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch member details.");
        }
        const data = await response.json();
        // console.log(data);
        setMember(data.data); // Set the member data
      } catch (err) {
        setError(err.message); // Set error message
      } finally {
        setLoading(false); // Set loading to false
      }
    };

    fetchMemberData();
  }, [id]);

  if (loading) {
    return <div>Loading member details...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="member-dashboard-container">
      <h1>Welcome, {member.name}!</h1>
      <div className="member-details">
        <p>
          <strong>Id :</strong>
          {member.id}
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
          <strong>Password :</strong>
          {member.password}
        </p>
      </div>
    </div>
  );
}
