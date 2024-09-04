import React from 'react'

export default function Profile() {

    



    return (
        <div>
            <div className="container mt-5 mb-5 d-flex justify-content-center align-items-center flex-column ">
                <h1 className='fw-bold text-dark'>
                    My Profile

                </h1>
                <hr />
                <div className="container shadow-lg rounded-5">
                    <div className=" d-flex justify-content-around p-5 m-5">
                        
                        <div className='rounded-5 '>
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" className='img-fluid shadow-lg'
                            style={{borderRadius:"20rem"}} width="200"  alt="" />

                        </div>
                        
                        <div className=" d-flex flex-column ms-5 ">
                            <div className='fw-bold d-flex justify-content-between'>
                                <h2>Name:</h2>
                                <h2 className='ms-5 fw-bold'>Mangesh Chate</h2>
                                

                            </div>
                            <div className='fw-bold d-flex justify-content-between'>
                                <h2>Occupation:</h2>
                                <h2 className='ms-5 fw-bold'>Student</h2>
                                

                            </div>
                            <div className='fw-bold d-flex justify-content-between'>
                                <h2>Email:</h2>
                                <h2 className='ms-5 fw-bold'>mcbhd@gmail.com</h2>
                                

                            </div>
                            <div className='fw-bold d-flex justify-content-between'>
                                <h2>Gender:</h2>
                                <h2 className='ms-5 fw-bold'>Male</h2>
                                

                            </div>
                            <div className='fw-bold d-flex justify-content-between'>
                                <h2>Mobile No.:</h2>
                                <h2 className='ms-5 fw-bold'>32847629</h2>
                                

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
