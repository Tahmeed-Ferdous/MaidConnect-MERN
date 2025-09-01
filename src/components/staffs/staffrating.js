import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth"; // assuming useAuth is where you get user details

const StaffRating = () => {
  const { user } = useAuth();  // Get the user data (assuming `useAuth` provides user info)
  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");
  const [savedData, setSavedData] = useState([]);

  // Load saved ratings and comments from localStorage on component mount
  useEffect(() => {
    const savedRatings = JSON.parse(localStorage.getItem("ratings")) || [];
    setSavedData(savedRatings);
  }, []);

  // Function to handle the rating change
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  // Function to handle comment change
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (rating === null || !comment.trim()) {
      setMessage("Please select a rating and leave a comment!");
      return;
    }

    const newRating = {
      userName: user.name,  // Save the user's name
      rating,
      comment,
    };

    // Save the new rating and comment to localStorage
    const updatedRatings = [...savedData, newRating];
    localStorage.setItem("ratings", JSON.stringify(updatedRatings));
    setSavedData(updatedRatings);
    setMessage(`Thank you for your rating of ${rating} stars!`);
    setRating(null);  // Reset rating
    setComment("");   // Reset comment
  };

  return (
    <div>
      <h2 className="font-bold text-xl mb-4">Rate this Staff</h2>
      
      {/* Check if the user is logged in */}
      {user && user.name ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="rating" className="block text-sm font-medium mb-2">
              Rate from 1 to 5 stars:
            </label>
            <div>
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => handleRatingChange(star)}
                  className={`text-xl ${star <= rating ? "text-yellow-500" : "text-gray-300"}`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="comment" className="block text-sm font-medium mb-2">
              Leave a Comment:
            </label>
            <textarea
              id="comment"
              value={comment}
              onChange={handleCommentChange}
              placeholder="Your feedback..."
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Submit Rating
          </button>
        </form>
      ) : (
        <p className="text-red-500">You must be logged in to rate and comment.</p>
      )}

      {/* Display Confirmation Message */}
      {message && <p className="mt-4 text-green-500">{message}</p>}

      {/* Display Saved Ratings and Comments */}
      <div className="mt-10">
        <h3 className="font-bold text-xl mb-4">Previous Ratings and Comments</h3>
        {savedData.length === 0 ? (
          <p>No ratings yet.</p>
        ) : (
          savedData.map((entry, index) => (
            <div key={index} className="mb-4 p-4 border rounded-md">
              <p className="font-bold">{entry.userName}</p>
              <p>{'★'.repeat(entry.rating)}{'☆'.repeat(5 - entry.rating)}</p>
              <p>{entry.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default StaffRating;
