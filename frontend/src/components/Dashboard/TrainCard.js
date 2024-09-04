import React, { useState } from 'react'
import Modal from './Modal'
import {Link} from 'react-router-dom'

export default function TrainCard(props) {
    const d_dateTimeStr = props.departureTime;

    const d_date = new Date(d_dateTimeStr);
    const d_timeStr = d_date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    const d_dateStr = d_date.toLocaleString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '-');
    
    
    
    const dateTimeStr = props.arrivalTime;

    const date = new Date(dateTimeStr);
    const timeStr = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    const dateStr = date.toLocaleString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '-');
    

    function setID(id){
        localStorage.setItem('train_id' , id );
    }

    return (
        <div>
            <div className=" d-flex flex-column border-5 shadow p-4 mb-3" >
                <div className="d-flex bg-secondary-subtle p-2 justify-content-between align-items-center " style={{ borderLeft: "1rem solid darkslateblue" }}>
                    <span className='fw-bolder'>{props.trainName} ({props.trainNo})</span>
                    <span className='fw-bold me-4' style={{ color: "darkslateblue" }}>Train Schedule</span>
                </div>

                <div className="d-flex justify-content-between mt-2 " style={{ fontSize: "1.3rem", fontFamily: "sans-serif" }}>
                    <div>
                        <span className='fw-bold '>{d_timeStr} |</span>
                        <span>{props.source} | {d_dateStr}</span>

                    </div>
                    <div>
                        <span className='fw-bold'>{timeStr} |</span>
                        <span>{props.destination} | {dateStr}</span>

                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                    <div className='d-flex'>
                        <div className="card mt-3 me-3 shadow   col-auto bg-light">
                            <div className="card-body  d-flex flex-column justify-content-center align-items-center">
                                <h6 className='fw-bold'>Sleeper (SL)</h6>
                                <div className='text-success fw-bold'>Availble</div>
                            </div>
                        </div>

                        <div className="card mt-3 me-3 shadow rounded-0 col-auto bg-light">
                            <div className="card-body  d-flex flex-column justify-content-center align-items-center">
                                <h6 className='fw-bold'>Economy (EC)</h6>
                                <div className='text-success fw-bold'>Availble</div>
                            </div>
                        </div>

                        <div className="card mt-3  shadow rounded-0 col-auto bg-light">
                            <div className="card-body  d-flex flex-column justify-content-center align-items-center">
                                <h6 className='fw-bold'>Economy (EC)</h6>
                                <div className='text-success fw-bold'>Availble</div>
                            </div>
                        </div>

                    </div>
                    <div>

                        <div className="d-flex container-fluid  ">
                            <button onClick={()=>setID(props.id)} className='btn text-light  rounded-0 mt-3 btn-lg shadow  ' data-bs-target="#exampleModalToggle" data-bs-toggle="modal" style={{ backgroundColor: "darkslateblue", width: "15rem"  }}>Booked Now</button>
                        </div>
                    </div>

                </div>
            </div>
            <Modal/>

        

        </div>
    )
}
