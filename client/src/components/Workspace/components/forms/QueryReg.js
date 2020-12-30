import React, { useState } from "react";
import { Row, Col, Card, Tab, Tabs, Jumbotron } from "react-bootstrap";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

const queryTypes = ["Type A", "Type B", "Type C"];
const departments = ["Sales", "Marketing", "Technical"];

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 480,
    },
  },
}));
const QueryReg = () => {
  const [queryData, setQueryData] = useState();

  const classes = useStyles();
  const submitQuery = (e) => {
    e.preventDefault();
    console.log(queryData);
    fetch(`http://127.0.0.1:5000/query`, {
      method: "POST",
      body: JSON.stringify(queryData),
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
        <Card.Body>
          <h6> Register Query</h6>
          <hr></hr>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="outlined-select-currency"
              select
              label="Query Type"
              onChange={(e) => {
                setQueryData({ ...queryData, query_type: e.target.value });
              }}
              helperText="Query category"
              variant="outlined"
            >
              {queryTypes.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-select-currency"
              select
              label="Department"
              onChange={(e) => {
                setQueryData({ ...queryData, department: e.target.value });
              }}
              helperText="Select department to forward query"
              variant="outlined"
            >
              {departments.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              onChange={(e) => {
                setQueryData({ ...queryData, description: e.target.value });
              }}
              rows={3}
              variant="outlined"
            />
            <TextField
              id="outlined-multiline-static"
              label="Notes"
              multiline
              rows={3}
              onChange={(e) => {
                setQueryData({ ...queryData, notes: e.target.value });
              }}
              variant="outlined"
            />
            <TextField
              id="outlined-multiline-static"
              label="User Registration No."
              multiline
              onChange={(e) => {
                setQueryData({ ...queryData, user_reg_no: e.target.value });
              }}
              variant="outlined"
            />
            <Button
              variant="contained"
              color="primary"
              className="ml-2 mt-4"
              style={{ width: "30%", padding: "0.75rem" }}
              onClick={submitQuery}
            >
              Submit
            </Button>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default QueryReg;
