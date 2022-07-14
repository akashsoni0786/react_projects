import React from 'react'

const Reviews = (props) => {
  return (
    <div className='reviewbox'>
        <b>{props.uname} &nbsp;</b><span>{props.date}</span>
        <p>Rating : {props.rating}</p>
        <p>{props.comments}</p>
    </div>
  )
}

export default Reviews