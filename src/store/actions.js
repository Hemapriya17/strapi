export const FETCH_REVIEWS_REQUEST = 'FETCH_REVIEWS_REQUEST';
export const FETCH_REVIEWS_SUCCESS = 'FETCH_REVIEWS_SUCCESS';
export const FETCH_REVIEWS_FAILURE = 'FETCH_REVIEWS_FAILURE';
export const DELETE_REVIEW_REQUEST = 'DELETE_REVIEW_REQUEST';
export const DELETE_REVIEW_SUCCESS = 'DELETE_REVIEW_SUCCESS';
export const DELETE_REVIEW_FAILURE = 'DELETE_REVIEW_FAILURE';

export const fetchReviewsRequest = () => ({
  type: FETCH_REVIEWS_REQUEST
});

export const fetchReviewsSuccess = (reviews) => ({
  type: FETCH_REVIEWS_SUCCESS,
  payload: reviews
});

export const fetchReviewsFailure = (error) => ({
  type: FETCH_REVIEWS_FAILURE,
  payload: error
});

export const deleteReviewRequest = () => ({
  type: DELETE_REVIEW_REQUEST
});

export const deleteReviewSuccess = (id) => ({
  type: DELETE_REVIEW_SUCCESS,
  payload: id
});

export const deleteReviewFailure = (error) => ({
  type: DELETE_REVIEW_FAILURE,
  payload: error
});

export const fetchReviews = () => {
  return (dispatch) => {
    dispatch(fetchReviewsRequest());
    return fetch('http://localhost:1337/api/reviews')
      .then((response) => response.json())
      .then((reviews) => dispatch(fetchReviewsSuccess(reviews)))
      .catch((error) => dispatch(fetchReviewsFailure(error)));
  };
};

export const deleteReview = (id) => {
  return (dispatch) => {
    dispatch(deleteReviewRequest());
    return fetch(`http://localhost:1337/api/reviews/${id}`, {
      method: 'DELETE'
    })
      .then(() => dispatch(deleteReviewSuccess(id)))
      .catch((error) => dispatch(deleteReviewFailure(error)));
  };
};
