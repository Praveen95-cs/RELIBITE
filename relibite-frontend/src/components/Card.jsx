import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ children, className = '', ...props }) {
  return (
    <div
      className={`bg-cream rounded-2xl shadow-md p-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}; 