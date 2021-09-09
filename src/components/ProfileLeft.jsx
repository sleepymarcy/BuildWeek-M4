import "../css/Home.css";
import puffer1 from "../assets/puffer1.png";
import { TiLockClosed } from "react-icons/ti";
import { IoIosBookmark } from "react-icons/io";
import { useState, useEffect } from "react";
const ProfileLeft = ({profiles}) => {
 
  return (
    <>
      <div id="profile-left" className="card mb-3">
        <div className="card-img-top-div">
          <img className="card-img-top" src={puffer1} alt="" />
        </div>
        <div className="card-pic mt-1 mn-5 text-center">
          <img
            className="rounded-circle"
            src={profiles.image}
            width={75}
            height={75}
            alt=""
          />
        </div>
        <div className="card-body text-center pt-1">
          <h6 className="card-title font-weight-bold dark mt-4">
            <a href="#" className="profile text-dark">
              {profiles.name +" " + profiles.surname}
            </a>
          </h6>
          <p className="card-text text-muted">
            <small>{profiles.title}</small>
          </p>
         
        </div>

        <div className="list-group list-group-flush">
          <div className="list-group-item text-center py-1 d-flex justify-content-between ">
            <small className="text-muted ">Who's viewed your profile</small>
            <small className="viewscount text-muted">24</small>
          </div>
          <h6>
            <small>Grow Your Network</small>
          </h6>
          <div className="list-group-item text-center  d-flex justify-content-between  ">
            <p className="mb-0">
              <small className="text-muted ">Connections</small>
            </p>
            <small className="viewscount text-muted">7</small>
          </div>
        </div>
        <div className="list-group list-group-flush">
          <div className="list-group-item    bg-light">
            <p className="mb-0">
              <small className="text-muted ">
                Access exclusive tools &amp; insights
              </small>
            </p>
            <small className="align-middle">
              <a href="#" className="font-weight-bold text-dark">
                <TiLockClosed />
                Free Upgrade to Premium
              </a>
            </small>
          </div>
        </div>
        <div className="list-group list-group-flush">
          <div className="list-group-item    bg-light">
            <small className="align-middle">
              <a href="#" className="font-weight-bold text-dark">
                <IoIosBookmark />
                My Items
              </a>
            </small>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProfileLeft;
