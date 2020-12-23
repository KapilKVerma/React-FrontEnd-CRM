import React from "react";
import { Row, Col, Card, Tab, Tabs, Table } from "react-bootstrap";
import Button from "@material-ui/core/Button";

const EmpProfile = () => {
  return (
    <div>
      <Card>
        <Card.Body>
          <h5 className="pl-3"> Profile Details</h5>
          <Row>
            <Col lg={4}>
              <div className="p-3">
                <img
                  src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                  style={{ maxWidth: "100%" }}
                ></img>
              </div>
            </Col>
            <Col className="p-3">
              {" "}
              <Table striped hover>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Kapil K Verma</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Postion</td>
                    <td>Whatever the position</td>
                  </tr>
                  <tr>
                    <td>Office Branch</td>
                    <td>Richmond</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>xyz@company.com</td>
                  </tr>
                  <tr>
                    <td>Phone No.</td>
                    <td>123456799</td>
                  </tr>
                  <tr>
                    <td>Employee Id.</td>
                    <td>#6734-15623</td>
                  </tr>
                  <tr>
                    <td>Address</td>
                    <td>45 brullo street, zombia, 5678</td>
                  </tr>
                  <tr>
                    <td>Department</td>
                    <td>Customer Service</td>
                  </tr>
                  <tr>
                    <td>Emergency Contact No.</td>
                    <td>123456799</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EmpProfile;
