import React from "react";
import "../css/Home.css";
import PostModal from "./PostModal";

const CreatePost = ({ profiles, Toggle }) => {
  return (
    <div id="create-post" className="card">
      <div className="card-body">
        <div className="card-title d-flex my-2">
          <div className="card-pic mt-1 mx-1">
            <img
              className="rounded-circle"
              src={profiles.image}
              width={50}
              height={50}
              alt=""
            />
          </div>
          <PostModal profiles= {profiles} Toggle={Toggle}/>
        </div>
        <div className="row">
          <div className="card-button  mb-1  d-flex justify-content-between align-items-center">
            <button className="btn btn-outline btn-sm align-middle mr-1 d-flex justify-content-between align-items-center">
              <img src="https://img.icons8.com/ios-glyphs/30/4a90e2/image.png" />
              Photo
            </button>
            <button className="btn btn-outline btn-sm align-middle  d-flex justify-content-between align-items-center">
              <img src="https://img.icons8.com/material-rounded/30/26e07f/video.png" />
              Video
            </button>
            <button className="btn btn-outline btn-sm align-middle  d-flex justify-content-between align-items-center">
              <img src="https://img.icons8.com/nolan/26/tear-off-calendar.png" />
              Event
            </button>
            <button className="btn btn-outline btn-sm align-middle   d-flex justify-content-between align-items-center">
              <img src="https://img.icons8.com/color/30/000000/news.png" />
              Write Article
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
