// upload video
import { commonAPI } from './commonAPI'
import { SERVER_URL } from './server_url'

//upload video -store in localhost videos
export const uploadVideoAPI = async (video) => {
    //send responses to add component
    return await commonAPI("POST", `${SERVER_URL}/videos`, video)
}

//get videoapi called by view
export const getAllVideosAPI =async()=>{
    return await commonAPI("GET", `${SERVER_URL}/videos`, "")   
}

//store watch history by videoCard to localhost3000

export const saveHistoryAPI = async (videoDetails) => {
    return await commonAPI("POST",`${SERVER_URL}/history`,videoDetails)
}

// get history to watch component to localhost history

export const getHistoryAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
}

// remove history to watch component

export const removeHistoryAPI = async (videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${videoId}`,{})
}

// remove video 
export const removeVideoAPI =async(videoId)=>{
    return await commonAPI("DELETE", `${SERVER_URL}/videos/${videoId}`,{})   
}

// save category to category component
export const addCategoryAPI = async (categoryDetails) => {
    return await commonAPI("POST",`${SERVER_URL}/category`,categoryDetails)
}

// get category to category component
export const getCategoryAPI =async()=>{
    return await commonAPI("GET", `${SERVER_URL}/category`, "")   
}

// remove category to category  
export const removeCategoryAPI =async(categoryId)=>{
    return await commonAPI("DELETE", `${SERVER_URL}/category/${categoryId}`,{})   
}

// get single video api
export const getAVideoAPI = async (videoId)=>{
 return await commonAPI("GET",`${SERVER_URL}/videos/${videoId}`,"")
}

// update Category Api
export const updatecategoryAPI = async(categoryId,updatedCategoryDetails)=>{
    return await commonAPI("PUT",`${SERVER_URL}/category/${categoryId}`,updatedCategoryDetails)
}

// get single category api
export const getSingleCategoryAPI = async (categoryId)=>{
 return await commonAPI("GET",`${SERVER_URL}/category/${categoryId}`,"")
}