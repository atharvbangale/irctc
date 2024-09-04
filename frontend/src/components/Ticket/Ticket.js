import React, { useEffect, useState } from 'react';
import './Ticket.css';
import Service from '../Home/Service';
import Genratepdf from './Genratepdf';
import Holidays from '../Home/holiday/Holidays';

import axios from 'axios'


function Ticket() {
    const [id, setID] = useState('');
    const [trainName, settrainName] = useState('')
    const [trainNo, settrainNo] = useState('')
    const [source, setsource] = useState('')
    const [destination, setdestination] = useState('')
    const [departureTime, setdepartureTime] = useState('')
    const [arrivalTime, setarrivalTime] = useState('')
    const [genral , setGenral] = useState('');

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

    useEffect(() => {
        setID(localStorage.getItem('train_id'));

    }, [])

    

    useEffect(() => {
       
        setGenral(localStorage.getItem('genral'));
        

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
        <div className='container-fluid'>
        
            <div className="m-5 d-flex flex-column justify-content-center align-items-center">
                <h1 className='fw-bold'>Thanks For Booking ! </h1>
                <h3 className='fw-bold text-success'>-- Happy Journey --</h3>

            </div>
        <hr />
        <br />
            <div className=''>

            <div className=" ticket bg-light  container  " id="divToPrint" style={{ border: "1px solid grey" }}>
                <div className="ticket-header">
                    <div className="d-flex justify-content-between align-items-center ">
                        <div className="col-auto">
                            <img src="https://i.pinimg.com/originals/6a/72/4b/6a724b9501764fd83a4abcd37b58144d.png" alt="Indian Railways" className="logo" />
                        </div>
                        <div className="col-auto text-center">
                            <h4 className="heading fw-bold" style={{ fontSize: "2.5rem" }}>Indian Railways</h4>
                            <p className="subheading">e-Ticket</p>
                        </div>
                        <div className="col-auto text-right">
                            <h4 className="pnr">PNR: 1234567890</h4>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="ticket-body ">
                    <div className="row">
                        <div className="col-sm-8">
                            <h4 className="train-name">{trainName}</h4>
                            <p className="train-info">Train No: {trainNo} | From: {source} | To: {destination}</p>
                            <div className="row">
                                <div className="col-sm-6">
                                    <p className="date-time">Departure: {d_dateStr}, {d_timeStr}</p>
                                </div>
                                <div className="col-sm-6 text-right">
                                    <p className="date-time">Arrival: {dateStr}, {timeStr}</p>
                                </div>
                            </div>
                            <div className="row">

                                <div className="col-sm-6 ">
                                    {
                                        
                                        traveler_data.map((item)=>(
                                    <div>
                                    <span className="passenger-name"> {item.name}</span>
                                    <span className="seat-no ms-5">{length}A</span>

                                    </div>
                                        ))

                                    }
                                </div>
                               
                            </div>
                        </div>
                        <div className="col-sm-4 text-right">
                            <h4 className="fare">Fare: ₹1,500</h4>
                            <p className="class">Class: {genral}</p>
                        </div>
                    </div>
                </div>
                <div className="ticket-footer">
                    <p className="disclaimer">This ticket is booked online and no need of signature</p>
                </div>
                <hr />
            </div>

            <div className="container mt-4 mb-5">
                <Genratepdf />
            </div>
            </div>
            <Service/>
           
            <Holidays/>
        </div>
    );
}

export default Ticket;
