import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Row, Col, Card, Container } from "react-bootstrap";
import MenuItem from "@material-ui/core/MenuItem";

const subscriptionType = ["weekly", "monthly", "yearly"];

const CustomerReg = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "58ch",
      },
    },
  }));
  const classes = useStyles();
  // Component's states
  const [custData, setCustData] = useState();

  // Component's methods
  const submitCustData = (e) => {
    e.preventDefault();
    fetch(`http://127.0.0.1:5000/cust`, {
      method: "POST",
      body: JSON.stringify(custData),
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

  return (
    <div>
      <Card>
        <Card.Body className="p-4 ">
          <h5 className="mb-3 ml-2"> Customer Registration</h5>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              required
              id="outlined-required"
              label="First Name"
              onChange={(e) => {
                setCustData({ ...custData, first_name: e.target.value });
              }}
              variant="outlined"
            />
            <TextField
              required
              id="outlined-required"
              label="Last Name"
              onChange={(e) => {
                setCustData({ ...custData, last_name: e.target.value });
              }}
              variant="outlined"
            />{" "}
            <TextField
              required
              id="outlined-required"
              label="Address"
              onChange={(e) => {
                setCustData({ ...custData, address: e.target.value });
              }}
              variant="outlined"
            />{" "}
            <div></div>
            <TextField
              required
              id="outlined-required"
              label="Phone No."
              onChange={(e) => {
                setCustData({ ...custData, contact_no: e.target.value });
              }}
              variant="outlined"
            />{" "}
            <TextField
              required
              id="outlined-required"
              label="Email"
              onChange={(e) => {
                setCustData({ ...custData, email: e.target.value });
              }}
              variant="outlined"
            />{" "}
            <TextField
              id="outlined-select-currency"
              select
              label="Subscription"
              onChange={(e) => {
                setCustData({ ...custData, service_type: e.target.value });
              }}
              helperText="Select subscription type"
              variant="outlined"
            >
              {subscriptionType.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <div></div>
            <Button
              variant="contained"
              color="primary"
              style={{ width: "45%", padding: "0.75rem" }}
              onClick={submitCustData}
            >
              Register
            </Button>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CustomerReg;
