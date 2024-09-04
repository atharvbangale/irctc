import React from 'react'
import Piechart from './Piechart'
import Weather from './Weather'
import Bar from './Bar'

export default function Main() {




    return (
        <div className='p-5 bg-light shadow rounded-3' style={{ height: "70rem" }}>
            <h2 className='fw-bold text-info-emphasis'>Overview</h2>
            <div className="container-fluid">
                <div className="row mt-3">
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body d-flex flex-column align-items-center ">
                                <h4 className="fw-bold text-info-emphasis ">Crowded Station</h4>
                                <Piechart m={10}  p={20} d={30} c={40} />
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="fw-bold text-info-emphasis  d-flex flex-column align-items-center">Weather</h4>
                                <div><Weather /></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card d-flex flex-column justify-content-center align-items-center pt-3">
                        <h4 className="fw-bold text-info-emphasis ">Revenue Genrated</h4>
                        
                        <Piechart m={40}  p={20} d={30} c={10} />
                            

                        </div>
                    </div>

                </div>
            </div>
            <div className="container-fluid mt-3">
               <Bar/>
            </div>
        </div>
    )
}
