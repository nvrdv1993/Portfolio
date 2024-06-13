import React from 'react';
import { Link } from 'react-router-dom';
import './error.scss';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found" title="404">
        404
      </div>
      <p>Page not found. Go back to the <Link to="/">homepage</Link>.</p>
    </div>
  );
};

export default NotFound;
