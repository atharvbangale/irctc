import React, { useEffect, useState } from 'react'
import axios from 'axios'



export default function Bar() {

    const [data, setData] = useState([]);


    useEffect(() => {
        axios
            .get('http://localhost:3002/api/get_train')
            .then(response => {
                setData(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.log(error);
            });
    }, [])



    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <table className='table table-hover table-primary table-responsive table-striped '>

                        <thead>
                            <tr>
                                <th>Train No</th>
                                <th>Train Name</th>
                                <th>Source</th>
                                <th>Destination</th>
                                <th>Duration</th>
                                <th>Total Seats</th>


                            </tr>

                        </thead>
                        <tbody className='overflow-y-scroll'>
                            {
                                data.map((item) => (
                                    <tr>
                                        <td>{item.trainNo}</td>
                                        <td>{item.trainName}</td>
                                        <td>{item.source}</td>
                                        <td>{item.destination}</td>
                                        <td>{item.duration}h</td>
                                        <td>{item.totalSeats}</td>

                                    </tr>

                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
