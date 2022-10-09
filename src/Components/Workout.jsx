import React from 'react'
import './Workout.css'

function Workout( {workoutName, exercises}) {
  return (
    <div className='workout-container'>
        <div className='workout-name-container'>
            <h4 className='workout-name'>{workoutName}</h4>
            <p className='exercises'>{exercises}</p>
        </div>
        <div className='workout-chevron'>
            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.65001 6.0001C6.65001 6.11676 6.63334 6.2291 6.60001 6.3371C6.56667 6.44576 6.50001 6.54176 6.40001 6.6251L1.90001 11.1501C1.75001 11.2834 1.57501 11.3501 1.37501 11.3501C1.17501 11.3501 1.00001 11.2751 0.850006 11.1251C0.716673 10.9751 0.650005 10.8001 0.650005 10.6001C0.650005 10.4001 0.716673 10.2251 0.850006 10.0751L4.92501 6.0001L0.850006 1.9001C0.700006 1.76676 0.629006 1.6001 0.637006 1.4001C0.645673 1.2001 0.716673 1.0251 0.850006 0.875097C1.00001 0.725098 1.17901 0.650097 1.38701 0.650097C1.59567 0.650097 1.76667 0.725098 1.90001 0.875097L6.40001 5.3751C6.50001 5.45843 6.56667 5.5541 6.60001 5.6621C6.63334 5.77076 6.65001 5.88343 6.65001 6.0001Z" fill="#333333"/>
            </svg>
        </div>
    </div>
  )
}

export default Workout