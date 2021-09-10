import { Card, ListGroup, Button } from "react-bootstrap";

import "../css/Experience.css";
import AddExModal from "./AddExModal.jsx";
import { useEffect, useState } from "react";
import EditExModal from "./EditExModal";
import { format, parseISO, formatDistance } from "date-fns";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [RequestGetAgain, setRequestGetAgain] = useState(false);

  const handleRefetch = () => setRequestGetAgain(!RequestGetAgain);
  // create this state RequestGetAgain => another that could be toggled true => false; false=>true
  //This is were the GET happens
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

  useEffect(() => {
    fetchExperiences();
  }, []);

  useEffect(() => {
    fetchExperiences();
  }, [RequestGetAgain]);

  return (
    <Card as="ul" className="list">
      <Card.Body className="card-wrapper">
        <Card.Header className="experience">
          <Card.Title className="title">Experience</Card.Title>
          <Card.Link className="plus">
            {/* this is were the POST happens, could pass the RequestGetAgain and setRequestGetAgain state */}
            <AddExModal Toggle={() => handleRefetch(RequestGetAgain)} />
          </Card.Link>
        </Card.Header>
        <ul>
          {experiences.map((e) => (
            <ListGroup variant="flush" key={e._id}>
              <Card className="link-wrapper d-inline-block">
                <div>
                  <img className="job-logo" src={e.image} alt={e.company} />
                </div>
                <div className="job-wrapper pl-4">
                  <ListGroup.Item as="li">
                    <div className="d-flex justify-content-between list-item-content">
                      <a href="#">
                        <div>
                          <p className="job-title">{e.company}</p>

                          <p>
                            <small>
                              {formatDistance(
                                parseISO(e.startDate),
                                parseISO(e.endDate)
                              )}
                            </small>
                          </p>
                        </div>
                      </a>
                      <Button className="p-0 ex-btn" variant="none">
                        {/* this is were the PUT happens */}
                        <EditExModal
                          selectedData={e}
                          Toggle={() => handleRefetch(RequestGetAgain)}
                        />
                      </Button>
                    </div>

                    <p className="employer">{e.role}</p>

                    <h6 className="year">
                      <small>
                        {format(parseISO(e.startDate), "MMMM yyyy")} -
                        {format(parseISO(e.endDate), "MMMM yyyy")}
                        <br />
                        {e.area}
                      </small>
                    </h6>

                    <p class="description">{e.description}</p>
                  </ListGroup.Item>
                </div>
              </Card>
            </ListGroup>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
};

export default Experience;
