import {Button} from 'react-bootstrap'
import puffer1 from '../assets/puffer1.png'
import '../css/Home.css'
import {AiOutlineLike} from 'react-icons/ai'
import {FaRegCommentDots} from 'react-icons/fa'
import {IoIosShareAlt} from 'react-icons/io'
import {RiSendPlaneFill} from 'react-icons/ri'
import { BsThreeDots } from 'react-icons/bs'
const Feed = (props) => {

    // console.log(posts[0]['user']['bi
    return(
    
  props.posts.map(post=> 
    <div key = {post._id}className="card cards-profiles mb-3 px-3 viewed">
      <ul >
        <a href="#">
          <li className="mt-3  d-flex">
            <div>
              <img src={((post||{}).user ||{}).image} className="rounded-circle" />
            </div>
            <div className="d-flex justify-content-between mx-2">
             <div> <h6>{post.username}</h6>
              <p>{((post||{}).user ||{}).bio}</p></div>
              <div>
              <Button className=" bg-light text-dark outline-dark border-dark">+ Connect</Button>
              </div>
              <div className="mx-1"> <BsThreeDots /></div>
            </div>
          </li>
        
        </a>
      </ul>
      <div>
       <p>{post.text}</p>
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

    )

    
};
export default Feed 