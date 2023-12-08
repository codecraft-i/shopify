import React from 'react';

import './profile.css'

import ProHeader from './ProHeader';

function Profile() {
  return (
    <div className='profile-container'>
      <ProHeader />
      <div className='pro-content'>
        <h1>Dashboard</h1>
      </div>
    </div>
  );
};

export default Profile;