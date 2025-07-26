import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default function FoodCard({
  image,
  title,
  distance,
  expiry,
  donor,
  onAction,
  actionLabel = 'Request',
  className = '',
}) {
  return (
    <div className={`bg-white rounded-2xl shadow-md flex flex-col overflow-hidden ${className}`}>
      <div className="w-full h-32 bg-gray-100 flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="object-cover w-full h-full" />
        ) : (
          <span className="text-3xl">🍲</span>
        )}
      </div>
      <div className="p-4 flex flex-col gap-1 flex-1">
        <div className="font-poppins font-semibold text-deepgreen text-lg truncate">{title}</div>
        <div className="text-xs text-gray-500 flex gap-2 flex-wrap">
          {distance && <span>{distance} away</span>}
          {expiry && <span>Expires in {expiry}</span>}
        </div>
        {donor && <div className="text-xs text-gray-700 mt-1">By {donor}</div>}
        <Button variant="primary" className="w-full mt-3" onClick={onAction}>{actionLabel}</Button>
      </div>
    </div>
  );
}

FoodCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  distance: PropTypes.string,
  expiry: PropTypes.string,
  donor: PropTypes.string,
  onAction: PropTypes.func,
  actionLabel: PropTypes.string,
  className: PropTypes.string,
}; 