import {useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
export default function Login() {

    const [email ,setEmail ] = useState('');
    const [password ,setPassword ] = useState('');

    const handleLogin = () => {
        axios.post('http://localhost:3002/api/login', { email, password })
          .then(response => {
            console.log(response.data);
            alert('login successfull')
            // Handle successful login
          })
          .catch(error => {
            console.log(error);
            alert('login failed')
            // Handle failed login
          });
      };

  return (
    <div >
      <div className="container m-5 p-5 bg-light ">
      <div className="d-flex justify-content-between">
        <h2 className='fw-bold text-info-emphasis'>Sign Up </h2>
        <Link to="/registration/PersonalDetails" className='fw-bold text-warning-emphasis'>dont have account register here </Link>

      </div>
        <hr />
        <div className=" w-50 mt-5">
        <label htmlFor="email" className='form-label'>Enter email</label>
            <input type="email" className='form-control shadow'  placeholder='Enter Email Here' onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className=" w-50 mt-5">
        <label htmlFor="email" className='form-label'>Enter Password</label>
            <input type="password" className='form-control shadow'  placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <Link to="/" onClick={handleLogin} className="mt-4 btn-lg btn btn-success rounded-0 shadow">Login</Link>
      </div>
    </div>
  )
}
