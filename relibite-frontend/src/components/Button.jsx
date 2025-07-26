import React from 'react';
import PropTypes from 'prop-types';

const base =
  'inline-flex items-center justify-center font-medium rounded-xl transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-deepgreen disabled:opacity-50 disabled:cursor-not-allowed';

const colorVariants = {
  primary: 'bg-deepgreen text-cream hover:bg-accentgreen active:scale-95',
  secondary: 'bg-orange text-cream hover:bg-deepgreen hover:text-orange active:scale-95',
  outline: 'border border-deepgreen text-deepgreen bg-cream hover:bg-deepgreen hover:text-cream',
};

export default function Button({
  children,
  variant = 'primary',
  type = 'button',
  className = '',
  loading = false,
  disabled = false,
  ...props
}) {
  return (
    <button
      type={type}
      className={`${base} ${colorVariants[variant]} px-4 py-2 text-base ${className}`}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading ? (
        <span className="animate-spin mr-2 w-4 h-4 border-2 border-t-transparent border-cream rounded-full"></span>
      ) : null}
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  type: PropTypes.string,
  className: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
}; 