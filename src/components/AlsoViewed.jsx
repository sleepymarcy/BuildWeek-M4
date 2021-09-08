import { Component } from "react";
import { Button } from "react-bootstrap";
import "../css/Profile.css";

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
      <div className="card pt-3 px-3 viewed">
        <p>People also viewed</p>
        <ul>
          {this.state.tenProfiles.map((p) => (
            <a href="#">
              <li className="mt-3">
                <div>
                  <img src={p.image} className="rounded-circle" />
                </div>
                <div>
                  <h6>
                    {p.name} {p.surname}
                  </h6>
                  <p className="text-muted">{p.bio}</p>
                  <Button variant="outline-dark">Connect</Button>
                </div>
              </li>
            </a>
          ))}
        </ul>
      </div>
    );
  }
}
