import React from 'react'
import BottomNav from '../Components/BottomNav'
import MyScheduleDay from '../Components/MyScheduleDay'
import './MySchedule.css'

function MySchedule() {
  return (
    <div className='schedule-container'>
    <div className='week-container'>
      <h4>Week 1</h4>
    </div>
      <MyScheduleDay day={'Monday'} date={'01/10/2022'} />
      <MyScheduleDay day={'Tuesday'} date={'02/10/2022'} />
      <MyScheduleDay day={'Wednesday'} date={'03/10/2022'} />
      <MyScheduleDay day={'Thursday'} date={'04/10/2022'} />
      <MyScheduleDay day={'Friday'} date={'05/10/2022'} />
      <MyScheduleDay day={'Saturday'} date={'06/10/2022'} />
      <MyScheduleDay day={'Sunday'} date={'07/10/2022'} />
    <BottomNav />
    </div>
  )
}

export default MySchedule