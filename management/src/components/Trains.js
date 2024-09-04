import React from 'react'
import TrainCard from './TrainCard'
export default function Trains() {
  return (
    <div className='p-5 bg-light shadow rounded-3 overflow-y-scroll' style={{ height: "70rem" }}>
    <h2 className='fw-bold mb-3 '>Train Details</h2>
        <TrainCard/>
    </div>
  )
}
