import React from "react";
import { Row, Col, Card, Table } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
const Users = () => {
  return (
    <>
      <Card>
        <Card.Header
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "white",
          }}
        >
          Users Information
        </Card.Header>
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
    </>
  );
};

export default Users;
