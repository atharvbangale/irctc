import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import {Link} from 'react-router-dom'
export default function Shownews() {
    const [cards, setCards] = useState([]);
    const [show, setShow] = useState(true);
    const [card, setCard] = useState(false);

    const [img, setImg] = useState('')
    const [heading, setHeading] = useState('')
    const [content, setContent] = useState('')
    const [newsItemId ,setId] = useState('');

    const handleShow = () => {
        setShow(false);
        setCard(true)
    }

    const handleBack = () => {
        setShow(true);
        setCard(false)
    }


    axios.delete(`http://localhost:3002/api/delete_news/${newsItemId}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);

        });






    useEffect(() => {
        axios
            .get('http://localhost:3002/api/get_news')
            .then(response => {
                setCards(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [])
    return (
        <div className='p-5 bg-light shadow rounded-3 overflow-y-scroll' style={{ height: "70rem" }}>
            <h2 className='fw-bold text-info-emphasis'>Your  Published Articles</h2>
            <div className="container-fluid mt-5 d-flex flex-wrap">
                {show &&


                    cards.map((item) => (

                        <div >
                            <div>
                                <div className="card shadow rounded-0 m-4" style={{ width: "40vh " }}  >
                                    <div style={{ height: "30vh" }}>
                                        <img src={item.img} className="card-img-top d-block img-fluid " alt="" style={{ height: "30vh" }} />

                                    </div>
                                    <div className="card-body">
                                        <h6 className="card-text fw-bold">{item.heading}</h6>
                                        <p className="text-dark-emphasis mt-3" style={{ fontSize: "15px" }}>
                                            {item.content ? item.content.split('').slice(0, 150).join("") + "..." : item.content}
                                            <span onClick={() => {
                                                setImg(item.img); setHeading(item.heading); setContent(item.content);
                                                handleShow();
                                            }} className='text-primary text-decoration-underline ms-3 fw-bold'>read more</span>

                                        </p>
                                    </div>
                                    <div className="container mb-3">
                                        <a href="/show-news" className='btn btn-sm btn-danger shadow rounded-0' onClick={()=>setId(item._id)}>Remove</a>
                                    </div>
                                </div>
                            </div>

                        </div>


                    ))
                }{card &&
                    <div className=''>
                        <span class="material-symbols-outlined fw-bold" onClick={handleBack} >arrow_back</span>
                        <div className="container-fluid d-flex flex-column justify-content-center align-items-center ">
                            <img src={img} alt="" className='img-fluid ' width="1050" />
                            <h1 className='text-info-emphasis fw-bold mt-5 mb-4'>{heading}</h1>
                            <p className=' w-75 text-center  p-1 container-fluid justify-text-align' style={{ fontSize: "1.3rem" }}>{content}</p>
                        </div>

                    </div>





                }
            </div>
        </div>
    )
}
