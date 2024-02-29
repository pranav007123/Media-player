import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { uploadVideoAPI } from '../services/allAPI';


function Add({setUploadVideoResponse}) {

  const [uploadVideo, setUploadVideo,] = useState({ caption: "", imageURL: "", youtubeLink: "" })


  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setUploadVideo({ ...uploadVideo, caption: "", imageURL: "", youtubeLink: "" })
  }
  const handleShow = () => setShow(true);
  console.log(uploadVideo);

  const getYoutubeEmbedLink = (link) => {
    if (link.includes("v=")) {
      let VideoId = link.split("v=")[1].slice(0, 11)
      setUploadVideo({ ...uploadVideo, youtubeLink: `https://www.youtube.com/embed/${VideoId}` })
    } else {
      setUploadVideo({ ...uploadVideo, youtubeLink: "" })
      alert("Input Proper youtube link!!!")
    }
  }

  const handleUpload = async () => {
    // store and upload  in localhost
    const { caption, imageURL, youtubeLink } = uploadVideo
    if (caption && imageURL && youtubeLink) {
      const result = await uploadVideoAPI(uploadVideo)

      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        alert(`Video'${result.data.caption}'uploaded successfully`)
        setUploadVideoResponse(result.data)
        handleClose()
      } else {
        alert("API call failed")
      }
    } else {
      alert("plz fill form completely!!!")
    }
  }

  return (
    <>
      <div className="d-flex align-items-center">
        <h5>Upload a video</h5>
        <button onClick={handleShow} className='btn btn-secondary rounded ms-2'><i className="fa-solid fa-plus"></i></button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the form</p>
          <div className="border rounded border-secondary p-3">
            <FloatingLabel controlId='floatingInputCaption' label='Video Caption' className='mb-3' >
              <Form.Control value={uploadVideo.caption0} type='text' placeholder='Video Caption' onChange={e => setUploadVideo({ ...uploadVideo, caption: e.target.value })}></Form.Control>
            </FloatingLabel>
            <FloatingLabel controlId='floatingInputImg' label='Image Url' className='mb-3' >
              <Form.Control value={uploadVideo.imageURL} onChange={e => setUploadVideo({ ...uploadVideo, imageURL: e.target.value })} type='text' placeholder='Image Url'></Form.Control>
            </FloatingLabel>
            <FloatingLabel controlId='floatingInputLink' label='Youtube Video Link' className='mb-3' >
              <Form.Control value={uploadVideo.youtubeLink} onChange={e => getYoutubeEmbedLink(e.target.value)} type='text' placeholder='Youtube Video Link'></Form.Control>
            </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="info" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add