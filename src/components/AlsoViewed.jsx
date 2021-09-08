import { Component } from "react";
import { Button } from "react-bootstrap";
import "../css/Profile.css";
import Viewed from "./Viewed";

export default class AlsoViewed extends Component {
  state = {
    tenProfiles: [],
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM1ZjIxYzdiZTZjMTAwMTVmOWRiYTkiLCJpYXQiOjE2MzA5MjUzNDAsImV4cCI6MTYzMjEzNDk0MH0.SHpfAdBqHwVjitSlQLlAj9UbodVhYtNopnQhBLcrggM",
          },
        }
      );
      if (response.ok) {
        let profilesList = await response.json();
        let tenProfiles = profilesList.slice(0, 10);
        this.setState({
          tenProfiles,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <>
      <div className="card pt-3 px-3 viewed">
        <p>People also viewed</p>
        
          {this.state.tenProfiles.map((p) => (
           <Viewed key={p._id} p={p}/>
          ))}
    
      </div>
      </>
    );
  }
}
