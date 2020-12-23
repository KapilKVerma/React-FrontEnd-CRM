import React from "react";
import { Row, Col, Card, Button, Tab, Tabs } from "react-bootstrap";
const Issues = () => {
  return (
    <div>
      <h5 className=" mb-3">Issues Dashboard</h5>
      <Row>
        <Col>
          <Card className="p-3 shadow" style={{ borderWidth: "0px" }}>
            Last week issues report.
          </Card>
        </Col>
        <Col>
          <Card className="p-3 shadow" style={{ borderWidth: "0px" }}>
            Today's issues
          </Card>
        </Col>
        <Col>
          <Card className="p-3 shadow" style={{ borderWidth: "0px" }}>
            Today's resolved issues
          </Card>
        </Col>
        <Col>
          <Card className="p-3 shadow" style={{ borderWidth: "0px" }}>
            All issues report{" "}
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="mt-3">
          <Card className="p-3 shadow" style={{ borderWidth: "0px" }}>
            All issues report{" "}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Issues;
