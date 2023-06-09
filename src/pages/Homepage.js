import React from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {MdDeleteOutline} from "react-icons/md"
import { connect } from 'react-redux';
import { fetchReviews, deleteReview } from '../store/actions';

const Homepage = () => {
  const { loading, error, data, setData } = useFetch('http://localhost:1337/api/reviews')
  const navigate = useNavigate();

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :</p>

  console.log(data)

  function handleDelete(id) {
    fetch(`http://localhost:1337/api/reviews/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        const delData = data.filter(review => review.id !== id);
        setData(delData);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    alert('Review has been deleted.');
    window.location.reload();
  }


  function AddReview() {
    navigate('/addreview');
  }

  return (
    <div>
      <button onClick={AddReview}>Add Review</button>
      {data.map((review) => (
        <div key={review.id} className="review-card">
          <div className="rating">{review.attributes.rating}</div>
          <h2>{review.attributes.title} &nbsp;
          <MdDeleteOutline onClick={() => handleDelete(review.id)}/>
          </h2>
          <p>{review.attributes.body.substring(0, 200)}...</p>
          <Link to={`/details/${review.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    reviews: state.reviews.data,
    loading: state.reviews.loading,
    error: state.reviews.error,
  };
};

export default connect(mapStateToProps, { fetchReviews, deleteReview })(Homepage);





// import React from 'react'
// import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
// import {MdDeleteOutline} from "react-icons/md"
// import { connect } from 'react-redux';
// import { fetchReviews, deleteReview } from '../store/actions';
// import { useQuery,gql } from '@apollo/client'

// const REVIEWS = gql`
// query GetReviews{
//   reviews{
//     data{
//       id,
//       attributes{
//         title,
//         rating,
//         body
//       }
//     }
//   }
// }
// `

// const Homepage = () => {
//   const { loading, error, data, setData } = useQuery(REVIEWS)
//   const navigate = useNavigate();

//   if (loading) return <p>Loading...</p>
//   if (error) return <p>Error :</p>

//   console.log(data)

//   function handleDelete(id) {
//     fetch(`http://localhost:1337/api/reviews/${id}`, {
//       method: 'DELETE'
//     })
//       .then(() => {
//         const delData = data.filter(review => review.id !== id);
//         setData(delData);
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//     alert('Review has been deleted.');
//     window.location.reload();
//   }


//   function AddReview() {
//     navigate('/addreview');
//   }

//   return (
//     <div>
//       <button onClick={AddReview}>Add Review</button>
//       {data.reviews.map((review) => (
//         <div key={review.id} className="review-card">
//           <div className="rating">{review.rating}</div>
//           <h2>{review.title} &nbsp;
//           <MdDeleteOutline onClick={() => handleDelete(review.id)}/>
//           </h2>
//           <p>{review.attributes.body.substring(0, 200)}...</p>
//           <Link to={`/details/${review.id}`}>Read more</Link>
//         </div>
//       ))}
//     </div>
//   )
// }
// const mapStateToProps = (state) => {
//   return {
//     reviews: state.reviews.data,
//     loading: state.reviews.loading,
//     error: state.reviews.error,
//   };
// };

// export default connect(mapStateToProps, { fetchReviews, deleteReview })(Homepage);