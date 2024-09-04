import React, { useEffect, useState } from 'react'

export default function DashSearch() {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    
    
    

    // const [trainData, setTrainData] = useState([]);
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState(formattedDate);
    const [source, setSource] = useState('');
    const [genral, setGenral] = useState('');
    const [classs, setClass] = useState('');

    useEffect(()=>{
        setDestination(localStorage.getItem('destination'));
        setDate(localStorage.getItem('date'));
        setSource(localStorage.getItem('source'));
        setGenral(localStorage.getItem('genral'));
        setClass(localStorage.getItem('classs'));


    },[])

    

    function setDataStorage(destination , date , source ,genral ,classs) {


            localStorage.setItem('destination' ,destination);
            localStorage.setItem('date' ,date);
            localStorage.setItem('source' ,source);
            localStorage.setItem('genral' , genral);
            localStorage.setItem('classs' ,classs );
    
        
    }


    return (
        <div>
            <div className="">
                <div>
                    <div className="container-fluid d-flex   justify-content-center pt-4 ps-5 pe-5 " style={{ backgroundColor: "#213d77" }}>
                        <input type="text " className='form-control rounded-0  ms-4  col  ' onChange={(e)=>setSource(e.target.value)} placeholder={source} />
                        <span class="material-symbols-outlined text-light mt-2 ms-3">swap_horiz</span>
                        <input type="text " className='form-control rounded-0  ms-4  col  ' placeholder={destination} onChange={(e)=>setDestination(e.target.value)}/>
                        <input type="date" className='form-control rounded-0  ms-4  col  ' placeholder={date} onChange={(e)=>setDate(e.target.value)}/>
                        <input type="text " className='form-control rounded-0  ms-4  col  ' placeholder={classs} onChange={(e)=>setClass(e.target.value)}/>
                        <input type="text " className='form-control rounded-0  ms-4  col   ' placeholder={genral} onChange={(e)=>setGenral(e.target.value)}/>

                        <button className="btn bg-warning fw-bold text-light rounded-0 shadow  ms-4" onClick={()=>setDataStorage(destination , date , source ,genral ,classs)}>Modify Search </button>


                    </div>
                    <div className="container-fluid  ps-5 pt-4 pe-5 pb-3" style={{ backgroundColor: "#213d77" }}>
                        <div className="row  " style={{ fontFamily: "serif" }}>
                            <div className="mt-3 ms-4 col-auto d-flex justify-items-center ">
                                <input type="checkbox" className='rounded-0  bg-secondary    form-check' id="c1" style={{ width: "2rem" }} />
                                <label className='fw-bold' style={{ color: "whitesmoke" }} htmlFor="c1">Person With Disablity </label>
                            </div>

                            <div className="mt-3 ms-4 col-auto d-flex justify-items-center ">
                                <input type="checkbox" className='rounded-0  bg-secondary    form-check' id="c1" style={{ width: "2rem" }} />
                                <label className='fw-bold' style={{ color: "whitesmoke" }} htmlFor="c1">Flexible With Time </label>
                            </div>

                            <div className="mt-3 ms-4 col-auto d-flex justify-items-center ">
                                <input type="checkbox" className='rounded-0  bg-secondary    form-check' id="c1" style={{ width: "2rem" }} />
                                <label className='fw-bold' style={{ color: "whitesmoke" }} htmlFor="c1">Train With Avaible Berth </label>
                            </div>

                            <div className="mt-3 ms-4 col-auto d-flex justify-items-center ">
                                <input type="checkbox" className='rounded-0  bg-secondary    form-check' id="c1" style={{ width: "2rem" }} />
                                <label className='fw-bold' style={{ color: "whitesmoke" }} htmlFor="c1">Railway Pass Concession </label>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
