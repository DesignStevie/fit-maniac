import React from 'react';
import BottomNav from '../Components/BottomNav';
import './Dashboard.css';

function Dashboard() {
  return (
    <>
    <div className="profile-header-container">
      <div className='profile-text-container'>
        <p> Welcome back, Steven!</p>
        <h4> Friday, 07 Aug</h4>
      </div>
    </div>

    <div className='whats-happening-container'>
        <h4 className='heading'>Whats happening today?</h4>
          <div className='todays-plan-container'>
            <div className='todays-plan-item'>
              <h4>Shredding Upper Body</h4>
              <p>Cardio, 6 Exercises, Cool Down</p>
            </div>
            <button className='btn-primary'> Let's Go! </button>
          </div>
    </div>

    <BottomNav />
    </>
  );
}

export default Dashboard;
