import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav.jsx";
import "./App.css";
import Profile from "./components/Profile.jsx";
import AlsoViewed from "./components/AlsoViewed.jsx";
import { Container, Row } from "react-bootstrap";

function App() {
  return (
    <>
      <MyNav />
      <Container>
        <Row>
          <Profile />
          <AlsoViewed />
        </Row>
      </Container>
      <div className="main"></div>
    </>
  );
}

export default App;
