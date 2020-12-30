import React from "react";
import { Row, Col, Card, Button, Tab, Tabs } from "react-bootstrap";
const Issues = () => {
  return (
    <div>
      <h5 className=" mb-3">Queries Dashboard</h5>
      <Row>
        <Col>
          <Card className="p-3 shadow" style={{ borderWidth: "0px" }}>
            Last week queries report.
          </Card>
        </Col>
        <Col>
          <Card className="p-3 shadow" style={{ borderWidth: "0px" }}>
            Today's queries
          </Card>
        </Col>
        <Col>
          <Card className="p-3 shadow" style={{ borderWidth: "0px" }}>
            Today's resolved queries
          </Card>
        </Col>
        <Col>
          <Card className="p-3 shadow" style={{ borderWidth: "0px" }}>
            All queries report{" "}
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="mt-3">
          <Card className="p-3 shadow" style={{ borderWidth: "0px" }}>
            All queries report{" "}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Issues;
