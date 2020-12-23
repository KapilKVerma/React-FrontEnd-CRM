import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import SlackIntegration from "./SlackIntegration/SlackIntegration";
import JiraIntegration from "./JiraIntegration/JiraIntegration";

const Integrations = () => {
  return (
    <div className="body-content">
      <Row>
        <Col lg={4}>
          {" "}
          <SlackIntegration />
        </Col>
        <Col lg={4}>
          <JiraIntegration />
        </Col>
        <Col>
          {" "}
          <Card className="shadow" style={{ borderWidth: "0px" }}>
            <Card.Body>Third Integration</Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Integrations;
