import React from 'react';

const FinishedBanner = ({ visible }) => {
  return (visible ?
    <div className="finished-banner">
      <h2>Nominations Complete!</h2>
      <span>If you want to make changes to your list, please remove a nomination</span>
    </div>
    : null)
}

export default FinishedBanner;