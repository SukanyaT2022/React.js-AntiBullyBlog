import React, { useState } from 'react';
import '../App.css'
//this component do post question
const PostForm = ({onSubmit}) => {
    //onSubmit come from question.js line 34--function inside{} from child
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit =(e)=>{
e.preventDefault()
onSubmit({title,content,comments : []})
setTitle('')
setContent('')

  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='controlPostForm'>
        <label>
          Title :
          <input type="text" value={title} onChange={handleTitleChange} className='' />
        </label>

        <br />
<div className='mt-5'>
        <label>
          Content :
          <textarea value={content} onChange={handleContentChange} />
        </label>
        </div>
        <br/>
        <button type="submit" className='bg-red-200 mt-5'>Create Post</button>
      </form>
    </div>
  );
};

export default PostForm;
