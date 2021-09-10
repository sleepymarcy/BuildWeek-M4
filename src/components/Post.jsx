import {Button} from 'react-bootstrap'
import puffer1 from '../assets/puffer1.png'
import '../css/Home.css'
import {AiOutlineLike} from 'react-icons/ai'
import {FaRegCommentDots} from 'react-icons/fa'
import {IoIosShareAlt} from 'react-icons/io'
import {RiSendPlaneFill} from 'react-icons/ri'
import {BsThreeDots} from 'react-icons/bs'
import { useState, useEffect } from 'react'


const Post = () => {
    const [posts, setPosts] = useState([]);

    const fetchposts = async () => {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM1ZDgxYTdiZTZjMTAwMTVmOWRiOWEiLCJpYXQiOjE2MzA5MTg2ODMsImV4cCI6MTYzMjEyODI4M30.z1FglsnilVoFG29tlQ4cAsplJJ3_M45A3BGoYeYrQl8",
          },
        }
      );
      let posts = await response.json();
      setPosts(posts.reverse());
    };
 console.log(posts[0]);
  
    useEffect(() => {
      fetchposts();
    }, []);
    return(
          <div className="card cards-profiles mb-3 px-3 viewed">
            <ul >
              <a href="#">
                <li className="mt-3  d-flex">
                  <div>
                    <img src={((posts[0]||{}).user ||{}).image} className="rounded-circle" />
                  </div>
                  <div className="d-flex justify-content-evenly mx-2">
                   <div> <h6>{((posts[0]||{}).user ||{}).name}</h6>
                    <p>{((posts[0]||{}).user ||{}).bio}</p></div>
                    <div>
                    <Button className=" bg-light text-dark outline-dark border-dark">+ Connect</Button>
                    </div>
                    <div className="ml-5"> <BsThreeDots /></div>
                  </div>
                </li>
              </a>
            </ul>
            <div>
             <p>{(posts[0]||{}).text}</p>
            </div>
            <hr/>
          
            <div className="icons-post d-flex justify-content-between text-muted mb-2">
                <div ><AiOutlineLike/><small className="ml-1 ">like</small></div>
                <div> <FaRegCommentDots/><small className="ml-1 ">Comment</small></div>
                <div>  <IoIosShareAlt/><small className="ml-1 ">Share</small></div>
                <div> <RiSendPlaneFill/><small className="ml-1 ">Send</small></div>  
            </div>
          </div>
          )
      
          
      
} 
export default Post 