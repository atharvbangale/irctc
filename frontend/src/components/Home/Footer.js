import React from 'react'

export default function Footer() {
    return (
        <footer className='d-flex flex-column justify-content-center shadow align-items-center  '>
            <div className="fw-bold  text-light container-fluid d-flex justify-content-center align-items-center p-4 " style={{backgroundColor:"darkslateblue"}}>
                <span>Get Connected Us On</span>
            </div>
            <div className="container-fluid  text-light fw-bold ps-5 d-flex justify-content-center " style={{backgroundColor:"#2C215D"}}>
                <div className="ms-5 me-5 d-flex m-5">
                    <ul className="" type="none" >
                        <li className='m-4'>IRCTC Trains</li>
                        <li className='m-4'>Genral Information</li>
                        <li className='m-4'>Important Information</li>
                        <li className='m-4'>Agents</li>
                        <li className='m-4'>Enquiries</li>

                    </ul>
                    <ul className="" type="none">
                        <li className='m-4'>How To</li>
                        <li className='m-4'>IRCTC Official App</li>
                        <li className='m-4'>Advertise with us</li>
                        <li className='m-4'>Refund Rules</li>
                        <li className='m-4'>Person With Disability Facilities</li>


                    </ul>
                    <ul className="" type="none">
                    <li className='m-4'>IRCTC eWallet</li>
                    <li className='m-4'>IRCTC Loyalty Program</li>
                    <li className='m-4'>IRCTC-ipay Payment</li>
                    <li className='m-4'>IRCTC Zone</li>
                  
                    </ul>
                    <ul className="" type="none">
                    <li className='m-4'>For Newly Migrated Agents</li>
                    <li className='m-4'>Mobile Zone</li>
                    <li className='m-4'>Policies</li>
                    <li className='m-4'>Ask Disha ChatBot</li>
                    <li className='m-4'>About us</li>

                    </ul>
                    
                </div>
            </div>
                <div className="container-fluid bg-light p-4 d-flex  flex-column align-items-center">
                        <div className="d-flex ">
                            <img src="https://www.irctc.co.in/nget/assets/images/security.png" alt="" />
                        </div>
                </div>
        </footer>
     
    )
}
