import React from 'react';
import PropTypes from 'prop-types';

export default function BenefitCard({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col items-center bg-cream rounded-2xl shadow p-6 text-center gap-3">
      <Icon className="w-10 h-10 text-orange mb-2" />
      <div className="font-poppins text-lg font-semibold text-deepgreen">{title}</div>
      <div className="text-sm text-gray-700">{description}</div>
    </div>
  );
}

BenefitCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}; 