import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export const EditReview = ({ data }) => {
  const { id } = useParams();
  const [rating, setRating] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const updateReview = async (updatedData) => {
    try {
      const response = await fetch(`http://localhost:1337/api/reviews/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        console.log('Review updated successfully');
      } else {
        console.error('Failed to update review');
      }
    } catch (error) {
      console.error('Failed to update review', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = {
      rating,
      title,
      body,
    };

    updateReview(updatedData);
    alert("Data has been Updated!!!")
  };

  return (
    <div>
      <h2>Edit Review</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="rating">Rating:</label><br />
          <input type="number" id="rating" value="10" onChange={handleRatingChange} />
        </div>
        <div>
          <label htmlFor="title">Title:</label>
          <br />
          <input type="text" 
          id="title" 
          value="Thermal Conductivity" 
          // value={title}
          onChange={handleTitleChange} />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <textarea style={{ width: "100%", minHeight: "300px" }} id="body" value="THERMAL CONDUCTIVITY USING A RADIAL METHOD AIM: To determine the Thermal conductivity of rubber using a radial flow method. APPARATUS REQUIRED: Rubber sample of known dimensions Heat source (Electrically heated wire) Thermocouples - 2 Insulation material (Fiberglass or Ceramic wool) Heater power supply Multimeter or thermometer Vernier caliper or micrometer Stopwatch or timer FORMULA: K = [{𝑊1𝐶1 + (𝑊2 - 𝑊1)𝐶2}(θ2− θ2)/2π𝑙𝑡 ] [2.302 𝑙𝑜𝑔10(𝑟2/𝑟1)/θ𝑠- ((θ1- θ2)/2)]                  .......W/m/K K – Thermal Conductivity of the given Specimen W1 – Weight of empty calorimeter & stirrer (Kg) W2 – Weight of calorimeter, stirrer & water (Kg) C1 – Specific heat capacity of calorimeter =385 (J/Kg/K) C2 - Specific heat capacity of water = 4190 (J/Kg/K)" onChange={handleBodyChange} />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};
