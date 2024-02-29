import React, { useState } from 'react'
import Add from '../components/Add';
import { Link } from 'react-router-dom'
import View from '../components/View';
import Category from '../components/Category';

function Home() {
  const[uploadVideoResponse,setUploadVideoResponse]= useState("")
  const [removeCategoryVideoResponse,setremoveCategoryVideoResponse]  = useState("")
  return (
    <>
    <div className="Container d-flex justify-content-between m-5">
      <Add setUploadVideoResponse={setUploadVideoResponse}/>
      <Link to={'/Watch'}>View History</Link>
    </div>
    <div className="Container-fluid mt-5 mb-5 row">
      <div className="col-lg-6">
        <h3>All Videos</h3>
        <View uploadVideoResponse={uploadVideoResponse} setremoveCategoryVideoResponse={setremoveCategoryVideoResponse} />
      </div>
      <div className="col-lg-6 ">
        {/* <div className="d-flex justify-content-around"> */}
          <h3>All Categories</h3>
          <Category removeCategoryVideoResponse={removeCategoryVideoResponse}/>
        </div>
      </div>
    {/* </div> */}
    </>
  )
}

export default Home