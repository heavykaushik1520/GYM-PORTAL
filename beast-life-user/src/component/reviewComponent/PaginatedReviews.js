// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./paginatedReviews.css"; // CSS file for styling

// export default function PaginatedReviews() {
//   const [reviews, setReviews] = useState([]);
//   const [pageNumber, setPageNumber] = useState(0);
//   const [totalPages, setTotalPages] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const pageSize = 4; // Number of reviews per page

//   useEffect(() => {
//     fetchReviews(pageNumber);
//   }, [pageNumber]);

//   const fetchReviews = async (page) => {
//     setLoading(true);
//     setError("");
//     try {
//       const response = await axios.get(
//         `http://localhost:8080/api/reviews/paginated?page=${page}&size=${pageSize}`
//       );
//       const data = response.data.data;
//       setReviews(data.content);
//       setTotalPages(data.totalPages);
//     } catch (err) {
//       setError("Failed to fetch reviews. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleNextPage = () => {
//     if (pageNumber < totalPages - 1) {
//       setPageNumber(pageNumber + 1);
//     }
//   };

//   const handlePreviousPage = () => {
//     if (pageNumber > 0) {
//       setPageNumber(pageNumber - 1);
//     }
//   };

//   return (
//     <div className="paginated-reviews-container">
//       <h1 className="paginated-reviews-title">Reviews</h1>
//       <div className="pagination-controls">
//             <button
//               className="pagination-button"
//               onClick={handlePreviousPage}
//               disabled={pageNumber === 0}
//             >
//               Previous
//             </button>
//             <span className="page-info">
//               Page {pageNumber + 1} of {totalPages}
//             </span>
//             <button
//               className="pagination-button"
//               onClick={handleNextPage}
//               disabled={pageNumber === totalPages - 1}
//             >
//               Next
//             </button>
//           </div>
//       {loading ? (
//         <p className="loading-message">Loading...</p>
//       ) : error ? (
//         <p className="error-message">{error}</p>
//       ) : (
//         <>
//           <table className="reviews-table">
//             <thead>
//               <tr>
               
//                 <th>Description</th>
//                 <th>Member Name</th>
                
//               </tr>
//             </thead>
//             <tbody>
//               {reviews.map((review) => (
//                 <tr key={review.id}>
                  
//                   <td>{review.description}</td>
//                   <td>{review.member.name}</td>
                  
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {/* <div className="pagination-controls">
//             <button
//               className="pagination-button"
//               onClick={handlePreviousPage}
//               disabled={pageNumber === 0}
//             >
//               Previous
//             </button>
//             <span className="page-info">
//               Page {pageNumber + 1} of {totalPages}
//             </span>
//             <button
//               className="pagination-button"
//               onClick={handleNextPage}
//               disabled={pageNumber === totalPages - 1}
//             >
//               Next
//             </button>
//           </div> */}
//         </>
//       )}
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./paginatedReviews.css";

export default function PaginatedReviews() {
  const [reviews, setReviews] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const pageSize = 1; // Number of reviews per page

  useEffect(() => {
    fetchReviews(pageNumber);
  }, [pageNumber]);

  const fetchReviews = async (page) => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        `http://localhost:8080/api/reviews/paginated?page=${page}&size=${pageSize}`
      );
      const data = response.data.data;
      setReviews(data.content);
      setTotalPages(data.totalPages);
    } catch (err) {
      setError("Failed to fetch reviews. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleNextPage = () => {
    if (pageNumber < totalPages - 1) {
      setPageNumber(pageNumber + 1);
    }
  };

  const handlePreviousPage = () => {
    if (pageNumber > 0) {
      setPageNumber(pageNumber - 1);
    }
  };

  return (
    <div className="paginated-reviews-container">
      <h1 className="paginated-reviews-title">Reviews</h1>

      <div className="pagination-controls">
        <button
          className="pagination-button"
          onClick={handlePreviousPage}
          disabled={pageNumber === 0}
        >
          Previous
        </button>
        <span className="page-info">
          Page {pageNumber + 1} of {totalPages}
        </span>
        <button
          className="pagination-button"
          onClick={handleNextPage}
          disabled={pageNumber === totalPages - 1}
        >
          Next
        </button>
      </div>

      {loading ? (
        <p className="loading-message">Loading...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <div className="reviews-grid">
          {reviews.map((review) => (
            <div className="review-card" key={review.id}>
              <p className="review-description">{review.description}</p>
              <p className="review-member">
                <span>Member:</span> <i>{review.member.name}</i>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
