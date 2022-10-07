import React from 'react'
import Dashboard from './Pages/Dashboard'
import MySchedule from './Pages/MySchedule'
import MyWorkouts from './Pages/MyWorkouts'
import MyProfile from './Pages/MyProfile'

function App() {
    let Component
    switch (window.location.pathname){
       case "/":
        Component = Dashboard
        break
       case "/my-schedule":
        Component = MySchedule
        break
       case "/my-workouts":
        Component = MyWorkouts
        break
       case "/my-profile":
        Component = MyProfile
       break
        default:
    }
  return (
    <>
      <Component />
    </>
  )
}

export default App