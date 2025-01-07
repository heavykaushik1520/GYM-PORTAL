import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../style/AllMember.css";

export default function AllMembers() {
  const [members, setMembers] = useState(null); 
  const [isDeleted, setIsDeleted] = useState(false); 

  const fetchMembers = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/members");
      const data = await response.json();
      setMembers(data.data || []); 
    } catch (error) {
      console.error("Error fetching members:", error);
    }
  };

  
  useEffect(() => {
    fetchMembers();
  }, [isDeleted]);

  
  const deleteMember = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/members/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log("Member deleted successfully.");
        setIsDeleted(!isDeleted); 
      } else {
        console.error("Failed to delete member.");
      }
    } catch (error) {
      console.error("Error deleting member:", error);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <h1> All Members </h1>
      <div className="w-75 mt-3 table-bordered">
        <table className="table text-center">
          <thead className="table-dark">
            <tr>
              <th> ID </th>
              <th> NAME </th>
              <th> EMAIL </th>
              <th> AGE </th>
              <th> WEIGHT </th>
              <th colSpan={5}> ACTION </th>
            </tr>
          </thead>
          <tbody>
            {members && members.length > 0 ? (
              members.map((member) => (
                <tr key={member.id}>
                  <th>{member.id}</th>
                  <td>{member.name}</td>
                  <td>{member.email}</td>
                  <td>{member.age}</td>
                  <td>{member.weight} kg</td>
                  
                  <td>
                    <Link
                      className="btn btn-warning"
                      to={`/create-review/${member.id}`}
                    >
                      Review
                    </Link>
                  </td>
                  <td>
                    <Link
                      className="btn btn-warning"
                      to={"/view-review"}
                    >
                      SHOWREVIW
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No members found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
