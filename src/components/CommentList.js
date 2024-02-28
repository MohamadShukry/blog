import React from 'react'

function CommentList({Comments}) {
  return (
    <>
    <h3>Comments</h3>
    {Comments && Comments.length > 0 ? (
      Comments.map((comment,i) => (
        <div className="comment" key={i}>
          <h4>{comment.postedby}</h4>
          <p>{comment.text}</p>
        </div>
      ))
    ) : (
      <p>No comments available.</p>
    )}
  </>
  )
}

export default CommentList