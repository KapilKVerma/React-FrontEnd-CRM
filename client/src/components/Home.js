import React from "react";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";
import Signup from "./Login/SignupForm";
import Signin from "./Login/SigninForm";

const Home = () => {
  return (
    <div>
      <Jumbotron
        style={{ backgroundColor: "#d7d9fc", padding: "5rem" }}
        className="m-5"
      >
        <Row>
          <Col lg={9}>
            <h1>Welcome to CFirst</h1>
            <h5>Best solution for managing your customers need.</h5>
          </Col>
          <Col>
            {" "}
            <Row>
              {/* <Col><Signup /></Col> */}
              <Col>
                <Signin />
              </Col>
            </Row>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default Home;
