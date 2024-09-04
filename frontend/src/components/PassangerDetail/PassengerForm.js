import React, { useEffect, useState } from 'react'
import Pcard from './Pcard'
import Pform from './Pform'
export default function PassengerForm() {
 
 

  return (
    <div>
    <div className="container-fluid">
        <div className="row">
            <div className="col-9">
             <div className="container">
                <Pcard/>
             </div>
             
             <div className="container">
             <hr />
            <div className="container-fluid bg-warning-subtle " style={{borderLeft:"0.5rem solid darkorange"}}>
                <ul className='p-3 fw-medium'>
                    <li>Note: Please Submit full name of the passenger insted of initials.</li>
                    <li>Note: The ID card will be required journey.</li>
                </ul>
            </div>
             <h3 className="fw-bold m-2">Passenger Details</h3>
                <Pform/>
             </div>
            </div>
            <div className="col-3">
           
                <div className="container-fluid  d-flex flex-column me-4 ">
                    <div className="text-light p-2 shadow fw-bold" style={{backgroundColor:"darkslateblue" ,fontSize:"1.3rem"}}>
                        FARE SUMMERY
                    </div>
                    <div className='d-flex justify-content-between p-2 mt-2 ' style={{fontSize:"1.2rem"}}>
                        <span>Ticket Fare</span>
                        <span className=''>₹ 305</span>
                        
                    </div>
                    <hr />
                    <div className='d-flex bg-secondary-subtle fw-bold justify-content-between p-2 ' style={{fontSize:"1.2rem"}}>
                        <span className=''>Ticket Fare</span>
                        <span className='text-danger'>₹ 305</span>
                        
                    </div>
                    <hr />


                </div>
                <div className="container-fluid">
                    <img src="https://gumlet.assettype.com/knocksense%2F2022-09%2F8291dda3-72a3-471e-97f7-73d04496f4f9%2FScreenshot_2022_09_28_at_4_27_15_PM.png?auto=format%2Ccompress&format=webp&w=400&dpr=2.6" alt="" className='img-fluid'/>
                  
                </div>
            </div>

        </div>
    </div>
      
    </div>
  )
}
