import React, { useEffect, useState } from 'react'
import TrainPie from './TrainPie';
import axios from 'axios'
export default function TrainCard() {

    const [data ,setData] = useState([]);
    useEffect(()=>{
        axios
        .get('http://localhost:3002/api/get_train')
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    },[])
  return (
    <div>
      <div className="container-fluid p-3 ">
        {
            data.map((item)=>(
        <div className="card container-fluid p-4 mb-4 shadow rounded-4">
            <div className="d-flex align-items-center justify-content-between">
                <h1 className='fw-bold  text-info-emphasis '>{item.trainName}</h1>
                <h4 className='fw-bold me-4 '>
                    {item.trainNo}
                </h4>
            </div>
            <div className="d-flex mt-4  align-items-center">
                <div className='me-5'>
                <h4 className='fw-bold text-info-emphasis'>Source</h4>
                    <h3 className="shadow bg-light p-4 fw-bold " style={{border:"1px solid grey"}}>{item.source}</h3>
                </div>
                <span class="material-symbols-outlined fw-bold me-5 ms-5" style={{fontSize:"4rem"}}>arrow_right_alt</span>
                <div className='me-3 ms-5 '>
                <h4 className='fw-bold text-info-emphasis'>Destination</h4>
                    <h3 className="shadow bg-light p-4 fw-bold " style={{border:"1px solid grey"}}>{item.destination}</h3>
                </div>
            </div>
            <div className="d-flex container-fluid  align-content-center " >
            
                
                     
                <TrainPie cal={item.fare.acSleeper} a={item.fare.firstClass} b={item.fare.secondClass} c={item.fare.thirdClass} col={'#FF6384'} name={"AC Sleeper"} />
          
                <TrainPie cal={item.fare.firstClass} a={item.fare.acSleeper} b={item.fare.secondClass} c={item.fare.thirdClass} col={'#32EB'} name={"First Class"}/>
                <TrainPie cal={item.fare.secondClass} a={item.fare.acSleeper} b={item.fare.firstClass} c={item.fare.thirdClass}  col={'#FFCE56'} name={"Second Class"}/>
                <TrainPie cal={item.fare.thirdClass} a={item.fare.acSleeper} b={item.fare.firstClass} c={item.fare.secondClass} col={'#00F700'} name={"Thirs Class"}/>

                       

                   


            </div>
        </div>

            ))
        }



      </div>
    </div>
  )
}
