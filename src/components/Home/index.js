import React, { useState } from 'react';
import './style.css';

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: 'The title of the book 1',
      body: 'Lorem ipsum ...',
      author: 'ahmed',
      id: 1,
    },
    {
      title: 'The title of the book 2',
      body: 'Lorem ipsum ...',
      author: 'ayoub',
      id: 2,
    },
    {
      title: 'The title of the book 3',
      body: 'Lorem ipsum ...',
      author: 'mohamed',
      id: 3,
    },
    {
      title: 'The title of the book 4',
      body: 'Lorem ipsum ...',
      author: 'mehdi',
      id: 3,
    },
  ]);

  return (
    <div className="home">
      <h1>Home Page</h1>

      {blogs.map((blog) => {
        return (
          <div className="blog-preview">
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </div>
        );
      })}

      <button>Click here</button>
    </div>
  );
};

export default Home;
