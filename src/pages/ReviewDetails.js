import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { connect } from 'react-redux';
import { deleteReview } from  '../store/actions';
import {AiFillEdit} from "react-icons/ai"
import { useNavigate } from 'react-router-dom';

const ReviewDetails = ({ review, deleteReview }) => {
  const { id } = useParams()
  const { loading, error, data } = useFetch('http://localhost:1337/api/reviews/' + id)
  const navigate = useNavigate()
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :</p>
 
  console.log(data)

  function handleEdit() {
    navigate(`/editreview/${id}`, { state: { data: data } });
  }

  return (
    <div className="review-card">
      <div className="rating">{data.attributes.rating}</div>
      <h2>{data.attributes.title}
      <AiFillEdit onClick={() => handleEdit(id)}/>
      </h2>
      {/* <small>console list</small> */}
      <p>{data.attributes.body}</p>
    </div>
  )
}
export default connect(null, { deleteReview })(ReviewDetails);