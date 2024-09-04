import React, { useState } from 'react'
import axios from 'axios'
export default function AddTrain() {
    const [formState, setFormState] = useState({
        trainName: '',
        trainNo: '',
        source: '',
        destination: '',
        departureTime: '',
        arrivalTime: '',
        duration: '',
        totalSeats: '',
        fare: {
            acSleeper: '',
            firstClass: '',
            secondClass: '',
            thirdClass: '',
        },
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleFareChange = (event) => {
        const { name, value } = event.target;
        setFormState((prevState) => ({
            ...prevState,
            fare: {
                ...prevState.fare,
                [name]: value,
            },
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3002/api/add_train', formState);
            console.log(response.data);
            // handle success
        } catch (error) {
            console.error(error);
            // handle error
        }
    };
    return (
        <div className='p-5 bg-light shadow rounded-3' style={{ height: "70rem" }}>
            <h2 className='fw-bold text-info-emphasis'>Add Train Details to Database</h2>
            <div className="container m-5">
                <form onSubmit={handleSubmit}>
                    <div className="row mb-3">
                        <label htmlFor="trainName" className="col-sm-2 col-form-label">
                            Train Name
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="trainName"
                                name="trainName"
                                value={formState.trainName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="trainNo" className="col-sm-2 col-form-label">
                            Train Number
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="number"
                                className="form-control"
                                id="trainNo"
                                name="trainNo"
                                value={formState.trainNo}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="source" className="col-sm-2 col-form-label">
                            Source
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="source"
                                name="source"
                                value={formState.source}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="destination" className="col-sm-2 col-form-label">
                            Destination
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="destination"
                                name="destination"
                                value={formState.destination}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="departureTime" className="col-sm-2 col-form-label">
                            Departure Time
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="datetime-local"
                                className="form-control"
                                id="departureTime"
                                name="departureTime"
                                value={formState.departureTime}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="arrivalTime" className="col-sm-2 col-form-label">
                            Arrival Time
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="datetime-local"
                                className="form-control"
                                id="arrivalTime"
                                name="arrivalTime"
                                value={formState.arrivalTime}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="duration" className="col-sm-2 col-form-label">
                            Duration (in minutes)
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="number"
                                className="form-control"
                                id="duration"
                                name="duration"
                                value={formState.duration}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="totalSeats" className="col-sm-2 col-form-label">
                            Total Seats
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="number"
                                className="form-control"
                                id="totalSeats"
                                name="totalSeats"
                                value={formState.totalSeats}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="acSleeper" className="col-sm-2 col-form-label">
                            AC Sleeper Fare
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="number"
                                className="form-control"
                                id="acSleeper"
                                name="acSleeper" // add the name attribute here
                                value={formState.acSleeper}
                                onChange={handleFareChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="firstClass" className="col-sm-2 col-form-label">
                            First Class Fare
                        </label>
                        <div className="col-sm-10">
                     
                            <input
                                type="number"
                                className="form-control"
                                id="firstClass"
                                name="firstClass" //
                                value={formState.firstClass}
                                onChange={handleFareChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="secondClass" className="col-sm-2 col-form-label">
                            Second Class Fare
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="number"
                                className="form-control"
                                id="secondClass"
                                name="secondClass" //
                                value={formState.secondClass}
                                onChange={handleFareChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="thirdClass" className="col-sm-2 col-form-label">
                            Third Class Fare
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="number"
                                className="form-control"
                                id="thirdClass"
                                name="thirdClass" //
                                value={formState.thirdClass}
                                onChange={handleFareChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button type="submit" className="btn fw-bold shadow text-light me-md-2 rounded-0" style={{backgroundColor:"darkslateblue"}}>
                            Submit
                        </button>
                        <button type="reset" className="btn btn-secondary fw-bold rounded-0 shadow-lg">
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
