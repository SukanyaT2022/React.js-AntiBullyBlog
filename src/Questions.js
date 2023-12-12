import React, { useState } from 'react'
import Post from './component/Post'
import CommentForm from './component/CommentForm'

const Questions = () => {
  const[comments, setComments] =useState([])
  //post state for question or any topis to discuss
  const [posts, setPosts] = useState([])

  //this function take a comment as a argument
  // take comment and add to gether with other comments in array
    const handleCommentSubmit=(commentParameter)=>{
  setComments([...comments,commentParameter])
    }

    const handlePostSubmit=(postParameter)=>{
setPosts([...posts, postParameter])
    }
    
    return (
      <div>
        <h1>React Post Comments</h1>
  <Post 
  title='Sample title Post'
  content = 'This is Sample Question'
  comments={comments}
  />
  <CommentForm onCommentSubmit={handleCommentSubmit}/>
      </div>
    )
  }

export default Questions