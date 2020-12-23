import React, { useState, useEffect, useContext } from "react";
import { Row, Col, Button, Card, Modal } from "react-bootstrap";
import Connections from "../../Connections/Connections";
import SlackCredentials from "./SlackCredentials";
import SlackIcon from "../../../Images/slack.png";
import NewConnection from "../../Connections/NewConnection";
import UserContext from "../../../context/UserContext";
import axios from "axios";

const SlackIntegration = () => {
  const [connections, setConnections] = useState([]);
  const [channels, setChannels] = useState();
  const [project, setProject] = useState();
  const [userCredentials, setUsercredentials] = useState();
  const { userData, setUserData } = useContext(UserContext);

  // Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const slackCalls = () => {
    if (userData.user) {
      axios
        .get(`http://localhost:5000/slackteam/${userData.user.id}`)
        .then((res) => {
          setProject(res.data);
        })
        .catch((error) => {
          console.error(error.message);
        });
      axios
        .get(`http://localhost:5000/slackchannels/${userData.user.id}`)
        .then((res) => {
          setChannels(res.data);
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  };

  const sendUserDetails = () => {
    if (userData.user) {
      const user = userData.user;
      axios
        .post("http://localhost:5000/slack/auth", user)
        .than(() => {})
        .catch((error) => {
          console.log("Error", error);
        });
    }
  };

  const signout = () => {
    if (userData.user) {
      axios
        .post(
          `http://localhost:5000/slack/signout/${userData.user.id}`,
          connections
        )
        .then((res) => {})
        .catch((error) => {
          console.error(error.message);
        });
    }
  };
  useEffect(() => {
    if (userData.user) {
      axios
        .get(`http://localhost:5000/connection/${userData.user.id}`)
        .then((res) => {
          setConnections(res.data);
        })
        .catch((err) => {
          console.log(err);
        });

      axios
        .get(
          `http://localhost:5000/accesstoken/credentials/${userData.user.id}`
        )
        .then((res) => {
          setUsercredentials(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
      console.log("Active User Id:", userData.user.id);
    }
    slackCalls();
  }, [userData]);

  return (
    <div className="shadow p-3 ">
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div className="mb-2">
            <img
              src={SlackIcon}
              alt="Slack Icon"
              style={{
                width: "5%",
                marginRight: "7px",
              }}
            />{" "}
            <span
              style={{
                fontSize: "20px",
                fontWeight: "500",
              }}
            >
              Slack Integration
            </span>
          </div>
        </div>

        {connections.length !== 0 ? (
          <div>
            <Row
              style={{
                backgroundColor: "whitesmoke",

                padding: " 5px",
                borderRadius: "3px",
              }}
            >
              <Col className="p-1">
                <Card>
                  <Card.Header
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>Slack Connections </div>{" "}
                  </Card.Header>
                  <Card.Body style={{ padding: "0px 2px" }}>
                    <Connections connections={connections} />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        ) : (
          <div>
            <Row
              style={{
                backgroundColor: "whitesmoke",
                marginTop: "5px",
                padding: " 5px",
                borderRadius: "3px",
              }}
            >
              <Col className="p-1">
                <Card>
                  <Card.Header
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <div> Create Slack Connection </div>{" "}
                  </Card.Header>
                  <Card.Body style={{ fontSize: "14px" }} className="p-3">
                    {project ? (
                      <NewConnection channels={channels} project={project} />
                    ) : (
                      <div>
                        {userCredentials === "No credentials found" ? (
                          <div>
                            <SlackCredentials />
                          </div>
                        ) : (
                          <div>
                            Click the button to start integrating with Slack.
                            <div className="mt-1">
                              {userCredentials && (
                                <Button
                                  size="sm"
                                  variant="success"
                                  href={`https://slack.com/oauth/v2/authorize?scope= channels:read, team:read&user_scope= chat:write&client_id=${userCredentials.client_id}&redirect_uri=https://a0a71c7ca704.ngrok.io/slack/auth`}
                                  className="mt-2"
                                  onClick={sendUserDetails}
                                >
                                  Sign in
                                </Button>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        )}
      </div>{" "}
      <Row className="">
        <Col>
          {connections.length !== 0 ? (
            <div>
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
        </Col>
      </Row>
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
          <div>Are you sure you want to uninstall Slack integration?</div>{" "}
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
            <Button variant="danger" onClick={signout} size="sm">
              Yes
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SlackIntegration;
