import React from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const Homepage = () => {
  const { loading, error, data} = useFetch('http://localhost:1337/api/reviews')
  const navigate = useNavigate();
  
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :</p>

  console.log(data)

  function AddReview(){
    navigate('/addreview');
  }

  return (
    <div>
      
      <button onClick={AddReview}>Add Review</button>
      {data.map((review )=> (
        <div key={review.id} className="review-card">
          <div className="rating">{review.attributes.rating}</div>
          <h2>{review.attributes.title}</h2>
          
          {/* <small>console list</small> */}

          <p>{review.attributes.body.substring(0,200)}...</p>
          <Link to={`/details/${review.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  )
}