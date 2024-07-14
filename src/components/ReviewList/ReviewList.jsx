import React, { useState } from 'react';
import RegionFilter from './RegionFilter/RegionFilter';
import './ReviewList.css';

// Sample data for sources with regions
const sources = [
  { name: 'steroidify.com', score: 95.82, region: 'Intl', url: 'https://steroidify.com' },
  { name: 'steroidhub.com', score: 94.76, region: 'US', url: 'https://steroidhub.com' },
  { name: 'anabolicsource.com', score: 93.50, region: 'UK', url: 'https://anabolicsource.com' },
  { name: 'roidshop.net', score: 92.20, region: 'EU', url: 'https://roidshop.net' },
  { name: 'roidsupplier.com', score: 91.40, region: 'CA', url: 'https://roidsupplier.com' },
  // Add more sources as needed
];

/**
 * ReviewList component fetches and displays a list of review cards.
 * Allows filtering of review cards by region.
 */
const ReviewList = () => {
  const [selectedRegion, setSelectedRegion] = useState('All');

  /**
   * Handle region change by filtering sources based on the selected region.
   * 
   * @param {string} region - The selected region.
   */
  const handleRegionChange = (region) => {
    setSelectedRegion(region);
  };

  // Filter sources based on selected region
  const filteredSources = selectedRegion === 'All'
    ? sources
    : sources.filter(source => source.region === selectedRegion);

  return (
    <div className="review-list-container">
      {/* Render the RegionFilter component */}
      <RegionFilter selectedRegion={selectedRegion} onRegionChange={handleRegionChange} />
      <div className="review-list">
        {filteredSources.sort((a, b) => b.score - a.score).map((source, index) => (
          <a key={index} href={source.url} className="review-card">
            <div className="review-card-header">
              <span className="source-rank">{index + 1}</span>
              <img src={`../public/logo-${index + 1}.png`} alt="Logo" className="source-logo" />
            </div>
            <div className="source-details">
              <h3>{source.name}</h3>
              <p>Score: {source.score}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ReviewList;
