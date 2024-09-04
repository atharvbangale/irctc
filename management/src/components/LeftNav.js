import React from 'react'
import {Link} from 'react-router-dom'
export default function LeftNav() {
    return (
        
            <div className="bg-light  bg-light shadow-lg rounded-3 p-5" style={{ height: "70rem" }}>
                <div className="d-flex flex-column justify-content-center align-items-center  ">
                    <Link to="/" className='d-flex mt-4 shadow p-3 rounded-5' >
                        <span className="material-symbols-outlined fw-bold text-info-emphasis" style={{fontSize:"2rem"}}>home</span>
                        
                    </Link>
                    <Link to="/trains-details" className='d-flex mt-4 shadow p-3 rounded-5' >
                        <span className="material-symbols-outlined fw-bold text-info-emphasis" style={{fontSize:"2rem"}}>train</span>
                       
                    </Link>
                    <Link to="/compose-news" className='d-flex mt-4 shadow p-3 rounded-5' >
                    <span class="material-symbols-outlined text-info-emphasis" style={{fontSize:"2rem"}}>app_registration</span>
                       
                    </Link>
                    <Link to="/show-news" className='d-flex mt-4 shadow p-3 rounded-5' >
                    <span class="material-symbols-outlined text-info-emphasis" style={{fontSize:"2rem"}}>newspaper</span>
                       
                    </Link>
                    <Link to="/passenger-detail" className='d-flex mt-4 shadow p-3 rounded-5' >
                        <span className="material-symbols-outlined fw-bold text-info-emphasis" style={{fontSize:"2rem"}}>badge</span>
                        
                    </Link>
                    <Link to="/train-table" className='d-flex mt-4 shadow p-3 rounded-5' >
                        <span className="material-symbols-outlined fw-bold text-info-emphasis" style={{fontSize:"2rem"}}>keyboard_command_key</span>
                        
                    </Link>
                    <Link to="/add-train" className='d-flex mt-4 shadow p-3 rounded-5' >
                        <span className="material-symbols-outlined fw-bold text-info-emphasis" style={{fontSize:"2rem"}}>add</span>
                        
                    </Link>
                </div>
            </div>
      
    )
}
