import React, { useState } from 'react';

export const AddReview = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:1337/api/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, body, rating })
    });
    if (response.ok) {
      // do something after successful submission
      setTitle('');
      setBody('');
      setRating('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      </label>
      <br />
      <label>
        Body:
        <textarea value={body} onChange={(event) => setBody(event.target.value)} />
      </label>
      <br />
      <label>
        Rating:
        <input type="number" value={rating} onChange={(event) => setRating(event.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};