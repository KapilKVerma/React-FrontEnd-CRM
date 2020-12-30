import React, { useState } from "react";
import { Row, Col, Table, Card } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "57.5ch",
    },
  },
}));

const departments = ["Sales", "Marketing", "Technical"];
const branches = ["Melbourne", "Sydeny", "Adelaide", "Perth", "Tasmania"];

const EmpRegis = () => {
  const [startDate, setStartDate] = useState(new Date());

  const [empData, setEmpData] = useState();
  const classes = useStyles();

  const submitEmpData = (e) => {
    e.preventDefault();
    fetch(`http://127.0.0.1:5000/emp/new`, {
      method: "POST",
      body: JSON.stringify(empData),
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
                Employee Details:<div></div>
                <TextField
                  required
                  id="outlined-required"
                  label="First Name"
                  onChange={(e) => {
                    setEmpData({ ...empData, first_name: e.target.value });
                  }}
                  variant="outlined"
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Last Name"
                  onChange={(e) => {
                    setEmpData({ ...empData, last_name: e.target.value });
                  }}
                  variant="outlined"
                />
                <TextField
                  id="outlined-required"
                  select
                  label="Department"
                  onChange={(e) => {
                    setEmpData({ ...empData, department: e.target.value });
                  }}
                  variant="outlined"
                >
                  {departments.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  required
                  id="outlined-required"
                  label="Position"
                  onChange={(e) => {
                    setEmpData({ ...empData, position: e.target.value });
                  }}
                  variant="outlined"
                />{" "}
                <TextField
                  id="outlined-required"
                  select
                  label="Office Branch"
                  onChange={(e) => {
                    setEmpData({ ...empData, office_branch: e.target.value });
                  }}
                  variant="outlined"
                >
                  {branches.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  required
                  id="outlined-required"
                  label="Contact No."
                  onChange={(e) => {
                    setEmpData({ ...empData, contact_no: e.target.value });
                  }}
                  variant="outlined"
                />
                <span className="p-1 ">
                  {" "}
                  <span className="pr-3 ">Start Date *:</span>
                  <DatePicker
                    selected={startDate}
                    label="Start Date"
                    onChange={(date) =>
                      setEmpData({ ...empData, date_started: date })
                    }
                  />
                </span>
                <div></div>
                <TextField
                  required
                  id="outlined-required"
                  label="Address"
                  onChange={(e) => {
                    setEmpData({ ...empData, address: e.target.value });
                  }}
                  variant="outlined"
                />{" "}
                <div></div>
                Emergency Contact Details:
                <div></div>
                <TextField
                  required
                  id="outlined-required"
                  label="Name"
                  onChange={(e) => {
                    setEmpData({
                      ...empData,
                      emergency_contact_name: e.target.value,
                    });
                  }}
                  variant="outlined"
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Contact No."
                  onChange={(e) => {
                    setEmpData({
                      ...empData,
                      emergency_contact_no: e.target.value,
                    });
                  }}
                  variant="outlined"
                />
                <div></div>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={submitEmpData}
                >
                  SUBMIT
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
