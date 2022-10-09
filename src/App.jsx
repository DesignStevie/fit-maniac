import React from 'react'
import Dashboard from './Pages/Dashboard'
import MySchedule from './Pages/MySchedule'
import MyWorkouts from './Pages/MyWorkouts'
import MyProfile from './Pages/MyProfile'
import BottomNav from './Components/BottomNav'
import SelectedWorkout from './Pages/SelectedWorkout'
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/my-schedule" element={<MySchedule />} />
            <Route path="/my-workouts" element={<MyWorkouts />}/>
            <Route path="/my-profile" element= {<MyProfile />} />
            <Route path="/my-workouts/selected-workout" element = {<SelectedWorkout />} />
        </Routes>
    </>
  )
}

export default App