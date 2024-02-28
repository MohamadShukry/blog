import React from 'react'
import { useState } from 'react'
import axios from 'axios'


function AddComment({articleID,onCommentUpdate}) {
const [name,setName] = useState('')
const [comment,setComment] = useState('')

const addToComment = async()=>{
const response = await axios.post(`/api/article/${articleID}/comments`,{
    postedby :name,
    text:comment
})
const {comments} = response.data;
// CommentList({comments});
onCommentUpdate(comments)
setName('');
setComment('');

}


  return (
    <div id="add-comment-form">
            <h3>Add a Comment</h3>
            <label>
                Name:
                <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    type="text" />
            </label>
            <label>
                Comment:
                <textarea
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    rows="4"
                    cols="50" />
            </label>
            <button onClick={addToComment} id='add-comment-form '>Add Comment</button>
        </div>
  )
}

export default AddComment