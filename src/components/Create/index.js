import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setLoading(true);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => {
      setLoading(false);
      console.log('blog added');
      history.push('/');
    });
  };

  return (
    <div className="create">
      <h2>Create a new Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog Author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="jaber">jaber</option>
          <option value="ayoub">ayoub</option>
          <option value="mehdi">mehdi</option>
        </select>

        {!loading && <button>Add Blog</button>}
        {loading && <button>Adding Blog ...</button>}
      </form>
    </div>
  );
};

export default Create;
