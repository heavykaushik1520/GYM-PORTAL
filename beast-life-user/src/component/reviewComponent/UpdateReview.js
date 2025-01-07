import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../style/updateReview.css"

export default function UpdateReview() {
  const { id } = useParams(); // Review ID from URL
  const navigate = useNavigate();

  const [review, setReview] = useState({
    description: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch the review details by ID
  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/reviews/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch review");
        }
        const data = await response.json();
        setReview({ description: data.data.description });
      } catch (err) {
        setError("Failed to load review details");
      } finally {
        setLoading(false);
      }
    };

    fetchReview();
  }, [id]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReview({ ...review, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/api/reviews/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(review),
      });

      if (!response.ok) {
        throw new Error("Failed to update review");
      }

      alert("Review updated successfully!");
      navigate("/view-review"); 
    } catch (err) {
      setError("Failed to update review. Please try again.");
    }
  };

  if (loading) {
    return <div>Loading review details...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="update-review-container">
      <h2>Update Review</h2>
      <form onSubmit={handleSubmit} className="update-review-form">
        <div className="form-group">
          <label htmlFor="description">Review</label>
          <textarea
            id="description"
            name="description"
            value={review.description}
            onChange={handleInputChange}
            required
            placeholder="Update your review here..."
            className="form-control"
          ></textarea>
        </div>
        <button type="submit" className="btn">
          Update Review
        </button>
      </form>
    </div>
  );
  
}
