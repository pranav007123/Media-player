import React from 'react'
import { Link } from 'react-router-dom'



function Footer() {

  return (
      
    <div style={{height:'300px'}} className="container mt-5 w-100">
      <div className="footer-content d-flex justify-content-between">
<div style={{ width:'400px' }} className="media">
  <h5 className='d-flex' >Media player</h5>
<p>Designed and  built with all the love in the world by the Bootstrap team with the help of Our Contributors</p>
<span>code licensed MIT,docs CC By 3.0</span>
<span>Currently v5.3.2.</span>
</div>
<div className="links d-flex flex-column">
  <h5>Links</h5>
  <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing page</Link>
  <Link to={'/home'} style={{textDecoration:'none',color:'white'}} >Home page</Link>
  <Link to={'/watch'} style={{textDecoration:'none',color:'white'}}>watch history</Link>

</div>
<div className="guides d-flex flex-column">
  <h5>Guides</h5>
  <a href="" style={{textDecoration:'none',color:'white'}}>React js</a>
  <a href="" style={{textDecoration:'none',color:'white'}}>React Routing</a>
  <a href="" style={{textDecoration:'none',color:'white'}}>React Bootstrap</a>
</div>
<div className="contact">
  <div className="d-flex">
    <input type="text" className='form-control me-1'placeholder='Email id plz'/>
    <button className='btn btn-info'>arrow</button>
  </div>
  <div className="icons">

  </div>
</div>
      </div>
<p className='text-center mt-5'>copyright &copy; 2024 media player.built with React.</p>
    </div>


    
)



  }


  export default Footer