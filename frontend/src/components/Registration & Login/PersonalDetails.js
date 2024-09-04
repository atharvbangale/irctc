import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
export default function PersonalDetails() {

    const [firstName, setFirstname] = useState('')
    const [middleName, setmiddleName] = useState('')
    const [lastName, setlastName] = useState('')
    const [occupation, setoccupation] = useState('')
    const [dob, setdob] = useState('')
    const [email, setemail] = useState('')
    const [gender, setgender] = useState('')
    const [imageLink, setimageLink] = useState('')
    const [mobileNumber, setmobileNumber] = useState('')
    const [password , setpassword]= useState('');
    const [cpassword , csetpassword]= useState('');


    const handleSubmit = () => {
        const data = {
            firstName,
            middleName,
            lastName,
            occupation,
            dob,
            email,
            gender,
            imageLink,
            mobileNumber,
            password
        };
        if(password === cpassword){
       
            axios.post('http://localhost:3002/api/personal-details', data)
                .then(response => {
                    console.log(response.data);
                    // Handle the response
                })
                .catch(error => {
                    console.log(error);
                    // Handle the error
                });
                alert('Registration SuccessFull !')
        }
        else{
            alert('password doesn\'t match');
        }
    }


    return (
        <div>
            <div className="container rounded-4 m-4 p-4 shadow bg-light ms-5 ">
                <h2 className='fw-bold text-info-emphasis'>Create your account</h2>
                <div className="mt-5 p-3">
                    <div className='d-flex justify-content-between'>
                        <h4 className='fw-bold text-info-emphasis'>Personal Details</h4>
                        <span className='text-warning-emphasis fw-bold text-decoration-underline'>Sign In</span>
                    </div>
                    <hr />
                    <div className='d-flex flex-column'>

                    </div>
                    <br />
                    <form action="">

                        <div className="d-flex mb-3">
                            <input type="text" placeholder='First Name' className='shadow form-control m-2 rounded-0' onChange={(e) => setFirstname(e.target.value)} />
                            <input type="text" placeholder='Middle Name' className='shadow form-control m-2 rounded-0' onChange={(e) => setmiddleName(e.target.value)} />
                            <input type="text" placeholder='Last Name' className='shadow form-control m-2 rounded-0' onChange={(e) => setlastName(e.target.value)} />

                        </div>
                        <span className='container  mb-3 text-secondary'>Info! Plese provide your exact name as per your Aadhar to avail Aadhar benefits on IRCTC eTicketing website.</span>
                        <div className="d-flex">
                        <input type="Password" className='form-control rounded-0 mb-4  p-2 m-2 shadow' placeholder='Password' onChange={(e) => setpassword(e.target.value)} />

                        <input type="Password" className='form-control mb-4 rounded-0 shadow p-2 m-2' placeholder='Confirm Password' onChange={(e) => csetpassword(e.target.value)} />

                        </div>
                        <div className="d-flex mt-4 justify-content-between align-items-center">
                            <div className='w-50'>
                                <input type="text" list="occ" className='shadow form-control m-2 rounded-0 ' placeholder='Select Occuption ' onChange={(e) => setoccupation(e.target.value)} />
                                <datalist id="occ">
                                    <option value="Goverment"></option>
                                    <option value="Public"></option>
                                    <option value="Private"></option>
                                    <option value="Professional"></option>
                                    <option value="Self Employed"></option>
                                    <option value="Student"></option>

                                </datalist>

                            </div>
                            <div>
                                <label htmlFor="date" className='form-label' >Enter date of birth</label>
                                <input type="date" placeholder='DOB' className=' shadow form-control m-2 rounded-0' onChange={(e) => setdob(e.target.value)} />

                            </div>
                        </div>
                        <div className="d-flex">
                            <input type="email" className='shadow form-control m-2 rounded-0' placeholder='Enter Email Address' onChange={(e) => setemail(e.target.value)} />
                            <input type="text" list="gender" className='shadow form-control m-2 rounded-0' placeholder='Enter Gender' onChange={(e) => setgender(e.target.value)} />
                            <datalist id="gender" className=''>
                                <option value="Male"></option>
                                <option value="Female"></option>
                                <option value="Transgender"></option>

                            </datalist>
                        </div>
                        <div className="d-flex">
                            <input type="text" placeholder='Image link for profile' className='shadow form-control m-2 rounded-0' onChange={(e) => setimageLink(e.target.value)} />
                            <input type="number" placeholder='Enter Mobile Number' className='shadow form-control m-2 rounded-0' onChange={(e) => setmobileNumber(e.target.value)} />
                        </div>
                        <div className='mt-5 d-flex justify-content-between'>
                            <Link to="/" className="btn fw-bold btn-lg rounded-0 btn-outline-dark  ">back</Link>

                            <Link  onClick={handleSubmit} className="btn btn-lg d-flex align-items-center text-light rounded-0 shadow fw-bold bg-success " > Submit
                               
                            </Link>

                        </div>

                    </form>

                </div>

            </div>
        </div>
    )
}
