import React, { useEffect, useState } from 'react'
import Rpath from './Rpath'
import { Link } from 'react-router-dom'
import axios from 'axios'
export default function Review() {
    const [id, setID] = useState('');
    const [trainName, settrainName] = useState('')
    const [trainNo, settrainNo] = useState('')
    const [source, setsource] = useState('')
    const [destination, setdestination] = useState('')
    const [departureTime, setdepartureTime] = useState('')
    const [arrivalTime, setarrivalTime] = useState('')

    const [traveler_data, setTravelerData] = useState([]);
    async function fetchTravelers() {
        try {

            const response = await axios.get('http://localhost:3002/api/get_travelers');
            console.log(response.data);
            setTravelerData(response.data)
        } catch (error) {
            console.error(error);
        }
    }

    const length = traveler_data.length;
 


    fetchTravelers();

    const handleDeleteAll = async () => {
        try {
            const response = await axios.delete('http://localhost:3002/api/delete_travelers');
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };




    useEffect(() => {
        setID(localStorage.getItem('train_id'));

    }, [])

    const getTrainById = async (id) => {
        try {
            const response = await axios.get(`http://localhost:3002/api/get_train/${id}`);
            settrainName(response.data.trainName);
            settrainNo(response.data.trainNo);
            setsource(response.data.source);
            setdestination(response.data.destination);

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

            <Rpath />
            <div className="row m-4 mb-5">
                <div className="container col-9  ">
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
                            <div className='d-flex mt-5 flex-column overflow-y-scroll w-100' style={{ maxHeight: "10rem" }}>
                                {
                                    traveler_data.map((item) => (
                                        <div className='fw-bold' style={{ fontSize: "1.4rem" }}>
                                            <span>{item.name}</span>
                                            <span className='ms-4'>{item.age}</span>
                                            <span className='ms-4'>{item.gender}</span>
                                        </div>

                                    ))
                                }

                            </div>
                            <div>


                            </div>

                        </div>
                    </div>
                    <div className="container-fluid d-flex align-items-center mt-4">
                        <input type="checkbox" className='form-check ' />
                        <div className='fw-bold ms-3'>Yes, and I am accpect <span className='text-primary' >terms & conditions</span> </div>
                    </div>
                    <div className="container-fluid mt-4">
                        <Link to="/payment" className="btn btn-success shadow-lg fw-bold font-monospace btn-lg w-25 rounded-0">Pay Online</Link>

                        <Link onClick={() => handleDeleteAll()} to="/" className="ms-4 btn btn-danger shadow-lg fw-bold font-monospace btn-lg w-25 rounded-0">cancle booking</Link>
                    </div>

                </div>
                <div className="col-3">
                    <div className="container-fluid  d-flex flex-column me-4 ">
                        <div className="text-light p-2 shadow fw-bold" style={{ backgroundColor: "darkslateblue", fontSize: "1.3rem" }}>
                            FARE SUMMERY
                        </div>
                        <div className='d-flex justify-content-between p-2 mt-2 ' style={{ fontSize: "1.2rem" }}>
                            <span>Ticket Fare</span>
                            <span className=''>₹ {305*length}</span>

                        </div>
                        <div className='d-flex justify-content-between p-2 mt-2 ' style={{ fontSize: "1.2rem" }}>
                            <span>Convenience Fee (Incl. of GST)</span>
                            <span className=''>₹ 11</span>

                        </div>
                        <div className='d-flex justify-content-between p-2 mt-2 ' style={{ fontSize: "1.2rem" }}>
                            <span>Travel Insurence (Incl. of GST)</span>
                            <span className=''>₹ 2</span>

                        </div>

                        <hr />
                        <div className='d-flex bg-secondary-subtle fw-bold justify-content-between p-2 ' style={{ fontSize: "1.2rem" }}>
                            <span className=''>Total Fare</span>
                            <span className='text-danger'>₹ {305*length + 11 + 2}</span>

                        </div>
                        <hr />


                    </div>
                    <div className="container-fluid">
                        <img src="https://gumlet.assettype.com/knocksense%2F2022-09%2F8291dda3-72a3-471e-97f7-73d04496f4f9%2FScreenshot_2022_09_28_at_4_27_15_PM.png?auto=format%2Ccompress&format=webp&w=400&dpr=2.6" alt="" className='img-fluid' />

                    </div>
                </div>

            </div>
        </div>
    )
}
