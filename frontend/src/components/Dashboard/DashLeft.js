import React from 'react'

export default function DashLeft() {
  return (
    <div>
      <div className="container mt-3 rounded-1 shadow h-100 bg-light">
          <div className="d-flex justify-content-between">
              <span className='fw-bold'>Refine Results</span>
              <span className='fw-bold text-warning'>Reset Filters</span>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <span className='fw-bold text-secondary-emphasis'>TRAIN TYPE</span>
            <span className="btn btn-sm bg-primary-subtle shadow">Select All</span>
          </div>
          <hr />
          <div>
          <div className='d-flex justify-content-between'>
            <div className="d-flex me-5 fw-bold">
              <input type="checkbox" name="" className='form-check me-3 shadow' id="ac_class" />
              <label htmlFor="ac_class">AC First Class (1A)</label>
            </div>

            <div className="d-flex fw-bold">
              <input type="checkbox" name="" className='form-check me-3 shadow' id="ac2_class" />
              <label htmlFor="ac3_class">AC Tire (2A)</label>
            </div>

          </div>

          <div className='d-flex justify-content-between'>
            <div className="d-flex me-5 fw-bold">
              <input type="checkbox" name="" className='form-check me-3 shadow' id="ac_class" />
              <label htmlFor="ac_class">AC 3 Tire (3A)</label>
            </div>

            <div className="d-flex fw-bold ms-4">
              <input type="checkbox" name="" className='form-check me-3 shadow' id="ac2_class" />
              <label htmlFor="ac3_class">Sleeper (SL)</label>
            </div>

          </div>
          </div>
          <hr />
          <div className="d-flex flex-column fw-bold">
            <div className='d-flex'><input type="checkbox" name="" id="other " className='form-check  me-3 shadow' /><span>Other</span></div>

            <div className='d-flex'><input type="checkbox" name="" id="other" className='form-check  me-3 shadow' /><span>RAJDHANI</span></div>
           
          </div>
          <hr />
          <div className="d-flex flex-column ">
            <span className="fw-bold">Importants Notice</span>
            <hr />
            <p className='mt-4 fw-medium text-info-emphasis mb-4'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla distinctio voluptas nam, repellat illo tempora quos, quo eaque voluptates officiis minima modi odio.
            </p>
          </div>
          <hr />
          <div className=" mt-2 mb-3">
              <span>
                <img  src="https://static.toiimg.com/thumb/imgsize-23456,msid-68004823,width-600,resizemode-4/68004823.jpg" alt="" className="ad img-fluid d-block shadow rounded-2" />
              </span>
          </div>
      </div>
    </div>
  )
}
