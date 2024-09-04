import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

export default function TrainTable() {

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

    function handleDelete(id){
        console.log(id)
        axios.delete(`http://localhost:3002/api/get_train/${id}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);

        });
    }
  return (
    <div className='p-5 bg-light shadow rounded-3' style={{ height: "70rem" }}>
    <h2 className='fw-bold text-info-emphasis'>Train Table</h2>

    <div className="container">
    <div className="card shadow mt-5 ">
                <div className="card-body">
                    <table className="table  table-hover">
                        <thead>
                            <tr>
                                <th>Train No</th>
                                <th>Train Name</th>
                                <th>Source</th>
                                <th>Destination</th>
                                <th>Duration</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            data.map((item)=>(
                            <tr>
                                <td>{item.trainNo}</td>
                                <td>{item.trainName}</td>
                                <td>{item.source}</td>
                                <td>{item.destination}</td>
                                <td>{item.duration}</td>
                                <td>
                                    <a href="/train-table" className='btn btn-danger rounded-0 shadow btn-sm' onClick={()=>handleDelete(item._id)}>delete</a>
                                </td>
                            </tr>

                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
    </div>
</div>
  )
}
