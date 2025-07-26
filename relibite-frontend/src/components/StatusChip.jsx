import React from 'react';
import PropTypes from 'prop-types';

const statusStyles = {
  Accepted: 'bg-accentgreen text-deepgreen',
  'Picked Up': 'bg-orange text-cream',
  Delivered: 'bg-deepgreen text-cream',
};

export default function StatusChip({ status }) {
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[status] || 'bg-gray-200 text-gray-700'}`}>{status}</span>
  );
}

StatusChip.propTypes = {
  status: PropTypes.oneOf(['Accepted', 'Picked Up', 'Delivered']).isRequired,
}; 