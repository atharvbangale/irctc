import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Pcard() {



    const [id, setID] = useState('');
    const [trainName, settrainName] = useState('')
    const [trainNo, settrainNo] = useState('')
    const [source, setsource] = useState('')
    const [destination, setdestination] = useState('')
    const [departureTime, setdepartureTime] = useState('')
    const [arrivalTime, setarrivalTime] = useState('')


    useEffect(() => {
        setID(localStorage.getItem('train_id'));

    }, [])

    const getTrainById = async (id) => {
        try {
            const response = await axios.get(`http://localhost:3002/api/get_train/${id}`);
            settrainName(response.data.trainName);
            settrainNo(response.data.trainNo);
            setsource(response.data.source);
            setdestination(response.data.destination)
            setdepartureTime(response.data.departureTime);
            setarrivalTime(response.data.arrivalTime);

        } catch (error) {
            console.error(error);
        }
    };
    getTrainById(id);

    const d_dateTimeStr = departureTime;

    const d_date = new Date(d_dateTimeStr);
    const d_timeStr = d_date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    const d_dateStr = d_date.toLocaleString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '-');



    const dateTimeStr = arrivalTime;

    const date = new Date(dateTimeStr);
    const timeStr = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    const dateStr = date.toLocaleString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '-');

    return (
        <div>
            <div className=" d-flex flex-column border-5 shadow p-4 mb-3" >

                <div className="d-flex bg-secondary-subtle p-2 justify-content-between align-items-center " style={{ borderLeft: "1rem solid darkslateblue" }}>
                    <span className='fw-bolder'>{trainName} ({trainNo})</span>
                    <span className='fw-bold me-4' style={{ color: "darkslateblue" }}>Train Schedule</span>
                </div>

                <div className="d-flex justify-content-between mt-2 " style={{ fontSize: "1.3rem", fontFamily: "sans-serif" }}>
                    <div>
                        <span className='fw-bold '>{d_timeStr} |</span>
                        <span>{source} | {d_dateStr}</span>

                    </div>
                    <div>
                        <span className='fw-bold'>{timeStr} |</span>
                        <span>{destination} | {dateStr}</span>

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
                            <button className='btn text-success  rounded-0 mt-3 fw-bold   ' style={{ width: "15rem", fontSize: "1.5rem" }}>Availble</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
