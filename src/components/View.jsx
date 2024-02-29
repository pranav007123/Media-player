import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideosAPI, getSingleCategoryAPI, updatecategoryAPI } from '../services/allAPI'



function View({ uploadVideoResponse, setremoveCategoryVideoResponse }) {
  const [allvideos, setAllVideos] = useState([])

  const [deleteVideoResponse, setDeleteVideoResponse] = useState("")

  const getAllVideos = async () => {
    const result = await getAllVideosAPI()
    console.log(result);
    if (result?.status == 200) {
      setAllVideos(result?.data);

    }
  }
  useEffect(() => {
    getAllVideos()
  }, [uploadVideoResponse, deleteVideoResponse])
  console.log(allvideos);

  const dragOverView = (e) => {
    e.preventDefault()
  }

  const handleCategoryVideo = async (e) => {
    const { videoId, categoryId } = JSON.parse(e.dataTransfer.getData("removeVideoDetails"))
    console.log(`Remove Video Id :${videoId} from category Id:${categoryId}`);
    // get a category
    const { data } = await getSingleCategoryAPI(categoryId)
    console.log(data);
    const updatedVideoList = data.allvideos.filter(item => item.id != videoId)
    console.log(updatedVideoList);
    const { id, categoryName } = data
    const result = await updatecategoryAPI(categoryId, { id, categoryName, allvideos: updatedVideoList })
    setremoveCategoryVideoResponse(result.data)
  }
  return (

    <>
      <Row className='ms-1' droppable="true" onDragOver={e => dragOverView(e)} onDrop={e => handleCategoryVideo(e)} >

        {allvideos?.length > 0 ? allvideos?.map((video, index) => (
          <Col key={index} className='mb-4' sm={12} md={6} lg={4}>
            <VideoCard displayData={video} setDeleteVideoResponse={setDeleteVideoResponse} />
          </Col>
        ))
          :
          <div className='text-danger fw-bolder'>No videos uploaded yet!!!</div>
        }
      </Row>
    </>
  )
}

export default View