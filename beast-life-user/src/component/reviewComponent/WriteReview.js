import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../style/createReview.css";

export default function WriteReview() {
  const { id } = useParams(); // Member ID from route params
  const navigate = useNavigate();
  const [review, setReview] = useState({
    description: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // Track if the review is submitted

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReview({ ...review, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      description: review.description,
      member: { id: id }, // Pass the member ID in the correct format
    };

    try {
      const response = await fetch("http://localhost:8080/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setIsSubmitted(true); // Set submitted state to true
        setTimeout(() => {
          navigate("/view-review"); // Navigate after a delay
        }, 1500); // Optional: Delay navigation for better UX
      } else {
        const errorData = await response.json();
        console.error("Failed to add review:", errorData.message);
        alert(`Error: ${errorData.message}`);
      }
    } catch (err) {
      console.error("Error:", err);
      alert("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="review-form-container">
      <h2>Write a Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="description">Review</label>
          <textarea
            id="description"
            name="description"
            value={review.description}
            onChange={handleInputChange}
            required
            placeholder="Write your review here..."
            className="form-control"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-success" disabled={isSubmitted}>
          {isSubmitted ? "Submitted" : "Submit Review"}
        </button>
      </form>
    </div>
  );
}
