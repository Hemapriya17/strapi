import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchReviews = createAsyncThunk('reviews/fetchReviews', async () => {
  const response = await axios.get('http://localhost:1337/api/reviews');
  return response.data;
});

export const deleteReview = createAsyncThunk('reviews/deleteReview', async (id) => {
  await axios.delete(`http://localhost:1337/api/reviews/${id}`);
  return id;
});

export const fetchReviewById = createAsyncThunk('reviews/fetchReviewById', async (id) => {
  const response = await axios.get(`http://localhost:1337/api/reviews/${id}`);
  return response.data;
});

export const addReview = createAsyncThunk('reviews/addReview', async (review) => {
  const response = await axios.post('http://localhost:1337/api/reviews', review);
  return response.data;
});
