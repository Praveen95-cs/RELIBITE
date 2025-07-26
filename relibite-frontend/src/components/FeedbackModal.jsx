import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import Button from './Button';

function Star({ filled, onClick, onMouseEnter, onMouseLeave, label }) {
  return (
    <button
      type="button"
      className="focus:outline-none"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      aria-label={label}
    >
      <svg
        className={`w-7 h-7 ${filled ? 'text-orange' : 'text-gray-300'}`}
        fill={filled ? 'currentColor' : 'none'}
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    </button>
  );
}

export default function FeedbackModal({ open, onClose, onSubmit }) {
  const [foodRating, setFoodRating] = useState(0);
  const [volunteerRating, setVolunteerRating] = useState(0);
  const [hoverFood, setHoverFood] = useState(0);
  const [hoverVolunteer, setHoverVolunteer] = useState(0);
  const [comments, setComments] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit?.({ foodRating, volunteerRating, comments });
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} title="Feedback">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <div className="font-poppins font-medium text-deepgreen mb-1">Rate Food</div>
          <div className="flex gap-1">
            {[1,2,3,4,5].map(i => (
              <Star
                key={i}
                filled={i <= (hoverFood || foodRating)}
                onClick={() => setFoodRating(i)}
                onMouseEnter={() => setHoverFood(i)}
                onMouseLeave={() => setHoverFood(0)}
                label={`Rate food ${i} star${i > 1 ? 's' : ''}`}
              />
            ))}
          </div>
        </div>
        <div>
          <div className="font-poppins font-medium text-deepgreen mb-1">Rate Volunteer</div>
          <div className="flex gap-1">
            {[1,2,3,4,5].map(i => (
              <Star
                key={i}
                filled={i <= (hoverVolunteer || volunteerRating)}
                onClick={() => setVolunteerRating(i)}
                onMouseEnter={() => setHoverVolunteer(i)}
                onMouseLeave={() => setHoverVolunteer(0)}
                label={`Rate volunteer ${i} star${i > 1 ? 's' : ''}`}
              />
            ))}
          </div>
        </div>
        <div>
          <label htmlFor="comments" className="font-poppins font-medium text-deepgreen mb-1">Comments</label>
          <textarea
            id="comments"
            className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:border-deepgreen focus:ring-2 focus:ring-accentgreen outline-none transition"
            rows={3}
            value={comments}
            onChange={e => setComments(e.target.value)}
            placeholder="Share your feedback..."
          />
        </div>
        <div className="flex gap-2 justify-end mt-2">
          <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="primary">Submit</Button>
        </div>
      </form>
    </Modal>
  );
}

FeedbackModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
}; 