import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../style/viewReview.css";

export default function ViewReview() {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  const fetchReviews = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/reviews");
      if (!response.ok) {
        throw new Error("Failed to fetch reviews.");
      }
      const data = await response.json();
      setReviews(data.data || []); // Assuming the reviews are in `data.data`
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div className="reviews-container">
      <h1 className="reviews-title">All Reviews</h1>
      {error && <p className="error-message">{error}</p>}
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <div key={review.id} className="review-item">
            <p className="review-text">"{review.description}"</p>
            <p className="review-author">
              <strong>Written by:</strong> {review.member?.name || "Anonymous"}
            </p>
            {/* Update button */}
            <Link
              to={`/update-review/${review.id}`} // Navigate to update page with review ID
              className="btn-update"
            >
              Update Review
            </Link>
          </div>
        ))
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
}
