import React from "react";
import { Card, Row, Col, Table } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const user = "";
//  {
//   name: "Tom Derick",
//   contact: "0412345662",
//   email: " firstname.last@company.com",
//   address: "345 #address, City, State - 5678",
//   registration_no: "#8345#45bHJ4Erc&77",
//   service_type: "monthly",
// };

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
              />
              <TextField
                required
                id="outlined-required"
                label="Phone No."
                variant="outlined"
              />{" "}
              <Button
                variant="contained"
                color="primary"
                className="mt-3"
                style={{ width: "30%", padding: "0.75rem" }}
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
              {user ? (
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>{user.name}</td>
                  </tr>
                  <tr>
                    <td>Contact</td>
                    <td>{user.contact}</td>
                  </tr>
                  <tr>
                    <td>Registration No.</td>
                    <td>{user.registration_no}</td>
                  </tr>
                </tbody>
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
