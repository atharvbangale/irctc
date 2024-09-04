import React from 'react'
import DashSearch from './DashSearch';
import DashLeft from './DashLeft';
import DashRight from './DashRight';

export default function DashBoard() {
  return (
    <div>
            <DashSearch/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3"><DashLeft/></div>
                    <div className="col-9"><DashRight/></div>

                </div>
            </div>      
    </div>
  )
}
