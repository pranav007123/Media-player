import React from 'react'
import { useNavigate } from 'react-router-dom'

function Landing() {
  const navigate = useNavigate()
  const handleNavigate=()=>{
navigate('/home')
  }
  return (
  <>
     <div className="container mt-5">
        <div className="header row align-items-center">
          <div className="col-lg-5">
            <h3>Welcome to <span className='text-warning'>Media PLayer</span></h3>
            <p style={{textAlign:'justify'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur sunt explicabo quisquam officiis officia reiciendis quia ipsam esse voluptates doloribus? Asperiores provident quae repellat maxime quos est itaque sunt alias!</p>
            <button onClick={handleNavigate} className='btn btn-info'>Get Started</button>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6">
            <img src="https://media1.tenor.com/m/cgALnK9T-wsAAAAC/music-record-player.gif" alt="landing image" />
          </div>
        </div>
        <div className="feature">
          <div className="text-center">
            <h3>Features</h3>
          </div>
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4"></div>
            <div className="col-lg-4"></div>
          </div>
        </div>
        <div className="video"></div>
  
      </div>
      <hr />
  </>
  ) 
}

export default Landing