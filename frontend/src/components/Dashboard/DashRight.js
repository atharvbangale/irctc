import React, { useEffect, useState } from 'react'
import TrainCard from './TrainCard'
import axios from 'axios';
export default function DashRight() {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;


    const [trainSearchData, setTrainSearchData] = useState([]);
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState(formattedDate);
    const [source, setSource] = useState('');
    const [genral, setGenral] = useState('');
    const [id, setId] = useState('');


   
   

    const getData = async () => {
      try {
        const response = await axios.get(`http://localhost:3002/api/search_trains?source=${source}&destination=${destination}`);
        setTrainSearchData(response.data)
        // console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    }

       
        getData();
      
  
    
      

    useEffect(() => {
        setDestination(localStorage.getItem('destination'));
        setDate(localStorage.getItem('date'));
        setSource(localStorage.getItem('source'));
        setGenral(localStorage.getItem('genral'));
        

    }, [])

    

    
    






    return (
        <div>
            <div className="container-fluid">
                <div className="d-flex flex-column mt-3">
                    <div className='d-flex  align-items-center '>
                        <span>Results for</span>
                        <span className='fw-bold ms-2' >{source}</span>
                        <span className="material-symbols-outlined fw-bold ms-2">arrow_forward</span>
                        <span className='fw-bold ms-2'>{destination}</span>
                      
                        <span >For Quota | {genral}</span>
                    </div>

                    <div className="d-flex justify-content-between">
                        <div className="d-flex mt-3">
                            <button className="btn text-light me-2 fw-bold rounded-0 shadow" style={{ backgroundColor: "darkslateblue" }}>Sort By | Duration</button>
                            <button className="btn text-light fw-bold rounded-0 shadow" style={{ backgroundColor: "darkslateblue" }}>
                                Show Avaible Trains</button>
                        </div>


                    </div>
                    <hr />
                    <div className="container-fluid mb-5  overflow-y-scroll " style={{ height: "63rem" }}>
                        {

                            trainSearchData.map((item) => (
                                <div key={item._id} >
                                <TrainCard  trainName={item.trainName} trainNo={item.trainNo} source={item.source} destination={item.destination} departureTime={item.departureTime} arrivalTime={item.arrivalTime} id={item._id} />

                                </div>

                            ))
                        }


                    </div>
                </div>
            </div>
        </div>
    )
}
