import React from 'react';
import './LatestComments.css';

const comments = [
  { topic: 'Forum topic >> "Blackout"', time: '25:00' },
  // Add more comments as needed
];

const LatestComments = () => {
  return (
    <div className="latest-comments section">
      <div className="section-header">
        <h2>Latest comments / Hot topics</h2>
        <a href="#" className="view-all">View All</a>
      </div>
      {comments.map((comment, index) => (
        <div key={index} className="comment">
          <span>{comment.topic}</span>
          <span className="time">{comment.time}</span>
        </div>
      ))}
    </div>
  );
};

export default LatestComments;
