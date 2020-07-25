import React from 'react';

import { useSelector } from 'react-redux';

import { Player } from '../';

import './Dashboard.scss';

const Dashboard = ({ children }) => {
  const { playerHeight } = useSelector(state => state.content);

  return (
    <div
      className="dashboard"
      data-testid="dashboard"
      style={{paddingBottom: `${playerHeight}px` }}
    >
      {children}

      <Player />
    </div>
  );
};

export default Dashboard;