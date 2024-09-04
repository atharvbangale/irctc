import React, { useState } from 'react';
import {Link} from 'react-router-dom'; 
import axios from 'axios';
function Pform() {

  const handleSubmit = async (event) => {
    
    try {      
      const response = await axios.post('http://localhost:3002/api/travelers', travelers);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const [travelers, setTravelers] = useState([{ name: '', age: '', gender: '' }]);

  const handleAddTraveler = () => {
    const newTravelers = [...travelers, { name: '', age: '', gender: '' }];
    setTravelers(newTravelers);
  };

  const handleRemoveTraveler = (index) => {
    const newTravelers = [...travelers];
    newTravelers.splice(index, 1);
    setTravelers(newTravelers);
  };

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const newTravelers = [...travelers];
    newTravelers[index][name] = value;
    setTravelers(newTravelers);
  };

  


  return (
    <form  className='form  mb-5'>
    
      {travelers.map((traveler, index) => (
        <div key={index} className='container-fluid p-5 shadow mt-4'>
          <label className='me-4'>
            Name:
            <input
              type="text"
              name="name"
              value={traveler.name}
              placeholder='Enter Name'
              className='form-control '
              onChange={(event) => handleInputChange(event, index)}
            />
          </label>
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={traveler.age}
              className='form-control'
                placeholder='Enter Age'
              onChange={(event) => handleInputChange(event, index)}
            />
          </label>
          <label>
            Gender:
            <select
              name="gender"
              value={traveler.gender}
              className='form-select ms-4'
              onChange={(event) => handleInputChange(event, index)}
            >
              <option value="" className=''>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
          {index > 0 && (
            <button type="button" className=' btn btn ms-5 text-light rounded-0 shadow fw-bold p-1 bg-danger' onClick={() => handleRemoveTraveler(index)}>
              Remove 
            </button>
          )}
        </div>
      ))}
      <button type="button" className='btn btn-lg text-light rounded-0 mt-4 shadow fw-bold ' style={{backgroundColor:"darkslateblue"}} onClick={handleAddTraveler}>
        Add Person
      </button>
      <Link to="/review-journey" >
      <button onClick={handleSubmit}  className='mt-4 btn btn-lg ms-3 bg-success rounded-0 shadow fw-bold text-light' >Submit</button>

      </Link>
    </form>
  );
}

export default Pform;
