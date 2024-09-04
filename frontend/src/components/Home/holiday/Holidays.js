import  {useState , useEffect} from 'react'
import HolidayCard from './HolidayCard'
import axios from 'axios'
import {Link} from 'react-router-dom'
export default function Holidays() {

  const [data , setData] = useState([]);
  


  useEffect(() => {
    axios
      .get('http://localhost:3002/api/get_news')
      .then(response => {
        setData(response.data.slice(0,6));
      })
      .catch(error => {
        console.log(error);
      });
  }, [])


  return (
    <div >
      <div className="container-fluid p-5 d-flex flex-column justify-content-center align-items-center  bg-light " >
        <h1 className='fw-bold' >STAY TUNED AND UPDATE WITH US !</h1>

        <div className="container d-flex flex-wrap ">
          {
            data.map((item) => (

              <div className="">

                <HolidayCard head={item.header} detail={item.content} img={item.img} />
              </div>
            ))

          }
        </div>
        <Link to="/show-holiday" className='d-flex justify-content-center text-decoration-none text-info-emphasis ' style={{cursor:"pointer"}}>
          <span className='font-monospace fw-bold text-decoration-underline'>ReadMore</span>
          <span class="material-symbols-outlined" >arrow_forward</span>
        </Link>
      </div>
    </div>
  )
}
