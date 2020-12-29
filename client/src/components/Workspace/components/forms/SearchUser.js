import React, { useEffect, useState } from "react";
import { Card, Row, Col, Table } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "27ch",
    },
  },
}));
const SearchUser = () => {
  const classes = useStyles();
  const [users, setUsers] = useState();
  const [user, setUser] = useState();

  const searchUser = () => {
    fetch(`http://127.0.0.1:5000/users/search`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: new Headers({
        "content-type": "application/json",
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log("Fetch error: " + error.message);
      });
  };

  useEffect(() => {
    fetch("http://127.0.0.1:5000/users/")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div>
      <Row>
        <Card>
          <Card.Body>
            <h6>Search User</h6>

            <hr></hr>
            <form className={classes.root} noValidate autoComplete="off">
              {" "}
              <TextField
                required
                id="outlined-required"
                label="Name"
                variant="outlined"
                onChange={(e) => {
                  setUser({ ...user, name: e.target.value });
                }}
              />
              <TextField
                required
                id="outlined-required"
                label="Phone No."
                variant="outlined"
                onChange={(e) => {
                  setUser({ ...user, contact: e.target.value });
                }}
              />{" "}
              <Button
                variant="contained"
                color="primary"
                className="mt-3"
                style={{ width: "30%", padding: "0.75rem" }}
                onClick={searchUser}
              >
                Search
              </Button>
            </form>
          </Card.Body>
        </Card>
      </Row>
      <Row>
        {" "}
        <Card
          style={{
            minHeight: "42vh",
            maxHeight: "80vh",
            width: "100%",
          }}
          className=" mt-4"
        >
          <Card.Body>
            <h6> User Details</h6>
            <Table bordered hover size="sm" className="mt-3">
              {users ? (
                <div>
                  {users.map((user) => {
                    return (
                      <tbody key={user.id}>
                        <tr>
                          <td>Name</td>
                          <td>{user.name}</td>
                        </tr>
                        <tr>
                          <td>Contact</td>
                          <td>{user.contact}</td>
                        </tr>
                        <tr>
                          <td>Email</td>
                          <td>{user.email}</td>
                        </tr>
                        <tr>
                          <td>Registration No.</td>
                          <td>{user.registration_no}</td>
                        </tr>
                      </tbody>
                    );
                  })}
                </div>
              ) : (
                <Card
                  style={{
                    height: "30vh",
                    backgroundColor: "#f5f5f5",
                    borderColor: "#ededed",
                    borderWidth: "0px",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    color: "#c4c4c4",
                  }}
                >
                  User Details
                </Card>
              )}
            </Table>
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
};

export default SearchUser;
