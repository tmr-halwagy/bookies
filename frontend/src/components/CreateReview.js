import React, { useState } from "react";
import axios from "axios";

const ReviewForm = ({ googleBooksId }) => {
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(5);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/api/reviews/",
        { google_books_id: googleBooksId, content, rating },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      alert("Review posted successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to post review.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your review here"
        required
      />
      <select value={rating} onChange={(e) => setRating(e.target.value)}>
        {[...Array(5)].map((_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1} Star{i > 0 && "s"}
          </option>
        ))}
      </select>
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
