import React from 'react'
import {FaExclamation} from 'react-icons/fa'
import {Button} from 'react-bootstrap'
import puffer1 from '../assets/puffer1.png'
import '../css/Home.css'
import {BiRightArrowAlt} from 'react-icons/bi'
const Suggestions = (props) => {
    return (
        <div className="card py-3 px-3 mb-3">
            <div className="card-title">
                <div className="row">
                    <div className="col-9">
                        <h6>Add to your feed</h6>
                    </div>
                    <div className="col-3 text-right align-middle">
                        <h6><FaExclamation/></h6>
                    </div>
                </div>
            </div>
            <div className="card cards-profiles  px-3 viewed">
       
        <ul>
         
            <a href="#">
              <li className="mt-3">
                <div>
                  <img src={props.posts[0].user.image} className="rounded-circle" />
                </div>
                <div>
                  <h6>
               {props.posts[0].username}
                  </h6>
                  <p>{props.posts[0].user.bio}</p>
                  <Button >+ Connect</Button>
                </div>
              </li>
            </a>
          
        </ul>
      </div>
             
                <a className="text-info" href="#">
                    <small className="font-weight-bold text-muted">View All Recommendations <BiRightArrowAlt/></small>
                </a>
            </div>
  
    )
}
export default Suggestions 

