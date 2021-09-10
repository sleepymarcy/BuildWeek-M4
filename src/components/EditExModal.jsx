import {
  Alert,
  Container,
  Row,
  Col,
  Form,
  Button,
  Modal,
} from "react-bootstrap";
import { useState } from "react";
import { Pencil } from "../assets/icons.jsx";
import { format, parseISO } from "date-fns";

const EditExModal = (props) => {
  const [show, setShow] = useState(false);
  const [isError, setIsError] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [experience, setExperience] = useState({
    role: props.selectedData.role,
    company: props.selectedData.company,
    startDate: props.selectedData.startDate,
    endDate: props.selectedData.endDate,
    description: props.selectedData.description,
    area: props.selectedData.area,
  });

  const handleInput = (e, property) => {
    setExperience({
      ...experience,
      [property]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/6135d81a7be6c10015f9db9a/experiences/${props.selectedData._id}`,
        {
          method: "PUT",
          body: JSON.stringify(experience),
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM1ZDgxYTdiZTZjMTAwMTVmOWRiOWEiLCJpYXQiOjE2MzA5MTg2ODMsImV4cCI6MTYzMjEyODI4M30.z1FglsnilVoFG29tlQ4cAsplJJ3_M45A3BGoYeYrQl8",
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        alert("changed");
        handleClose();
        props.Toggle();
      } else {
        alert("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/6135d81a7be6c10015f9db9a/experiences/${props.selectedData._id}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM1ZDgxYTdiZTZjMTAwMTVmOWRiOWEiLCJpYXQiOjE2MzA5MTg2ODMsImV4cCI6MTYzMjEyODI4M30.z1FglsnilVoFG29tlQ4cAsplJJ3_M45A3BGoYeYrQl8",
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        alert(
          "Your experience was deleted correctly!" + props.selectedData._id
        );
        handleClose();
        props.Toggle();
      } else {
        alert("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* this button for connecting modal with handleshow function */}
      <Button className="p-0 ex-btn" variant="none" onClick={handleShow}>
        <Pencil />
      </Button>
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        animation={false}
        scrollable={true}
      >
        <Modal.Header className="bg-light text-muted" closeButton>
          <Modal.Title>Edit experience</Modal.Title>
        </Modal.Header>

        {isError && (
          <Alert variant="danger" className="m-3">
            Something went wrong!
          </Alert>
        )}
        <Modal.Body className="bg-light" scrollable>
          <h3>Where do you currently work?</h3>
          <Container>
            <Row>
              <Col className="text-muted">
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label className="mb-0">
                      <small>Title*</small>
                    </Form.Label>
                    <Form.Control
                      className="bg-light"
                      type="text"
                      value={experience.role}
                      placeholder="Ex: Retail Sales Manager"
                      onChange={(e) => handleInput(e, "role")}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="mb-0">
                      <small>Company name*</small>
                    </Form.Label>
                    <Form.Control
                      className="bg-light"
                      type="text"
                      value={experience.company}
                      onChange={(e) => handleInput(e, "company")}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="mb-0">
                      <small>Start date</small>
                    </Form.Label>

                    <Form.Control
                      type="date"
                      value={format(
                        parseISO(experience.startDate),
                        "yyyy-MM-dd"
                      )}
                      onChange={(e) => handleInput(e, "startDate")}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="mb-0">
                      <small>End date</small>
                    </Form.Label>
                    <Form.Control
                      type="date"
                      value={format(parseISO(experience.endDate), "yyyy-MM-dd")}
                      onChange={(e) => handleInput(e, "endDate")}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="mb-0">
                      <small>Description</small>
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={experience.description}
                      onChange={(e) => handleInput(e, "description")}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="mb-0">
                      <small>Area</small>
                    </Form.Label>
                    <Form.Control
                      className="bg-light"
                      type="text"
                      value={experience.area}
                      onChange={(e) => handleInput(e, "area")}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                  <Button variant="danger" onClick={handleDelete}>
                    Delete
                  </Button>
                </Form>
                {/* <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="mb-0">
                    <small>Title*</small>
                  </Form.Label>
                  <Form.Control
                    className="bg-light"
                    type="email"
                    placeholder="Ex: Retail Sales Manager"
                  />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label className="mb-0">
                    <small>Employment type</small>
                  </Form.Label>
                  <Form.Control className="bg-light" as="select">
                    <option>Please select</option>
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Self-employed</option>
                    <option>Freelance</option>
                    <option>Contract</option>
                    <option>Internship</option>
                    <option>Apprenticeship</option>
                    <option>Seasonal</option>
                  </Form.Control>
                  <p className="mb-0">
                    <small>Country-specific employment types</small>
                  </p>
                  <a href="#" className="mt-1">
                    Learn More
                  </a>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="mb-0">
                    <small>Company name*</small>
                  </Form.Label>
                  <Form.Control
                    className="bg-light"
                    type="email"
                    placeholder="Ex: Microsoft"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="mb-0">
                    <small>Location*</small>
                  </Form.Label>
                  <Form.Control
                    className="bg-light"
                    type="email"
                    placeholder="Ex: London, United Kingdom"
                  />
                </Form.Group>
                <Form.Check
                  className="my-5"
                  type="checkbox"
                  id="customControlAutosizing"
                  label="I am currently working in this role"
                  custom
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label className="mb-0 text-muted">
                    {" "}
                    <small>Start date* </small>
                  </Form.Label>
                  <Form.Control className="bg-light" as="select">
                    <option>Month</option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label className="mb-0"></Form.Label>
                  <Form.Control className="bg-light" as="select">
                    <option>Year</option>
                    <option>2021</option>
                    <option>2020</option>
                    <option>2019</option>
                    <option>2018</option>
                    <option>2017</option>
                    <option>2016</option>
                    <option>2015</option>
                    <option>2014</option>
                    <option>2013</option>
                    <option>2012</option>
                    <option>2011</option>
                    <option>2010</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label className="mb-0 text-muted">
                    {" "}
                    <small>End date* </small>
                  </Form.Label>
                  <Form.Control className="bg-light" as="select">
                    <option>Month</option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label className="mb-0"></Form.Label>
                  <Form.Control className="bg-light" as="select">
                    <option>Year</option>
                    <option>2021</option>
                    <option>2020</option>
                    <option>2019</option>
                    <option>2018</option>
                    <option>2017</option>
                    <option>2016</option>
                    <option>2015</option>
                    <option>2014</option>
                    <option>2013</option>
                    <option>2012</option>
                    <option>2011</option>
                    <option>2010</option>
                  </Form.Control>
                </Form.Group>
                <Button variant="primary" onClick={handleClose}>
                  Save
                </Button> */}
              </Col>
            </Row>
          </Container>
        </Modal.Body>

        <Modal.Footer className="bg-light d-flex justify-content-between"></Modal.Footer>
      </Modal>
    </>
  );
};

export default EditExModal;
