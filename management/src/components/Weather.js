import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Weather() {
    const [dataList, setData] = useState([]);
    const [city, setCity] = useState('');
    const [temp ,setTemp] = useState('');
    const [deg ,setDeg] = useState('');
    const [speed ,setspeed] = useState('');
    const [humidity ,sethumidity] = useState('');


    useEffect(() => {

       
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ea14c78e4a781dd37037147ab356b8dc
            `)
            .then(response => {
                console.log(response.data);
                setTemp(response.data.main.temp)
                setDeg(response.data.wind.deg)
                setspeed(response.data.wind.speed)
                sethumidity(response.data.main.humidity)
            })
            .catch(error => {
                console.log(error);
            });

        axios
            .get('http://localhost:3002/api/get_train')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [city]);

    // Rest of your component code



    return (
        <div>
            <div className="container  ">
                <form className="d-flex">
                    <input type="text" name="city " className='form-control shadow rounded-0 ' list="city" placeholder='Enter City to Check Weather' id="" onChange={(e) => setCity(e.target.value)} />
                    <datalist id="city">
                        {
                            dataList.map((item) => (

                                <option value={item.source}></option>
                            ))
                        }

                    </datalist>


                </form>
            </div>
                        
            <div className="container m-3 mb-2">


                <h3 className='mt-5 d-flex text-info-emphasis  '>
                    <span class="material-symbols-outlined">apartment </span>
                    <span className='fw-bold ms-4'>{city}</span>
                </h3>
                <h3 className='mt-5 d-flex text-info-emphasis '>
                    <span class="material-symbols-outlined">device_thermostat</span>
                    <span className='fw-bold ms-4 '>{temp}&deg;</span>
                </h3>
                <h3 className='mt-5 d-flex text-info-emphasis '>
                    <span class="material-symbols-outlined">humidity_percentage</span>
                    <span className='fw-bold ms-4 '>{humidity} %</span>
                </h3>
                <h3 className='mt-5 d-flex text-info-emphasis '>
                    <span class="material-symbols-outlined">air</span>
                    <span className='fw-bold ms-4 '>
                        <span>{deg}&deg;</span>
                        <span className='ms-3'>{speed} m/s</span>

                    </span>
                </h3>

            </div>


        </div>
    )
}
