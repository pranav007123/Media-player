import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getHistoryAPI, removeHistoryAPI } from '../services/allAPI'

function Watch() {

  const [History, setHistory] = useState([])

  const getAllHistory = async () => {
    const result = await getHistoryAPI()
    if (result.status >= 200 && result.status < 300) {
      setHistory(result.data)
    }
  }
  useEffect(()=>{
    getAllHistory()
  })

  const deleteHistory = async (vId)=>{
    // api call
await removeHistoryAPI(vId)
getAllHistory()
  }

  return (
    <div className='container mt-5 mb-5'>
      <div className="d-flex justify-content-between">
        <h3>Watch History</h3>

        <Link to={'/home'} > Back to<i className="fa-solid fa-home"></i></Link>
      </div>
      <table className='table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Video Link</th>
            <th>Time Stamp</th>
            <th><i className="fa-solid fa-ellipsis-vertical"></i></th>
          </tr>
        </thead>
        <tbody>

          {History?.length > 0 ? History?.map((video , index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{video.caption}</td>
              <td><a href={video.youtubeLink} target='blank'>{video.youtubeLink}</a></td>
              <td>{video.timeStamp}</td>
              <td><i className="fa-solid fa-trash text-danger" onClick={()=>deleteHistory (video.id)}></i></td>
            </tr>
          ))
 :
            <div className='text-danger fw-bolder'>No watch history Available  yet!!!</div>
}


        </tbody>
      </table>

    </div>
  )
}

export default Watch