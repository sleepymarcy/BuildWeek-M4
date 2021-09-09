import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "../css/Profile.css";
import { AiOutlineCamera } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { ImLinkedin } from "react-icons/im";
const Profile = () => {
  const [profiles, setProfiles] = useState([]);

  const fetchProfiles = async () => {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/me",
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

  useEffect(() => {
    fetchProfiles();
  }, []);

  return (
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
      <div className="position-absolute d-felx flex-row-reverse px-1 pb-1 camera">
        <AiOutlineCamera />
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
        <div className="d-flex justify-content-end ">
          <Button variant="outline" className="rounded">
            {" "}
            <BiPencil />
          </Button>
        </div>
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
            </div>

            <div className="card-body pt-1">
              <div className="d-flex justify-content-end mt-5">
                <Button variant="outline" className="ex-btn" >
                
                  <BiPencil />
                </Button>
              </div>
              <div className="row">
                <div className="col-12 col-sm-12 col-md-8 col-lg-8  mb-2">
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
                  </div>

    



            <button className="btn btn-sm btn-primary btn-rectangle mr-2">
              Open to
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
    </div>

  );
};
export default Profile;
