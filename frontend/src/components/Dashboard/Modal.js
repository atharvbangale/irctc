import React from 'react'
import {Link} from 'react-router-dom'
export default function Modal() {
  return (
    <div>
          {/* model */}
          <div className="modal modal-lg fade p-3 rounded-0" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content rounded-0 p-2">
                       
                        
                        <div className="modal-body rounded-0 fw-bold  ">
                            <span>I have read the health advisory issued by my destinaon state. i acpect and shall abid by same .</span> <br />
                            <span>मैंने अब तक अपने गंतव्य राज्य द्वारा जारी स्वास्थ्य परामर्श पढ़ा है। मैं इसे स्वीकार करता हूं और इसका पालन करूंगा।</span>
                        </div>
                        <div className="d-flex">
                            <a href="/passenger-detail" className="btn  rounded-0 shadow m-2 text-light" style={{backgroundColor:"darkslateblue"}}>I Agree</a>
                            <button className='btn btn-danger shadow rounded-0 m-2' type="button"  data-bs-dismiss="modal">I dont Agree</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
