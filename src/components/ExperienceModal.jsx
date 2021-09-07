import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import { useState } from "react";

const ExperienceModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    {/* this button for connecting modal with handleshow function */}
      <button onClick={handleShow}>click</button>
      <Modal size="lg" show={show} onHide={handleClose} animation={false} scrollable={true}>
        <Modal.Header className="bg-light text-muted" closeButton>
          <Modal.Title>Add experience</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-light" scrollable>
          <h3>Where do you currently work?</h3>
          <Container>
            <Row>
              <Col className="text-muted">
                <Form.Group
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
                    {" "}
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
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer className="bg-light d-flex justify-content-between">
          <Button variant="secondary" className="rounded" onClick={handleClose}>
          delete
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ExperienceModal;
