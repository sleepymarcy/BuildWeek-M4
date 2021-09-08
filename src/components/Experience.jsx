import { Card, ListGroup, Button } from "react-bootstrap";

import "../css/Experience.css";
import AddExModal from "./AddExModal.jsx";
import { useEffect, useState } from "react";
import EditExModal from "./EditExModal";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  const fetchExperiences = async () => {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/6135d81a7be6c10015f9db9a/experiences",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM1ZDgxYTdiZTZjMTAwMTVmOWRiOWEiLCJpYXQiOjE2MzA5MTg2ODMsImV4cCI6MTYzMjEyODI4M30.z1FglsnilVoFG29tlQ4cAsplJJ3_M45A3BGoYeYrQl8",
        },
      }
    );
    let experiences = await response.json();
    setExperiences(experiences);
  };
  console.log(experiences);

  useEffect(() => {
    fetchExperiences();
  }, []);
  return (
    <Card as="ul" className="list">
      <Card.Body className="card-wrapper">
        <Card.Header className="experience">
          <Card.Title className="title">Experience</Card.Title>
          <Card.Link className="plus">
            <AddExModal />
          </Card.Link>
        </Card.Header>
        <ul>
          {experiences.map((e) => (
            <ListGroup variant="flush">
              <Card.Link className="link-wrapper">
                <img
                  className="job-logo"
                  src="https://media-exp1.licdn.com/dms/image/C4D0BAQFFQIjyDsOK0w/company-logo_100_100/0/1593351903670?e=1639008000&amp;v=beta&amp;t=38emh8r8X3fw7Ah3ky91KyaVJT_6wSkxl1MqF2QRf5E"
                  alt="Strive School"
                ></img>
                <div className="job-wrapper">
                  <ListGroup.Item as="li">
                    <p className="job-title">{e.role}</p>
                    <p className="employer">{e.company}</p>
                    <h6 className="year">
                      <small>
                        {e.startDate} - {e.endDate}
                      </small>
                    </h6>
                  </ListGroup.Item>
                </div>
                <Card.Link className="pencil">
                  <Button className="p-0 ex-btn" variant="none">
                    <EditExModal exId={e._id} />
                  </Button>
                </Card.Link>
              </Card.Link>
            </ListGroup>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
};

export default Experience;
