import React from 'react'
import { Link } from 'react-router-dom'
import BottomNav from '../Components/BottomNav'
import Workout from '../Components/Workout'
import './MyWorkouts.css'

function MyWorkouts() {
  return (
    <div className='myworkout-container'>
      <h4 className='heading'> My Workouts </h4>
      <Link to="selected-workout" className="workout-link"><Workout workoutName={'Shredding Upper Body'} exercises={'6 Exercises'} /></Link>
      <Link to="selected-workout" className="workout-link"><Workout workoutName={'Shredding Lower Body'} exercises={'8 Exercises'} /></Link>
      <Link to="selected-workout" className="workout-link"><Workout workoutName={'Core Workout'} exercises={'5 Exercises'} /></Link>
      <BottomNav />
    </div>
  )
}

export default MyWorkouts