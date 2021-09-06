import { Component } from "react";
import "../css/Profile.css";

export default class AlsoViewed extends Component {
  render() {
    return (
      <div className="card pt-3 px-3 viewed">
        <p>People also viewed</p>
        <ul>
          <li className="mt-3">
            <div>Lidia Kovac</div>
          </li>
        </ul>
      </div>
    );
  }
}
