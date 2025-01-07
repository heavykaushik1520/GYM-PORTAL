import React, { useState } from "react";

export default function SearchByTrainerName() {
  const [name, setName] = useState("");
  const [trainers, setTrainers] = useState([]);
  const [error, setError] = useState("");
  const [showResults, setShowResults] = useState(false);
  const handleSearch = async (e) => {
    e.preventDefault();
    setError("");
    setShowResults(false);

    try {
      const response = await fetch(
        `http://localhost:8080/api/trainers/name?name=${name}`
      );

      if (!response.ok) {
        throw new Error("No trainers found");
      }

      const data = await response.json();
      setTrainers(data.data);
      setShowResults(true);
    } catch (err) {
      setError("Failed to fetch trainers");
      setTrainers([]);
      setShowResults(true);
    }
  };

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search by trainer name"
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
                {trainers.map((trainer) => (
                  <li key={trainer.id}>
                    <span>Name : </span>
                    {trainer.name}
                    <br />
                    <span>Phone : </span>
                    {trainer.phoneNumber}
                    <br />
                    <span>Experience : </span>
                    {trainer.experience}
                    <br />
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
