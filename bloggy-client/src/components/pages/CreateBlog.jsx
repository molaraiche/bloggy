import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCamera } from 'react-icons/fa';
import axios from 'axios';
import { redirect } from 'react-router-dom';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const createBlogHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('image', image);
    try {
      await axios.post(
        'https://bloggy-api-xjtx.onrender.com/api/bloggy/create',
        formData,
        {
          headers: { 'Content-Type': 'multipart/formdata' },
        }
      );

      console.log('Data has been Created !');
      setTitle('');
      setContent('');
      setImage('');
      window.location.replace('https://bloggy.mohamedlaraiche.com/');
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className='create-row'>
      <h1>Create a New Blog !</h1>
      <form onSubmit={createBlogHandler}>
        <input
          type='text'
          name='title'
          required
          id='title'
          value={title}
          placeholder='Title'
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          cols={10}
          rows={10}
          required
          name='content'
          id='content'
          placeholder='Content...'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <label htmlFor='image'>
          <FaCamera />{' '}
          {image ? <span>{image.name}</span> : <span> Upload Image</span>}
          <input
            type='file'
            name='image'
            id='image'
            className='imageInput'
            onChange={(e) => setImage(e.target.files[0])}
          />
        </label>

        <div className='btns'>
          <button type='submit'>Create</button>
          <Link to='/'>Cancel</Link>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;
