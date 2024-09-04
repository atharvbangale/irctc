import React from 'react'

export default function Path() {
    return (
        <div>
            <div className="container d-flex mt-5 mb-5 justify-content-center p-5">
                <div className='d-flex  flex-column justify-content-center align-items-center'>
                    <div className='d-flex justify-content-center  align-items-center bg-warning fw-bold text-light' style={{ height: "5rem", width: "5rem", borderRadius: "5rem", fontSize: "2rem" }}>
                        1
                    </div>
                    <div className='fw-bold text-decoration-underline  position-absolute ' style={{ marginTop: "8rem" }}>
                        <h6>Passenger Details</h6>
                    </div>
                </div>


                <div className='w-75 d-flex flex-column justify-content-center'>
                    <div className=' bg-dark rounded-5 ' style={{ border: "2px solid grey" }}></div>

                </div>


                <div className='d-flex  flex-column justify-content-center align-items-center'>
                    <div className='d-flex justify-content-center  align-items-center bg-secondary-subtle fw-bold text-light' style={{ height: "5rem", width: "5rem", borderRadius: "5rem", fontSize: "2rem" }}>
                        2
                    </div>
                    <div className='fw-bold text-decoration-underline  position-absolute ' style={{ marginTop: "8rem" }}>
                        <h6>Review Journey</h6>
                    </div>
                </div>


                <div className='w-75 d-flex flex-column justify-content-center '>
                    <div className=' bg-dark rounded-5 ' style={{ border: "2px solid grey" }}></div>

                </div>
                <div className='d-flex  flex-column justify-content-center align-items-center'>
                    <div className='d-flex justify-content-center  align-items-center bg-secondary-subtle fw-bold text-light' style={{ height: "5rem", width: "5rem", borderRadius: "5rem", fontSize: "2rem" }}>
                        3
                    </div>
                    <div className='fw-bold text-decoration-underline  position-absolute ' style={{ marginTop: "8rem" }}>
                        <h6>Payment</h6>
                    </div>
                </div>







            </div>
            <hr />
        </div>
    )
}
