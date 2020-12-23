import React, { useState, useEffect, useContext } from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";
import UserContext from "../../context/UserContext";
import axios from "axios";

const NewConnection = (props) => {
  const { channels, user, project } = props;
  const [createConnection, setCreateconnection] = useState();
  const [workSpaces, setWorkSpaces] = useState();
  const { userData, setUserData } = useContext(UserContext);

  const createSlackconnection = (e) => {
    e.preventDefault();
    const channelName = createConnection.channel_name;
    const channel = channels.filter((channel) => {
      return channel.name === channelName;
    });
    const connnectionDetails = {
      channel_name: createConnection.channel_name,
      channel_id: channel[0].id,
      workspace_name: createConnection.workspace_name,
    };
    try {
      if (connnectionDetails) {
        axios
          .post("http://localhost:5000/connection/connectioncreate", {
            connnectionDetails,
            userData,
          })
          .then((res) => {
            console.log(res.data);
          })
          .catch((error) => {
            console.error(error.message);
          });
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/workspace/")
      .then((res) => {
        setWorkSpaces(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userData]);
  return (
    <>
      <div>
        <Row className="m-1">
          <Col
            style={{
              backgroundColor: "whitesmoke",
              padding: "10px",
            }}
          >
            {" "}
            Project Name
          </Col>
          <Col style={{ fontWeight: "500", padding: "10px" }}>
            {" "}
            # {project.name}
          </Col>
        </Row>
        <Row className="m-1">
          <Col
            style={{
              backgroundColor: "whitesmoke",
              padding: "10px",
            }}
          >
            Slack Channel
          </Col>
          <Col className="p-1 pl-3">
            <Form
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Form.Control
                as="select"
                size="sm"
                onChange={(e) => {
                  setCreateconnection({
                    ...createConnection,
                    channel_name: e.target.value,
                  });
                }}
              >
                <option></option>
                {channels &&
                  channels.map((channel) => {
                    return (
                      <option key={channel.id}>{channel.name.trim()}</option>
                    );
                  })}
              </Form.Control>
            </Form>
          </Col>
        </Row>
        <Row className="m-1">
          <Col
            style={{
              backgroundColor: "whitesmoke",
              padding: "10px",
            }}
          >
            Cyber Chief Workspace
          </Col>
          <Col className="p-1 pl-3">
            <Form
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Form.Control
                as="select"
                size="sm"
                onChange={(e) => {
                  setCreateconnection({
                    ...createConnection,
                    workspace_name: e.target.value,
                  });
                }}
              >
                <option></option>
                {workSpaces &&
                  workSpaces.map((workspace) => {
                    return (
                      <option key={workspace.id}>
                        {workspace.workspace_name.trim()}
                      </option>
                    );
                  })}
              </Form.Control>
            </Form>
          </Col>
        </Row>
      </div>
      <Row>
        <Col></Col>
        <Col>
          <Button size="sm" variant="success" onClick={createSlackconnection}>
            Create Connection
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default NewConnection;
