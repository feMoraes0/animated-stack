import React from 'react';
import './index.css';

// eslint-disable-next-line react/prop-types
function Cards({ id, children, className }) {
  return (
    <div id={id} className={`page-card ${className}`}>
      {children}
    </div>
  );
}

export default Cards;
