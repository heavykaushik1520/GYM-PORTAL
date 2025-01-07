import React, { useState } from "react";
import "../../style/serachByNameMember.css"

export default function SearchByName() {
  const [name, setName] = useState("");
  const [members, setMembers] = useState([]);
  const [error, setError] = useState("");
  const [showResults, setShowResults] = useState(false);
  const handleSearch = async (e) => {
    e.preventDefault();
    setError("");
    setShowResults(false);

    try {
      const response = await fetch(
        `http://localhost:8080/api/members/name?name=${name}`
      );
      if (!response.ok) {
        throw new Error("No members found");
      }
      const data = await response.json();
      setMembers(data.data);
      setShowResults(true);
    } catch (err) {
      setError(err.message);
      setMembers([]);
      setShowResults(true);
    }
  };

  return (
    <div className="search-container">
     
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search by member name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="search-input"
          required
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

    
      {showResults && (
        <div className="results-container">
          {error ? (
            <p className="error-message">{error}</p>
          ) : (
            <>
              <h3>Search Results:</h3>
              <ul>
                {members.map((member) => (
                  <li key={member.id}>
                    {member.name} - {member.email}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
}
