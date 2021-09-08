import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav.jsx";
import "./App.css";
import Profile from "./components/Profile.jsx";
import AlsoViewed from "./components/AlsoViewed.jsx";
import { Container, Row, Col } from "react-bootstrap";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ProfileId from './components/ProfileId.jsx'

function App() {
  return (
    <div className="main">

      <Router>
        <Route path="/" component={MyNav} />
        <Route  path="/profile/me" component={Profile} />
        <Route  path="/profile/:userId"  render={(routerProps) => <ProfileId {...routerProps} />}   />
      
      {/* // <Container>
      //   <Row>
      //     <Col sm={8}>
      //       <Profile />
      //     </Col>
      //     <Col sm={4} className="mt-4">
      //       <AlsoViewed /> 
      //     </Col>
      //   </Row>
      // </Container> */}
     </Router>
    </div>
  );
}

export default App;
