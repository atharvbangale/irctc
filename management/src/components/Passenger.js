import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
export default function Passenger() {

    const [data, setData] = useState([]);


    useEffect(() => {
        axios
            .get('http://localhost:3002/api/personal-details')
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
        axios.delete(`http://localhost:3002/api/personal-details/${id}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);

        });
    }

  return (
    <div className='p-5 bg-light shadow rounded-3' style={{ height: "70rem" }}>
    <h2 className='fw-bold text-info-emphasis'>Passengers Registration Details</h2>

    <div className="container">
    <div className="card mt-5">
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Mobile Number</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            data.map((item)=>(
                            <tr>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.email}</td>
                                <td>{item.gender}</td>
                                <td>{item.mobileNumber}</td>
                                <td>
                                    <a href="/passenger-detail" className='btn btn-danger rounded-0 shadow btn-sm' onClick={()=>handleDelete(item._id)}>delete</a>
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
