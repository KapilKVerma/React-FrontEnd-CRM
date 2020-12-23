import React from "react";
import { Card, Row, Col, Table } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
            Search User
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
            minHeight: "20vh",
            maxHeight: "80vh",
            width: "100%",
          }}
          className=" mt-4"
        >
          <Card.Body>
            User Details
            <Table bordered hover className="mt-3">
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>Mark</td>
                </tr>
                <tr>
                  <td>Contact</td>
                  <td>Jacob</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>Jacob</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>Jacob</td>
                </tr>
                <tr>
                  <td>Registration No.</td>
                  <td>Jacob</td>
                </tr>
                <tr>
                  <td>Service Type</td>
                  <td>Jacob</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
};

export default SearchUser;
