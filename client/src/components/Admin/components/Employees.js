import React, { useState, useEffect } from "react";
import { Row, Col, Table, Card } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

const Employees = () => {
  const [employees, setEmployees] = useState();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/emp")
      .then((res) => {
        console.log(res.data);
        setEmployees(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

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
              <Table striped hover style={{ fontSize: "12px" }}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Branch</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {employees &&
                    employees.map((employee) => {
                      return (
                        <tr>
                          <td>{employee.emp_id}</td>
                          <td>{employee.emp_name}</td>
                          <td>{employee.emp_position}</td>
                          <td>{employee.emp_email}</td>
                          <td>{employee.emp_contact}</td>
                          <td>{employee.emp_officebranch}</td>
                          <td className="p-2" style={{ width: "16%" }}>
                            {" "}
                            <Button
                              variant="contained"
                              style={{
                                backgroundColor: "#00c45f",
                                color: "white",
                                padding: "0.25rem",
                                fontSize: "12px",
                              }}
                            >
                              {" "}
                              Edit{" "}
                            </Button>{" "}
                            |{" "}
                            <Button
                              variant="contained"
                              color="secondary"
                              style={{
                                padding: "0.25rem 1rem",
                                fontSize: "12px",
                              }}
                            >
                              {" "}
                              Delete{" "}
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
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
