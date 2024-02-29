import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { removeVideoAPI, saveHistoryAPI } from '../services/allAPI';



function VideoCard({displayData,setDeleteVideoResponse,insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true);
    //get video details
    const {caption,youtubeLink} = displayData
    let timeData = new Date()
    let timeStamp = new Intl.DateTimeFormat('en-US',{
      year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'
    }).format(timeData)
    console.log(timeStamp);
    await saveHistoryAPI({caption,youtubeLink,timeStamp})
  }
// removing video
  const deleteVideo = async(Vid)=>{
    const result = await removeVideoAPI(Vid)
    setDeleteVideoResponse(result.data)
  }
  // dragging 
  const dragStarted = (e,vId)=>{
    console.log(`dragging started with video id : ${vId}`);
    e.dataTransfer.setData("videoId",vId)
  }
  return (
    <>
     <Card draggable onDragStart={(e)=>dragStarted(e,displayData?.id)} style={{ width: '18rem' }}>
      <Card.Img  onClick={handleShow} style={{cursor:'pointer', height:'150px'}} variant="top" src={displayData?.imageURL} />
      <Card.Body>
        <Card.Title className='d-flex justi'> <p>{displayData?.caption}</p> </Card.Title>
       
       { !insideCategory && <button className='btn'onClick={()=>deleteVideo(displayData?.id)}><i className="fa-solid fa-trash text-danger"></i></button>}
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="400" src={displayData?.youtubeLink} title={displayData?.caption}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default VideoCard