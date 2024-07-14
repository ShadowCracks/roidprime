import React from 'react';
import './Dashboard.css';
import LatestComments from './LatestComments/LatestComments';
import LatestSourceReview from './LatestSourceReview/LatestSourceReview';
import NewContent from './NewContent/NewContent';
import PromosAndDeals from './PromosandDeals/PromosandDeals';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <LatestComments />
      <LatestSourceReview />
      <NewContent />
      <PromosAndDeals />
    </div>
  );
};

export default Dashboard;