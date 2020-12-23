import React from "react";
import { Row, Col, Card, Tab, Tabs, Jumbotron } from "react-bootstrap";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 480,
    },
  },
}));
const QueryRegis = () => {
  const [currency, setCurrency] = React.useState("EUR");
  const classes = useStyles();
  const handleChange = (event) => {};
  return (
    <div>
      <Card>
        <Card.Body>
          Register User Query
          <hr></hr>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="outlined-select-currency"
              select
              label="Query Type"
              onChange={handleChange}
              helperText="Query category"
              variant="outlined"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-select-currency"
              select
              label="Department"
              onChange={handleChange}
              helperText="Select department to forward query"
              variant="outlined"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}></MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={3}
              variant="outlined"
            />
            <TextField
              id="outlined-multiline-static"
              label="Notes"
              multiline
              rows={3}
              variant="outlined"
            />
            <TextField
              id="outlined-multiline-static"
              label="User Registration No."
              multiline
              variant="outlined"
            />
            <Button
              variant="contained"
              color="primary"
              className="ml-2 mt-4"
              style={{ width: "30%", padding: "0.75rem" }}
            >
              Submit
            </Button>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default QueryRegis;
