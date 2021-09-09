import ProfileLeft from "./ProfileLeft";
import CreatePost from "./CreatePost";
import Suggestions from "./Suggestions";
import { useState, useEffect } from "react";
import Feed from "./Feed";


const Home = () => {
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
  console.log(profiles);

  useEffect(() => {
    fetchProfiles();
  }, []);

  const [posts, setPosts] = useState([]);

  const fetchposts = async () => {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/posts/",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM1ZDgxYTdiZTZjMTAwMTVmOWRiOWEiLCJpYXQiOjE2MzA5MTg2ODMsImV4cCI6MTYzMjEyODI4M30.z1FglsnilVoFG29tlQ4cAsplJJ3_M45A3BGoYeYrQl8",
        },
      }
    );
    let posts = await response.json();
    setPosts(posts);
  };
  // console.log(posts);

  useEffect(() => {
    fetchposts();
  }, []);
  return (
    <div className="container py-2">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-3">
          <ProfileLeft profiles={profiles} />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-5">
          <CreatePost profiles={profiles} />
          <hr />
          <Feed posts={posts} />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4">
          <Suggestions posts={posts} />
        </div>
      </div>
    </div>
  );
};
export default Home;
