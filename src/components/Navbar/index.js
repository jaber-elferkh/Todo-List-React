import React from 'react';
import './style.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>The Todo-List</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create">New Blog</a>
      </div>
    </div>
  );
};

export default Navbar;
