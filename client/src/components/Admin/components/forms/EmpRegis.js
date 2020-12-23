import React from "react";
import { Row, Col, Table, Card } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "57.5ch",
    },
  },
}));

const EmpRegis = () => {
  const classes = useStyles();
  return (
    <>
      <Row>
        <Col>
          {" "}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
            className="mb-3"
          >
            {" "}
            <h5>Register Employee</h5>
          </div>{" "}
          <Card>
            <Card.Body>
              {" "}
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
                  defaultValue="First Name"
                  variant="outlined"
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Required"
                  defaultValue="First Name"
                  variant="outlined"
                />
                <div></div>
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
                  defaultValue="First Name"
                  variant="outlined"
                />
                <div></div>
                <TextField
                  required
                  id="outlined-required"
                  label="Required"
                  defaultValue="First Name"
                  variant="outlined"
                />
                <div></div>
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
                  defaultValue="First Name"
                  variant="outlined"
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Required"
                  defaultValue="First Name"
                  variant="outlined"
                />
                <div></div>
                <Button variant="contained" color="primary">
                  Search
                </Button>
              </form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default EmpRegis;
