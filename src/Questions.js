import React, { useState } from 'react'
import Post from './component/Post'
import CommentForm from './component/CommentForm'
import PostForm from './component/PostForm'
const Questions = () => {

  //post state for question or any topis to discuss
  const [posts, setPosts] = useState([])

  //this function take a comment as a argument
  // take comment and add to gether with other comments in array
    const handleCommentSubmit=(commentParameter,postIndex)=>{
const updatedPost = [...posts]
updatedPost[postIndex].comments.push(commentParameter)
  setPosts(updatedPost)
    }

    const handlePostSubmit=(postParameter)=>{
setPosts([...posts, postParameter])
    }
    
    return (
      <div>
        <h1 className='text-center'>React Post Comments</h1>
        <h2 className='text-center'>Create New Post</h2>
<PostForm onSubmit={handlePostSubmit}/>
  {posts.map((singlePost,index)=>{
    return(
<div key={index}>
<Post title={singlePost.title} content={singlePost.content} comments={singlePost.comments}/>
<CommentForm onCommentSubmit={(comment)=>handleCommentSubmit(comment,index)}/>
</div>
    )
  })}

      </div>
    )
  }

export default Questions