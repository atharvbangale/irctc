import React from 'react'
import {Link} from 'react-router-dom'
export default function Chatbot() {
  return (
    <div className='d-flex justify-content-end mt-4' style={{position:"sticky",top:'0' ,marginBottom:"-8rem"}}>
    <Link to="/profile" className='    d-flex justify-content-center align-items-center' style={{width:"6rem" ,height:"6rem" ,border:"8px solid darkslateblue" ,borderRadius:"20rem",position:"sticky",top:'0' }}>
      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/845e8e89639683.5dfafa64beba7.gif"  className='img-fluid rounded-5' alt=""  style={{borderRadius:"20rem"}}/>
    </Link>

    </div>
  )
}
