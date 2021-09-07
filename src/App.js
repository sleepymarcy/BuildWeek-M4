import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav.jsx";
import "./App.css";
import Profile from "./components/Profile.jsx";
import AlsoViewed from "./components/AlsoViewed.jsx";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="main">
      <MyNav />
      <Container>
        <Row>
          <Col sm={8}>
            <Profile />
          </Col>
          <Col sm={4} className="mt-4">
            <AlsoViewed />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
