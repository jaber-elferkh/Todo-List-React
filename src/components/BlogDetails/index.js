import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../useFetch/useFetch';
import './style.css';

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isPending, error } = useFetch(
    'http://localhost:8000/blogs/' + id
  );

  return (
    <div className="blogDetails">
      {isPending && <div>Loading ...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <h4>Written by {blog.author}</h4>
          <p>{blog.body}</p>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
