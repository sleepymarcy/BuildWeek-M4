import "../css/Home.css";
import puffer1 from "../assets/puffer1.png";
import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { BiDownArrow } from "react-icons/bi";
import { BsImage, BsThreeDots } from "react-icons/bs";
import { MdVideoLibrary } from "react-icons/md";
import { GrNotes } from "react-icons/gr";
import { FaSuitcase } from "react-icons/fa";
import { GiPentagramRose } from "react-icons/gi";
import { RiBuilding2Fill } from "react-icons/ri";
import { TiWorld } from "react-icons/ti";


const PostModal = ({profiles}) => {

// {sjhdfkljalfk}
const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [post, setPost] = useState({
    text: "",
   
  });
  const handleInput = (e) => {
    setPost({
      text: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "POST",
          body: JSON.stringify(post),
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM1ZDgxYTdiZTZjMTAwMTVmOWRiOWEiLCJpYXQiOjE2MzA5MTg2ODMsImV4cCI6MTYzMjEyODI4M30.z1FglsnilVoFG29tlQ4cAsplJJ3_M45A3BGoYeYrQl8",
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        alert("Your post was saved correctly!");

        setPost({
        text: "",
        });
      } else {
        alert("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <Button
          variant="outline"
          onClick={handleShow}
          className="text-center bg-light border-dark"
          size="lg"
        >
          <small> start post</small> &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
          &emsp; &emsp;
        </Button>
      </div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title className="text-muted"> Create a post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <div className="card-pic d-flex ">
            <img
              className="rounded-circle"
              src={profiles.image}
              width={50}
              height={50}
              alt=""
            />
            <div>
              <h6>{profiles.name+" "+profiles.surname}</h6>
              <Button variant="light border-dark" size="sm">
                <TiWorld />
                Anyone
                <BiDownArrow />
              </Button>
            </div>
          </div>
          <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 mt-3">
                   
                    <Form.Control
                      className="border-white out-line-0"
                      type="text"
                      onChange={(e) => handleInput(e)}
                    />
                  </Form.Group>
          </Form>
          {/* <Button variant="outline-dark" className="border-white mt-5">
           Add Hastag
          </Button> */}
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <BsImage />
          <MdVideoLibrary />
          <GrNotes />
          <FaSuitcase />
          <GiPentagramRose />
          <RiBuilding2Fill />
          <BsThreeDots />
          {/* <Button variant="outline-dark" className="border-white">
            Anyone
          </Button> */}
          <Button variant="primary" type="submit" >
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default PostModal;
