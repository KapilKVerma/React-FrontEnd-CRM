import React from "react";
import { Row, Col, Table, Card } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Employees = () => {
  return (
    <div>
      <Row>
        <Col>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
            className="mb-3"
          >
            {" "}
            <h5>Employees Information</h5>
          </div>{" "}
          <Card>
            <Card.Body className="p-0">
              <Table striped hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td className="p-2" style={{ width: "16%" }}>
                      {" "}
                      <Button
                        variant="contained"
                        style={{
                          backgroundColor: "#00c45f",
                          color: "white",
                          padding: "0.25rem",
                        }}
                      >
                        {" "}
                        Edit{" "}
                      </Button>{" "}
                      |{" "}
                      <Button
                        variant="contained"
                        color="secondary"
                        style={{ padding: "0.25rem 1rem" }}
                      >
                        {" "}
                        Delete{" "}
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Employees;
