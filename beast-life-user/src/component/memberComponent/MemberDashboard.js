// import React, { useEffect, useState } from "react";
// import "./getByIdMember.css"

// export default function MemberDashboard2() {
//   const [member, setMember] = useState(null); // State for member data
//   const [errorMessage, setErrorMessage] = useState("");
//   const [loading, setLoading] = useState(true);


//   const email = localStorage.getItem("memberEmail"); // Retrieve email from localStorage

//   useEffect(() => {
//     const fetchMemberDetails = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:8080/api/members/email?email=${email}`
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch member details");
//         }

//         const data = await response.json();
//         console.log("Fetched member data:", data);

//         if (data.data && data.data.length > 0) {
//           setMember(data.data[0]); // Set the member object
//         } else {
//           throw new Error("No member data found");
//         }
//       } catch (err) {
//         console.error("Error fetching member details:", err.message);
//         setErrorMessage(
//           "Failed to fetch member details. Please try again later."
//         );
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (email) {
//       fetchMemberDetails();
//     } else {
//       setErrorMessage("No email found. Please log in.");
//       setLoading(false);
//     }
//   }, [email]);

//   if (loading) {
//     return <div>Loading member details...</div>;
//   }

//   if (errorMessage) {
//     return <div className="error-message">{errorMessage}</div>;
//   }

//   if (!member) {
//     return <div>No member details found.</div>;
//   }

//   return (
//     <div className="member-dashboard-container">
//       <h1>Welcome, {member.name}</h1>
//       <p>
//         <strong>Email:</strong> {member.email}
//       </p>
//       <p>
//         <strong>Address:</strong> {member.address}
//       </p>
//       <p>
//         <strong>Age:</strong> {member.age}
//       </p>
//       <p>
//         <strong>Weight:</strong> {member.weight} kg
//       </p>
//       {/* <p>
//         <strong>Trainer:</strong>{" "}
//         {member.trainer?.name || "No Trainer Assigned"}
//       </p>
//       <p>
//         <strong>Review:</strong>{" "}
//         {member.review?.description || "No Review Added"}
//       </p> */}
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import "./getByIdMember.css";

export default function MemberDashboard2() {
  const [member, setMember] = useState(null); // State for member data
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const email = localStorage.getItem("memberEmail"); // Retrieve email from localStorage

  useEffect(() => {
    const fetchMemberDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/members/email?email=${email}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch member details");
        }

        const data = await response.json();
        console.log("Fetched member data:", data);

        if (data.data && data.data.length > 0) {
          setMember(data.data[0]); 
        } else {
          throw new Error("No member data found");
        }
      } catch (err) {
        console.error("Error fetching member details:", err.message);
        setErrorMessage(
          "Failed to fetch member details. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    };

    if (email) {
      fetchMemberDetails();
    } else {
      setErrorMessage("No email found. Please log in.");
      setLoading(false);
    }
  }, [email]);

  if (loading) {
    return <div>Loading member details...</div>;
  }

  if (errorMessage) {
    return <div className="error-message">{errorMessage}</div>;
  }

  if (!member) {
    return <div>No member details found.</div>;
  }

  return (
    <div className="member-dashboard-container">
      <div className="member-card">
        <h1>Welcome, {member.name.toUpperCase()}</h1>
        <p>
          <strong>ID:</strong> {member.id}
        </p>

        <p>
          <strong>Email:</strong> {member.email}
        </p>
        <p>
          <strong>Password :</strong> {member.password}
        </p>
        <p>
          <strong>Address:</strong> {member.address.toUpperCase()}
        </p>
        <p>
          <strong>Age:</strong> {member.age}
        </p>
        <p>
          <strong>Weight:</strong> {member.weight} kg
        </p>
      </div>

      <div>
        <Link className="dropdown-button" to={`/update-member/${member.id}`}>
        UPDATE
        </Link>
      </div>

      {/* Dropdown for Review Options */}
     
    </div>
  );
}
