import React from 'react'
import  {useState , useEffect} from 'react'

export default function HolidayCard(props) {



  return (
    <div>
      <div className="card shadow rounded-0 m-4" style={{ width: "40vh " }}  >
        <div style={{ height: "30vh" }}>
          <img src={props.img} className="card-img-top d-block img-fluid " alt="" style={{ height: "30vh" }} />

        </div>
        <div className="card-body">
          <h6 className="card-text fw-bold">{props.head}</h6>
          <p className="text-dark-emphasis mt-3" style={{ fontSize: "15px" }}>
            {props.detail ? props.detail.split('').slice(0, 150).join("") + "......" : props.detail}
           

          </p>
        </div>

      </div>
    </div>
  )
}
