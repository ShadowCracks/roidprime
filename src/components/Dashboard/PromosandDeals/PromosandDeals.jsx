import React from 'react';
import './PromosAndDeals.css';

const deals = [
  { deal: 'Baboon pharma brand, 50% off. Buy TWO get ONE free' },
  // Add more deals as needed
];

const PromosAndDeals = () => {
  return (
    <div className="promos-and-deals section">
      <div className="section-header">
        <h2>Promos and Deals</h2>
        <a href="#" className="view-all">View All</a>
      </div>
      {deals.map((deal, index) => (
        <div key={index} className="deal">
          <span>{deal.deal}</span>
          <span className="replies">Replies 20</span>
          <span className="new-promo">New promo</span>
        </div>
      ))}
    </div>
  );
};

export default PromosAndDeals;
