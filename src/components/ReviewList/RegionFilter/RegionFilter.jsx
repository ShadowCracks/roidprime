import React from 'react';
import './RegionFilter.css';

const RegionFilter = ({ selectedRegion, onRegionChange }) => {
  return (
    <div className="region-filter">
      {['All', 'Intl', 'US', 'UK', 'EU', 'CA', 'AU'].map((region) => (
        <button
          key={region}
          className={selectedRegion === region ? 'selected' : ''}
          onClick={() => onRegionChange(region)}
        >
          {region}
        </button>
      ))}
    </div>
  );
};

export default RegionFilter;
