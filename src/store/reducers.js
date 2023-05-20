import { combineReducers } from 'redux';
import {
  FETCH_REVIEWS_REQUEST,
  FETCH_REVIEWS_SUCCESS,
  FETCH_REVIEWS_FAILURE,
  DELETE_REVIEW_REQUEST,
  DELETE_REVIEW_SUCCESS,
  DELETE_REVIEW_FAILURE,
} from './actions';

const initialState = {
  loading: false,
  error: null,
  data: []
};

const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REVIEWS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_REVIEWS_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload
      };
    case FETCH_REVIEWS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case DELETE_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case DELETE_REVIEW_SUCCESS:
      return {
        loading: false,
        error: null,
        data: state.data.filter((review) => review.id !== action.payload)
      };
    case DELETE_REVIEW_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  reviews: reviewsReducer
});

export default rootReducer;
