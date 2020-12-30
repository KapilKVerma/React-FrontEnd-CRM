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
  const [user, setUser] = useState();
  const [userSearch, setUserSearch] = useState();

  const searchUser = () => {
    fetch(`http://127.0.0.1:5000/cust/search`, {
      method: "POST",
      body: JSON.stringify(userSearch),
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
        setUser(data[0]);
      })
      .catch((error) => {
        console.log("Fetch error: " + error.message);
      });
  };

  useEffect(() => {}, []);

  return (
    <div>
      <Row>
        <Card>
          <Card.Body>
            <h6>Search Customer</h6>

            <hr></hr>
            <form className={classes.root} noValidate autoComplete="off">
              {" "}
              <TextField
                required
                id="outlined-required"
                label="Name"
                variant="outlined"
                onChange={(e) => {
                  setUserSearch({ ...userSearch, name: e.target.value });
                }}
              />
              <TextField
                required
                id="outlined-required"
                label="Phone No."
                variant="outlined"
                onChange={(e) => {
                  setUserSearch({ ...userSearch, contact: e.target.value });
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
            <h6> Customer Details</h6>
            <Table bordered hover size="sm" className="mt-3">
              {user ? (
                <div>
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
