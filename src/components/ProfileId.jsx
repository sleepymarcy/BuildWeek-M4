import { useEffect, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "../css/Profile.css";
import { AiOutlineCamera } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { ImLinkedin } from "react-icons/im";
import AlsoViewed from "./AlsoViewed";
import { useHistory } from "react-router";
import { withRouter } from "react-router-dom";
const ProfileId = ({ props, match, location }) => {
  const [profiles, setProfiles] = useState([{}]);
  let id = match.params.userId;
  const fetchProfiles = async (id) => {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${id}`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM1ZDgxYTdiZTZjMTAwMTVmOWRiOWEiLCJpYXQiOjE2MzA5MTg2ODMsImV4cCI6MTYzMjEyODI4M30.z1FglsnilVoFG29tlQ4cAsplJJ3_M45A3BGoYeYrQl8",
        },
      }
    );
    let profiles = await response.json();
    setProfiles(profiles);
  };
  console.log(profiles);

  // useEffect(() => {
  //   fetchProfiles(id);
  // }, []);
  
  useEffect(() => {
    fetchProfiles(id);
  });
  return (
    <Container>
      <Row>
        <Col sm={8}>
          <div id="profile-top" className="card mt-4 mb-3">
            <div className="card-img-top-div card-img-top-profile">
              <img
                className="card-img-top "
                src={
                  "https://www.falcon.io/wp-content/uploads/2021/02/SoMe_Templates_2021_Blog_Assets_Blog_Separator_IN_832x304-2.jpg"
                }
                alt={profiles.name}
              />
            </div>

            <div className="card-pic ml-4">
              <img
                className="rounded-circle"
                src={profiles.image}
                width={150}
                height={150}
              />
            </div>
            <div className="card-body pt-1">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-8 col-lg-8 mb-2">
                  <h4 className="card-title font-weight-bold my-1">
                    {profiles.name + " " + profiles.surname}
                  </h4>
                  <h6 className="card-text my-1">
                    <small>{profiles.title}</small>
                  </h6>
                  <p className="card-text my-1">
                    <small>{profiles.bio}</small>
                  </p>
                  <div className="mb-2">
                    <p className="card-text text-muted">
                      <small>{profiles.area}</small>
                      <a className="mx-2" href="">
                        Contact info
                      </a>
                    </p>
                  </div>

                  <button className="btn btn-sm btn-primary btn-rectangle mr-2">
                    Connect
                  </button>
                  <button className="btn btn-sm btn-outline-info btn-rectangle mr-2">
                    Message
                  </button>
                  <button className="btn btn-sm btn-outline-dark btn-rectangle">
                    More...
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col sm={4} className="mt-4">
          <AlsoViewed />
        </Col>
      </Row>
    </Container>
  );
};
export default withRouter(ProfileId);
