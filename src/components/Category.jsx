
import React, { useEffect, useState } from 'react'
import { Modal, Button, FloatingLabel, Form } from 'react-bootstrap'
import { addCategoryAPI, getAVideoAPI, getCategoryAPI, removeCategoryAPI, updatecategoryAPI } from '../services/allAPI';
import VideoCard from './VideoCard';


function Category({removeCategoryVideoResponse}) {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("")
  const [allCategories, setAllCategories] = useState([])

  const handleClose = () => {
    setCategoryName("")
    setShow(false);
  }
  const handleShow = () => setShow(true);

  const handleAddCategory = async () => {
    if (categoryName) {
      await addCategoryAPI({ categoryName, allvideos: [] })
      getAllCategories()
      handleClose()
    } else {
      alert("plz fill the form completely!!!")
    }
  }

  const getAllCategories = async () => {
    const result = await getCategoryAPI()
    setAllCategories(result.data)
  }
  useEffect(() => {
    getAllCategories()
  }, [removeCategoryVideoResponse])
  // console.log(allCategories);


  const handleRemoveCategory = async (cId) => {
    await removeCategoryAPI(cId)
    getAllCategories()
  }
  // drag
  const dragOverCategory = (e) => {
    e.preventDefault()
    console.log("Dragging over Category");
  }
  const videoDropped = async (e, categoryId) => {
    const videoId = e.dataTransfer.getData("videoId")
    console.log(`Video Dropped with vId:${videoId},inside the category id:${categoryId}`);

    // get details of video id

    const { data } = await getAVideoAPI(videoId)
    console.log(data);

    // get category details where we have add the video
    let selectedCategory = allCategories.find(item=>item.id==categoryId)
    selectedCategory.allvideos.push(data)
    console.log(selectedCategory);
    await updatecategoryAPI(categoryId,selectedCategory)
    getAllCategories()
  }

  // 
  const videoDragStarted = (e,videoId,categoryId)=>{
    console.log(`drag started frm category Id:${categoryId}with video id:${videoId}`);
    let dataShare ={videoId,categoryId}
    e.dataTransfer.setData("removeVideoDetails",JSON.stringify(dataShare))

  }




  return (
    <>
      <div>
        <button onClick={handleShow} style={{ width: '60px', height: '55px' }} className='btn btn-secondary rounded-circle ms-2'><i className="fa-solid fa-plus"></i></button>

        <div className="container-fluid  mt-3">
          {
            allCategories.length > 0 ? allCategories.map((item, index) => (
              <div droppable="true" onDragOver={(e) => dragOverCategory(e)} onDrop={(e) => videoDropped(e, item?.id)} key={index} className="border rounded p-3 mb-2">
                <div className='d-flex justify-content-between'>
                  <h5>{item.categoryName}</h5>
                  <button className='btn' onClick={() => handleRemoveCategory(item.id)}><i className="fa-solid fa-trash text-danger"></i></button>
                </div>
                <div className="row mt-2">
                  {
                    item.allvideos?.length > 0 && item.allvideos?.map((video, index) => (
                      <div draggable onDragStart={e=>videoDragStarted(e,video.id,item.id)} key={index} className="col-lg-6">
                        <VideoCard insideCategory={true} displayData={video} />
                      </div>

                    ))

                  }
                </div>

              </div>
            ))
              :
              <div className="text-danger fw-bolder">NO categories are added yet!!</div>
          }
        </div>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >

          <Modal.Header closeButton>
            <Modal.Title>Add New Category Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Plz fill the form!!</p>
            <FloatingLabel
              controlId="floatingInputCaption"
              label="Category Name"
              className="mb-3"
            >
              <Form.Control value={categoryName} onChange={e => setCategoryName(e.target.value)} type="text" placeholder="Category Name" />
            </FloatingLabel>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleAddCategory}>Understood</Button>
          </Modal.Footer>
        </Modal>
      </div>

    </>
  )
}


export default Category