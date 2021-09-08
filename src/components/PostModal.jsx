import '../css/Home.css'
import puffer1 from '../assets/puffer1.png'
import { Modal, Button, Form } from 'react-bootstrap';
import {useState} from 'react'
import {BiDownArrow} from 'react-icons/bi'
import {BsImage, BsThreeDots} from 'react-icons/bs'
import {MdVideoLibrary} from 'react-icons/md'
import {GrNotes} from 'react-icons/gr'
import {FaSuitcase} from 'react-icons/fa'
import {GiPentagramRose} from 'react-icons/gi'
import{RiBuilding2Fill} from 'react-icons/ri'
import {TiWorld} from 'react-icons/ti'
  

const PostModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
       
        <div><Button variant="outline" onClick={handleShow} className="ml-3 text-center bg-light border-dark" size="lg">
                                       <small> start post</small> &emsp; &emsp; &emsp;   &emsp; &emsp; &emsp;  &emsp; &emsp;                                                      
                                       </Button></div>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title className="text-muted"> Create a post</Modal.Title>
          </Modal.Header>
          <Modal.Body> <div className="card-pic d-flex ">
                <img className="rounded-circle" src={puffer1} width={75} height={75} alt='' />
                <div><h6>vijay Kumar vemana</h6>
                <Button variant="light border-dark" size="sm">
      <TiWorld />Anyone<BiDownArrow/>
    </Button></div>
            </div>
            <Form>
  
    <input type="text" className="post-input"  placeholder="What do you want talk about?"/>
  
  </Form>


  <Button variant="outline-dark" className="border-white mt-5">Primary</Button>
            
        </Modal.Body>
          <Modal.Footer className="d-flex justify-content-between">
              <BsImage/>
              <MdVideoLibrary/>
              <GrNotes/>
              <FaSuitcase/>
              <GiPentagramRose/>
              <RiBuilding2Fill/>
              <BsThreeDots/>
              <Button variant="outline-dark" className="border-white">Anyone</Button>
            <Button variant="primary" onClick={handleClose}>
              Post
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}
export default PostModal