import React from 'react';
import './NewContent.css';

const contents = [
  { content: 'ForeverFitBod1 >> "Blackout"' },
  // Add more contents as needed
];

const NewContent = () => {
  return (
    <div className="new-content section">
      <div className="section-header">
        <h2>New Content</h2>
        <a href="#" className="view-all">View All</a>
      </div>
      {contents.map((content, index) => (
        <div key={index} className="content">
          <span>{content.content}</span>
          <span className="ends-soon">Ends soon</span>
        </div>
      ))}
    </div>
  );
};

export default NewContent;
