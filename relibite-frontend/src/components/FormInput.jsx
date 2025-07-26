import React from 'react';
import PropTypes from 'prop-types';

export default function FormInput({
  label,
  id,
  type = 'text',
  value,
  onChange,
  error,
  className = '',
  ...props
}) {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label htmlFor={id} className="block mb-1 font-medium text-deepgreen font-poppins">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:border-deepgreen focus:ring-2 focus:ring-accentgreen outline-none transition disabled:bg-gray-100"
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      {error && (
        <span id={`${id}-error`} className="text-orange text-sm mt-1 block">
          {error}
        </span>
      )}
    </div>
  );
}

FormInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  error: PropTypes.string,
  className: PropTypes.string,
}; 