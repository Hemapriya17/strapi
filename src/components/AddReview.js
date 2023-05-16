import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const AddReview = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    rating: 1,
  });

  function handleSubmit(event) {
    event.preventDefault();

    fetch('http://localhost:1337/api/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(() => {
        alert('Review added successfully!');
        navigate('/');
      })
      .catch((error) => {
        console.error('Error adding review:', error);
      });
  }

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Body:
        <textarea
          name="body"
          value={formData.body}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Rating:
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
