import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const NotFound = () => {
  return (
    <div className="notFound">
      <h2>Sorry</h2>
      <p>Page cannot be found</p>
      <Link to="/">Back to the home page ...</Link>
    </div>
  );
};

export default NotFound;
