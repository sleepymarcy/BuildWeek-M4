
  
import React from 'react'
import puffer1 from '../assets/puffer1.png'
import '../css/Home.css'
import { FcStackOfPhotos} from 'react-icons/fc'
import {RiVideoFill} from 'react-icons/ri'
import {BiCalendarExclamation} from 'react-icons/bi'
import {RiArticleFill} from 'react-icons/ri'
 import {Button} from 'react-bootstrap'
import PostModal from './PostModal'
class CreatePost extends React.Component {
   
    render() {
       
        return (
            <div id="create-post" className="card">
                <div className="card-body">
                            <div className="card-title d-flex my-2">
                                    <div className="card-pic mt-1 ml-5">
                                       <img className="rounded-circle" src={puffer1} width={50} height={50} alt='' />
                                      </div>
                                      <PostModal />
                                      
                                   
                            </div>   
                            
                        <div className="row">
                            <div className="card-button  mb-1 mx-3 d-flex justify-content-between align-items-center">
                          
                                <button className="btn btn-outline btn-sm align-middle mr-3 d-flex justify-content-between align-items-center">
                                <FcStackOfPhotos/> Photo
                            </button>
                          
                                <button className="btn btn-outline btn-sm align-middle mr-1 d-flex justify-content-between align-items-center">
                                <RiVideoFill/>Video  
                            </button>
                         
                                <button className="btn btn-outline btn-sm align-middle mr-1 d-flex justify-content-between align-items-center">
                                <BiCalendarExclamation/>Event
                            </button>
                            <button className="btn btn-outline btn-sm align-middle mr-1  d-flex justify-content-between align-items-center">
                            <RiArticleFill />Write Article
                            </button>
                            </div>
                        </div>
                  
              
                </div>
               
            </div>
        )
    }
}

export default CreatePost 



