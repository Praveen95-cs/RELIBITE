import React from 'react';
import { Dialog } from '@headlessui/react';
import PropTypes from 'prop-types';

export default function Modal({ open, onClose, title, children, className = '' }) {
  return (
    <Dialog open={open} onClose={onClose} className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-40 transition-opacity" />
        <div className={`relative bg-cream rounded-2xl shadow-xl w-full max-w-md mx-auto p-6 z-10 ${className}`}>
          {title && <Dialog.Title className="text-lg font-poppins font-semibold mb-2">{title}</Dialog.Title>}
          {children}
        </div>
      </div>
    </Dialog>
  );
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.node,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}; 