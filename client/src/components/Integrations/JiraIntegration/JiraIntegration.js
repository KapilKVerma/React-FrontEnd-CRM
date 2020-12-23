import React, { useState, useEffect, useContext } from "react";
import { Row, Col, Button, Card, Form, Modal } from "react-bootstrap";
import JiraIcon from "../../../Images/jira.png";
import UserContext from "../../../context/UserContext";
import axios from "axios";

const JiraIntegration = () => {
  const [jiraRegistration, setjiraRegistration] = useState();
  const [registeredAccount, setRegisteredaccount] = useState();
  const { userData, setUserData } = useContext(UserContext);

  // Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const registerAcc = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/integration/jira", {
        jiraRegistration,
        userData,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteAccount = () => {
    axios
      .delete(
        `http://localhost:5000/integration/jira/delete/${registeredAccount.id}`
      )
      .then((res) => {
        setRegisteredaccount(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (userData.user)
      axios
        .get(`http://localhost:5000/integration/jira/${userData.user.id}`)
        .then((res) => {
          setRegisteredaccount(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
  }, [userData]);

  return (
    <div className="shadow p-3">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <img
            src={JiraIcon}
            alt="Jira Icon"
            style={{
              width: "6%",
              marginRight: "3px",
            }}
          />{" "}
          <span
            style={{
              fontSize: "20px",
              fontWeight: "500",
            }}
          >
            Jira Software Integration
          </span>
        </div>
      </div>
      <Row
        style={{
          backgroundColor: "whitesmoke",
          marginTop: "5px",
          padding: "5px ",
          borderRadius: "3px",
        }}
      >
        <Col className="p-1">
          <Card>
            {registeredAccount ? (
              <div>
                <Card.Header
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <div> Registered Account </div>{" "}
                </Card.Header>
                <Card.Body style={{ fontSize: "12px" }} className="p-1">
                  <Row className="pl-1 pb-1">
                    <Col style={{ fontWeight: "500" }} lg={4}>
                      {" "}
                      Host URL :
                    </Col>
                    <Col> {registeredAccount.host_url}</Col>
                  </Row>
                  <Row className="pl-1">
                    <Col style={{ fontWeight: "500" }} lg={4}>
                      {" "}
                      Username/Email :
                    </Col>
                    <Col> {registeredAccount.username}</Col>
                  </Row>
                  <Row className="p-1">
                    <Col style={{ fontWeight: "500" }} lg={4}>
                      {" "}
                      Api key :
                    </Col>
                    <Col> {registeredAccount.api_key}</Col>
                  </Row>
                  <Row className="pl-1">
                    <Col style={{ fontWeight: "500" }} lg={4}>
                      {" "}
                      Project key :
                    </Col>
                    <Col> {registeredAccount.project_key}</Col>
                  </Row>
                </Card.Body>
              </div>
            ) : (
              <div>
                <Card.Header
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <div> Register Jira Account </div>{" "}
                </Card.Header>
                <Card.Body style={{ fontSize: "14px" }} className="p-3">
                  <div className="pl-2">
                    {" "}
                    Enter your Jira account credentials
                  </div>
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
                        Host URL
                      </Col>
                      <Col style={{ fontWeight: "500", padding: "2px 10px" }}>
                        {" "}
                        <Form.Control
                          type="text"
                          size="sm"
                          onChange={(e) => {
                            setjiraRegistration({
                              ...jiraRegistration,
                              host_url: e.target.value,
                            });
                          }}
                          required
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
                        Username/Email
                      </Col>
                      <Col style={{ fontWeight: "500", padding: "2px 10px" }}>
                        <Form.Control
                          type="text"
                          size="sm"
                          onChange={(e) => {
                            setjiraRegistration({
                              ...jiraRegistration,
                              username: e.target.value,
                            });
                          }}
                          required
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
                        Api Key
                      </Col>
                      <Col style={{ fontWeight: "500", padding: " 2px 10px" }}>
                        <Form.Control
                          type="text"
                          size="sm"
                          onChange={(e) => {
                            setjiraRegistration({
                              ...jiraRegistration,
                              api_key: e.target.value,
                            });
                          }}
                          required
                        />{" "}
                      </Col>
                    </Row>
                    <Row className="m-1">
                      <Col
                        lg={4}
                        style={{
                          backgroundColor: "whitesmoke",
                          padding: "5px 15px",
                        }}
                      >
                        {" "}
                        Project Key
                      </Col>
                      <Col style={{ fontWeight: "500", padding: "2px 10px" }}>
                        <Form.Control
                          type="text"
                          size="sm"
                          onChange={(e) => {
                            setjiraRegistration({
                              ...jiraRegistration,
                              project_key: e.target.value,
                            });
                          }}
                          required
                        />{" "}
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={4}></Col>
                      <Col>
                        <Button
                          size="sm"
                          variant="success"
                          onClick={registerAcc}
                        >
                          Register
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>{" "}
              </div>
            )}
          </Card>
        </Col>
      </Row>
      {registeredAccount ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Button
            size="sm"
            variant="success"
            onClick={registerAcc}
            className="mr-2 mt-3"
          >
            Edit
          </Button>
          <Button
            size="sm"
            variant="danger"
            onClick={handleShow}
            className="mt-3"
          >
            Uninstall
          </Button>
        </div>
      ) : null}
      <Modal show={show} onHide={handleClose} style={{ borderWidth: "0px" }}>
        <Modal.Header
          style={{
            backgroundColor: "#733b82",
            borderWidth: "0px",
            color: "white",
          }}
        >
          <Modal.Title>Uninstall Jira Integration</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4">
          <div>Are you sure you want to uninstall Jira integration?</div>{" "}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
            className="mt-4"
          >
            <Button
              variant="secondary"
              onClick={handleClose}
              size="sm"
              className="mr-2"
            >
              Close
            </Button>
            <Button variant="danger" onClick={deleteAccount} size="sm">
              Yes
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default JiraIntegration;
