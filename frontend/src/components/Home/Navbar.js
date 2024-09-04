import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light ">
        <div className="row container-fluid">
            <div className="  col-auto  ">
                <img src="https://www.irctc.co.in/nget/assets/images/secondry-logo.png" className='navbar-brand' alt="" />
            </div>
            <div className="col-auto ">
              <div className="d-flex flex-column">
                  <div className="d-flex align-align-items-center">
                    <Link to="/login" className="nav-item ms-4 mt-2 m-1 btn  border-0 rounded-0 text-light fw-bold btn-sm" style={{backgroundColor:"darkslateblue"}}>LOGIN</Link>
                    <Link to="/registration/PersonalDetails" style={{cursor:"pointer"}} className="nav-item ms-4 mt-2 text-decoration-none text-dark m-1">REGISTER</Link>
                    <div className="nav-item ms-4 mt-2 m-1">AGENT LOGIN</div>
                    <div className="nav-item ms-4 mt-2 m-1">CONTACT US</div>
                    <div className="nav-item ms-4 mt-2 m-1">ASK DISHA</div>
                    <div className="nav-item ms-4 mt-2 m-1 btn border-0 rounded-0 bg-dark-subtle btn-sm fw-bold" >ALERTS</div>
                    <div className="nav-item ms-4 mt-2 m-1 fw-bold font-monospace">5-May-2023</div>
                    <div className="nav-item ms-4 mt-2 m-1 fw-bold text-secondary">हिंदी</div>

                  </div>
                  <div className="d-flex align-items-center">
                  <Link to="/" className="nav-item ms-4 mt-2 m-1 ms-5"><spa class="material-symbols-outlined text-secondary">home</spa></Link>
                  <div className="nav-item ms-4 mt-2 m-1 btn border-0 rounded-0 text-light fw-bold btn-sm" style={{backgroundColor:"darkslateblue"}}>IRCTC EXCLUSIVE</div>
                  
                  <Link to="/Trains" className="nav-item ms-4 mt-2 m-1 font-monospace text-decoration-none text-dark fw-bold" style={{color:"darkorange" ,borderBottom:" 2px solid darkorange"}}>TRAINS</Link>
                  <Link to="/Buses" className="nav-item ms-4 mt-2 m-1 text-decoration-none text-dark">BUSES</Link>
                  <Link to="/Flights" className="nav-item ms-4 mt-2 m-1 text-decoration-none text-dark">FLIGHTS</Link>
                  <Link to="/Hotels" className="nav-item ms-4 mt-2 m-1 text-decoration-none text-dark">HOTELS</Link>
                  <Link to="/Holidayss" className="nav-item ms-4 mt-2 m-1 text-decoration-none text-dark">HOLYDAYS</Link>
                  <div className="nav-item ms-4 mt-2 m-1">LOYALTY</div>
                  <div className="nav-item ms-4 mt-2 m-1">MEALS</div>
                  <div className="nav-item ms-4 mt-2 m-1">PROMOTIONS</div>
                  <div className="nav-item ms-4 mt-2 m-1">MORE</div>


                  

                  </div>

              </div>
            </div>
            <div className="col-auto ">
            <img src="https://www.irctc.co.in/nget/assets/images/logo.png" className='navbar-brand' alt="" />
            </div>

        </div>

      </nav>
    </div>
  )
}
