import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav.jsx";
import Profile from "./components/Profile.jsx";
import AlsoViewed from "./components/AlsoViewed.jsx";
import Experience from "./components/Experience.jsx";
import { Container, Row, Col } from "react-bootstrap";
import ProfileLeft from "./components/ProfileLeft";
import Home from './components/Home.jsx'


function App() {

  return (
    <div className="main">
      <Container>
        <Row>
          <Col aria-modal={8}>
            <Profile />
            <Experience />
          </Col>
          <Col md={4} className="mt-4">
            <AlsoViewed />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
