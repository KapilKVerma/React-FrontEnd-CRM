import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Row, Col, Card, Container } from "react-bootstrap";
const UserRegis = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "58ch",
      },
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <Card>
        <Card.Body className="p-4 ">
          <h5 className="mb-3 ml-2"> User Registration</h5>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="First Name"
              variant="outlined"
            />
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Last Name"
              variant="outlined"
            />{" "}
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Address"
              variant="outlined"
            />{" "}
            <div></div>
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Phone No."
              variant="outlined"
            />{" "}
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Email"
              variant="outlined"
            />{" "}
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="User Subscription"
              variant="outlined"
            />{" "}
            <div></div>
            <Button
              variant="contained"
              color="primary"
              style={{ width: "45%", padding: "0.75rem" }}
            >
              Register
            </Button>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserRegis;
