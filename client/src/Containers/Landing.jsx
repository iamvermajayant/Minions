
import { Row, Col, Button } from "react-bootstrap";
// import Header from "../Components/Header";
// import ShortenUrlCard from "../Components/ShortenUrlCard";
import Cardscomponent from "../Components/Cardscomponent";
import ConnectedHeader from '../Components/Header';
import ConnectedShortenUrlCard from '../Components/ShortenUrlCard';

import Typewriter from "../Components/Typewriter";
import Footer from "../Components/Footer";

const Landing = () => {
  const rowDivStyle = {
    marginTop: "5rem",
  };


  const lines = [
    "Hello, User 👋",
    "Short Your URL Here !!!",
    "Login To Use All The Features",
    "It's totally Free 💯"
  ];

  return (
    <>
      <ConnectedHeader />
      <Row style={rowDivStyle} className="d-flex justify-content-center">
      <Typewriter lines={lines} speed={50} />
      </Row>
      <Row style={{marginTop : '5rem'}} className="d-flex justify-content-center">
        <Col sm={6} className="center-content">
          <legend className="text-center text-white">Try it now :</legend>
          <ConnectedShortenUrlCard />
          <p
            className="text-center text-white my-4"
            style={{ padding: "20px", fontSize: "1.3rem" }}
          >
            Get access to all other features for free. Just create an account
            with us and you are all set!
          </p>
          <p className="text-center my-4">
            <a href="/signup">
              <Button variant="primary" size="lg" className="px-4 rounded-pill">
                Signup{" "}
                <small className="bg-transparent">It s free!</small>
              </Button>
            </a>
          </p>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center align-items-center my-5 mx-5" >
          <Col className="d-flex flex-xl-row flex-column justify-content-center align-items-center mx-4" md={10}>
            <Cardscomponent />
          </Col>
      </Row>
      <Footer/>
    </>
  );
};

export default Landing;
