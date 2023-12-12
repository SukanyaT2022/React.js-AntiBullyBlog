import React, { useState } from 'react'
//this component do post question
const PostForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    
    const handleTitleChange=(e)=>{
setTitle(e.target.value)
    }

    const handleContentChange=(e)=>{
        setContent(e.target.value)
    }

  return (
    <div>
        <form>
<label>
    Title : 
    <input type='text' value={title} onChange={handleTitleChange}/>
</label>

<br/>

<label>
Content : 
<textarea value={content} onChange={handleContentChange}/>

</label>
<br/>
<button type='submit'>Create Post</button>

        </form>
    </div>
  )
}

export default PostForm