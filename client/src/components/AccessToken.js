import React, { useState, useEffect } from "react";
import { Card, Button, Container } from "react-bootstrap";
import axios from "axios";

const AccessToken = () => {
  const [token, setToken] = useState();

  const createToken = () => {
    axios
      .post("http://localhost:5000/accesstoken/createtoken", token)
      .then((res) => {
        setToken(res.data);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/accesstoken/")
      .then((res) => {
        setToken(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);

  return (
    <>
      <Container>
        <Card
          style={{ fontSize: "14px", borderWidth: "0px" }}
          className="shadow mt-5"
        >
          <Card.Body className="m-4">
            <Card.Title>Access Token</Card.Title>
            <div>
              <span style={{ fontWeight: "500" }}>Token:</span>{" "}
              {token ? (
                <span
                  style={{
                    backgroundColor: "gainsboro",
                    padding: "5px 10px",
                    borderRadius: "5px",
                  }}
                >
                  {token.token}
                </span>
              ) : null}
            </div>
            <Button
              variant="success"
              size="sm"
              className="mt-3"
              onClick={createToken}
            >
              New Token
            </Button>
            <p className="mt-3">
              Use the URL given below to send workspace information along with
              test results in JSON format . And, add the above token as
              parameter to make a successfull post request.
            </p>
            <p>
              Example:{" "}
              <i>
                http://localhost:5000/notification/testresults?access_token=3769eaea09be8ad1b08328563820e104
              </i>
            </p>
            <span style={{ fontWeight: "500" }}>URL:</span>{" "}
            <span
              className="mt-3"
              style={{
                backgroundColor: "gainsboro",
                padding: "5px 10px",
                borderRadius: "5px",
              }}
            >
              http://localhost:5000/notification/testresults
            </span>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default AccessToken;
