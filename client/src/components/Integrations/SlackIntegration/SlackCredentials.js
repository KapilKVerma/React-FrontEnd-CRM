import React, { useState, useContext } from "react";
import { Row, Col, Button, Card, Form } from "react-bootstrap";
import UserContext from "../../../context/UserContext";

import axios from "axios";

const SlackForm = () => {
  const [slackCredentials, setSlackCredentials] = useState();
  const { userData, setUserData } = useContext(UserContext);

  const saveCredentials = (e) => {
    e.preventDefault();
    axios
      .post(
        `http://localhost:5000/accesstoken/credentials/${userData.user.id}`,
        {
          slackCredentials,
          userData,
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  return (
    <div>
      <div className="pl-2"> Enter your Slack credentials</div>
      <hr></hr>
      <Form>
        <Row className="m-1">
          <Col
            lg={4}
            style={{
              backgroundColor: "whitesmoke",
              padding: "5px 15px",
            }}
          >
            {" "}
            Client ID
          </Col>
          <Col style={{ fontWeight: "500", padding: "2px 10px" }}>
            {" "}
            <Form.Control
              type="text"
              size="sm"
              onChange={(e) => {
                setSlackCredentials({
                  ...slackCredentials,
                  client_id: e.target.value,
                });
              }}
            />
          </Col>
        </Row>{" "}
        <Row className="m-1">
          <Col
            lg={4}
            style={{
              backgroundColor: "whitesmoke",
              padding: "5px 15px",
            }}
          >
            {" "}
            Client Secret
          </Col>
          <Col style={{ fontWeight: "500", padding: "2px 10px" }}>
            <Form.Control
              type="text"
              size="sm"
              onChange={(e) => {
                setSlackCredentials({
                  ...slackCredentials,
                  client_secret: e.target.value,
                });
              }}
            />{" "}
          </Col>
        </Row>{" "}
        <Row className="m-1">
          <Col
            lg={4}
            style={{
              backgroundColor: "whitesmoke",
              padding: "5px 15px",
            }}
          >
            {" "}
            Signing Secret
          </Col>
          <Col style={{ fontWeight: "500", padding: "2px 10px" }}>
            <Form.Control
              type="text"
              size="sm"
              onChange={(e) => {
                setSlackCredentials({
                  ...slackCredentials,
                  signing_secret: e.target.value,
                });
              }}
            />{" "}
          </Col>
        </Row>
        <Row>
          <Col lg={4}></Col>
          <Col>
            <Button size="sm" variant="success" onClick={saveCredentials}>
              Save credentials
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SlackForm;
