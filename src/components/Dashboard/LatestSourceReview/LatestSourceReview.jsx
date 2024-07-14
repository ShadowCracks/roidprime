import React from 'react';
import './LatestSourceReview.css';

const reviews = [
  { review: 'USGear is amazing. I have made 5 orders from them, their prices & Dav3891', score: '9/10' },
  // Add more reviews as needed
];

const LatestSourceReview = () => {
  return (
    <div className="latest-source-review section">
      <div className="section-header">
        <h2>Latest Source Review</h2>
        <a href="#" className="view-all">View All</a>
      </div>
      {reviews.map((review, index) => (
        <div key={index} className="review">
          <span>{review.review}</span>
          <span className="score">{review.score}</span>
        </div>
      ))}
    </div>
  );
};

export default LatestSourceReview;
