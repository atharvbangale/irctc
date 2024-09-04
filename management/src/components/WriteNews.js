import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function WriteNews() {

    const [img  , setImg] = useState('https://i.pinimg.com/736x/a8/fd/33/a8fd33f012f4a5370f8a5b047893480d.jpg');
    const [heading , setHeading] = useState('');
    const [content , setContent] = useState('');

    const formHandler = () =>{
        alert('content publish successfully');
        axios.post('http://localhost:3002/api/add_news', {
            img: img,
            heading: heading,
            content: content
          })
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.error(error.response.data.message);
          });
          
    }

    return (
        <div className='p-5 bg-light shadow rounded-3' style={{ height: "70rem" }}>
            <h2 className='fw-bold text-info-emphasis'>Compose News</h2>
            <div className="container-fluid">
                <div className="row p-3 m-3">
                    <div className="col-6 ">
                        <form className="form" onSubmit={formHandler}>
                        <div className='mt-5'>
                            <label htmlFor="img" className='fw-bold text-info-emphasis mb-3'>
                            Paste Image Link
                            </label>
                            <input type="text" od="img" className="form-control rounded-0 shadow p-2" placeholder='paste img link' onChange={(e)=>setImg(e.target.value)} required/>

                        </div>

                        <div className='mt-4'>
                            <label htmlFor="heading" className='fw-bold text-info-emphasis mb-3'>
                            Write Heading
                            </label>
                            <input type="text" od="heading" className="form-control rounded-0 shadow p-2" placeholder='Heaing' onChange={(e)=>setHeading(e.target.value)} required/>

                        </div>

                        <div className='mt-4'>
                            <label htmlFor="head" className='fw-bold text-info-emphasis mb-3'>
                            Write Content
                            </label>
                            <textarea name="" id="head" className='form-control' cols="30" rows="10" placeholder='Start Writing Your Content From here ....' onChange={(e)=>setContent(e.target.value)} required></textarea>

                        </div>
                        <div className="mt-4">
                            <button type="submit" className="btn btn-success shadow rounded-0 btn-lg">Publish</button>
                        </div>
                        </form>
                    </div>
                    <div className="col-6 ">
                        <div className="cotainer m-4 ">
                            <img src={img} alt="article img" className='img-fluid' />
                        </div>
                        <div className="container">
                            <h2 className='fw-bold text-info-emphasis'>{heading}</h2>
                        </div>
                        <div className="container  " style={{fontSize:"1.3rem"}}>
                            <p className=''>{content}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
